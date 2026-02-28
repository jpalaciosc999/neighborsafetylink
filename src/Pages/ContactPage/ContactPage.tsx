import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactPage: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      textAlign: 'center',
    }}>
      <Typography variant="h4">Contáctanos</Typography>
      <Typography variant="body1">Información de contacto de NeighborSafetyLink.</Typography>
    </Box>
  );
}

export default ContactPage;