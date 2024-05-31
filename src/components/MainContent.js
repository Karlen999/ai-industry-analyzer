import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const MainContent = () => {
  // Dummy data for demonstration
  const knowledgeSections = [
    "Terms and expressions",
    "Processes",
    "Products",
    "etc"
  ];

  return (
    <Box sx={{ ml: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Necessary Section
      </Typography>
      {knowledgeSections.map((section, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">
              {section}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MainContent;