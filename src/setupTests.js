import openai
from docx import Document
import pandas as pd
import re
import io

# -------------------------
# Helper Functions
# -------------------------

def read_docx(file_path):
    doc = Document(file_path)
    full_text = []
    for para in doc.paragraphs:
        if para.text.strip():
            full_text.append(para.text.strip())
    return "\n".join(full_text)

def create_prompt(brd_text):
    return f"""
    Based on the following healthcare Business Requirement Document (BRD),
    generate a list of test scenarios. 
    Provide output in the following format:

    Test Case Title | Test Scenario Description | Type (Positive/Negative)

    --- BRD Content Starts ---
    {brd_text}
    --- BRD Content Ends ---
    """

def generate_test_scenarios(brd_content):
    system_prompt = """
    You are an expert Healthcare QA Specialist with deep knowledge of healthcare policies, 
    member enrollment, claims processing, compliance (e.g., HIPAA, ACA), and insurance benefit plans.

    When reading a Business Requirement Document (BRD) describing healthcare policy changes, you should:
    - Understand implied impacts (even if not explicitly written).
    - Validate eligibility, enrollment, claims, billing, policy effective dates, grandfathered member handling, and compliance aspects.
    - Generate detailed and exhaustive test scenarios.
    - Output must be well-structured: Test Case Title | Test Scenario Description | Type (Positive/Negative)
    """

    openai.api_type = "azure"
    openai.api_base = "https://YOUR-AZURE-RESOURCE-NAME.openai.azure.com/"
    openai.api_version = "2023-07-01-preview"
    openai.api_key = "YOUR-AZURE-API-KEY"

    final_prompt = create_prompt(brd_content)

    response = openai.ChatCompletion.create(
        engine="gpt-4",  # or your Azure deployment name
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": final_prompt}
        ],
        temperature=0.2,
        max_tokens=4000
    )

    return response['choices'][0]['message']['content']

def parse_test_scenarios(llm_output):
    lines = llm_output.strip().split("\n")
    parsed_data = []

    for line in lines:
        parts = [part.strip() for part in re.split(r'\|', line)]
        if len(parts) == 3:
            parsed_data.append({
                "Test Case Title": parts[0],
                "Test Scenario Description": parts[1],
                "Type": parts[2]
            })
    return parsed_data

def save_to_excel(dataframe, file_path):
    with pd.ExcelWriter(file_path, engine="openpyxl") as writer:
        dataframe.to_excel(writer, index=False, sheet_name="TestScenarios")
        workbook = writer.book
        worksheet = writer.sheets["TestScenarios"]

        # Autofit columns
        for column in worksheet.columns:
            max_length = 0
            column_letter = column[0].column_letter
            for cell in column:
                try:
                    if cell.value:
                        max_length = max(max_length, len(str(cell.value)))
                except:
                    pass
            adjusted_width = (max_length + 2)
            worksheet.column_dimensions[column_letter].width = adjusted_width

# -------------------------
# Main Flow
# -------------------------

def main():
    print("Healthcare BRD ➔ Test Scenarios Generator")

    brd_file = input("Enter the path to your BRD .docx file: ").strip()
    output_file = input("Enter the desired output Excel file name (e.g., test_scenarios.xlsx): ").strip()

    try:
        brd_content = read_docx(brd_file)
        print("\nReading BRD and calling Azure OpenAI... Please wait...\n")

        llm_output = generate_test_scenarios(brd_content)
        test_scenarios = parse_test_scenarios(llm_output)

        if not test_scenarios:
            print("No test scenarios generated. Please check the BRD content or try again.")
        else:
            df = pd.DataFrame(test_scenarios)
            save_to_excel(df, output_file)
            print(f"\n✅ Test Scenarios generated successfully! Saved to: {output_file}")
    except Exception as e:
        print(f"❌ Error occurred: {str(e)}")

if __name__ == "__main__":
    main()
