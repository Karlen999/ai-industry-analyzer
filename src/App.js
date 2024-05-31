import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, Container, Typography } from '@mui/material';
import Header from './components/Header';
import Filter from './components/Filter';
import Actions from './components/Actions';
import MainContent from './components/MainContent';
import theme from './theme';

const App = () => {
  const [role, setRole] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container sx={{ display: 'flex', mt: 4 }}>
        <Box sx={{ width: '20%' }}>
          <Typography variant="h6" gutterBottom>Filters</Typography>
          <Filter role={role} setRole={setRole} industry={industry} setIndustry={setIndustry} location={location} setLocation={setLocation} />
          <Typography variant="h6" gutterBottom>Actions</Typography>
          <Actions />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <MainContent />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;