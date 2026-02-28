import Box from '@mui/material/Box';
import { 
    Button,
    Typography
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function HomePage() {
    return (
        <Box component="main" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            textAlign: 'center',
        }}>
            <Typography variant="h4">Bienvenido a NeighborSafetyLink</Typography>
            <Typography variant="body1">Inicia sesión para llevar tu control, comunicarte y tener actualizaciones de tu colonia al instante.</Typography>
            <Button sx={{ marginTop: 2 }} variant="contained" color="secondary" endIcon={<LoginIcon />}>Iniciar sesión</Button>
        </Box>
      );
}
