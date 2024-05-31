import React from 'react';
import { Box, Button } from '@mui/material';

const Actions = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Button variant="contained" color="primary">More Details</Button>
      <Button variant="contained" color="secondary">Regenerate Response</Button>
      <Button variant="contained">Download Results</Button>
    </Box>
  );
};

export default Actions;