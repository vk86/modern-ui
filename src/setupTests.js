let allNodes = [...initialNodes];
let allEdges = [];

const testCases = data.test_cases || [];
testCases.forEach((testCase, index) => {
  const testCaseNodeId = `${data._id}-testcase-${testCase.test_case_id}-${index}`;
  allNodes.push({
    id: testCaseNodeId,
    data: {
      label: (
        <div className="node-wrapper">
          <div className="node-title">Test Case</div>
          <ResizablePosterBox
            id={testCase.test_case_id}
            title={`Name: ${testCase.title}`}
          />
        </div>
      )
    },
    position: { x: 400, y: 300 * index },
    type: 'default',
    draggable: true,
  });

  allEdges.push({
    id: `${data._id}-testcase-${index}`,
    source: data._id,
    target: testCaseNodeId,
    type: 'smoothstep',
    markerEnd: { type: 'arrow' },
    sourcePosition: 'right',
    targetPosition: 'bottom'
  });

  const testScripts = testCase.test_scripts || [];
  testScripts.forEach((script, scriptIndex) => {
    const scriptNodeId = `${testCaseNodeId}-testscript-${scriptIndex}`;
    allNodes.push({
      id: scriptNodeId,
      data: {
        label: (
          <div className="node-wrapper">
            <div className="node-title">Test Script</div>
            <ResizablePosterBox
              id={script.test_script_id}
              title={`Name: ${script.title}`}
            />
          </div>
        )
      },
      position: { x: 700, y: 300 * scriptIndex },
      type: 'default',
      draggable: true
    });

    allEdges.push({
      id: `${testCaseNodeId}-testscript-${scriptIndex}`,
      source: testCaseNodeId,
      target: scriptNodeId,
      type: 'smoothstep',
      markerEnd: { type: 'arrow' },
      sourcePosition: 'right',
      targetPosition: 'bottom'
    });
  });
});

setNodes(allNodes);
setEdges(allEdges);
