import StepperForm from '../components/StepperForm';
import { Typography, Card, CardContent, Box } from '@mui/material';

const Registration = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 600,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ padding: 4 }}>
          <Typography
            variant='h4'
            sx={{
              color: 'text.primary',
              marginBottom: 2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Registration
          </Typography>
          <StepperForm />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Registration;
