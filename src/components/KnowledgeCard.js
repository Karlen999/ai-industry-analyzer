import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const KnowledgeCard = ({ title, content }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default KnowledgeCard;
