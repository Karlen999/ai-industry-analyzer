import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ role, setRole, industry, setIndustry, location, setLocation }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
      <FormControl fullWidth>
        <InputLabel>Role</InputLabel>
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <MenuItem value="BA">Business Analyst</MenuItem>
          <MenuItem value="PO">Product Owner</MenuItem>
          <MenuItem value="Dev">Developer</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Industry</InputLabel>
        <Select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <MenuItem value="Finance">Finance</MenuItem>
          <MenuItem value="Healthcare">Healthcare</MenuItem>
          <MenuItem value="Tech">Technology</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Location</InputLabel>
        <Select value={location} onChange={(e) => setLocation(e.target.value)}>
          <MenuItem value="NA">North America</MenuItem>
          <MenuItem value="EU">Europe</MenuItem>
          <MenuItem value="ASIA">Asia</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;