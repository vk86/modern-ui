import SearchableDropdown from './SearchableDropdown'; // make sure it's imported

<Form.Group className="mb-3 pt-3 w-100">
  <Form.Label><b>Application</b></Form.Label>

  <SearchableDropdown
    label="Select Application"
    options={isRallyAuthenticated && projects.length > 0 ? projects : []}
    onSelect={handleApplicationChange}
    disabled={!isRallyAuthenticated || projects.length === 0}
  />

  {!isRallyAuthenticated || projects.length === 0 ? (
    <div style={{ color: '#999', fontSize: '13px', marginTop: '4px' }}>
      No projects available
    </div>
  ) : null}
</Form.Group>
