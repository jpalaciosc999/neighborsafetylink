import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutPage: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      textAlign: 'center',
    }}>
      <Typography variant="h4">Sobre Nosotros</Typography>
      <Typography variant="body1">Información sobre NeighborSafetyLink.</Typography>
    </Box>
  );
}

export default AboutPage;