import { Alert, Container, Typography } from '@mui/material';

export const App = () => {
  return (
    <Container sx={{ bgcolor: 'tomato', height: '100vh' }}>
      <Typography variant="h1" sx={{ p: 2, ':hover': { bgcolor: 'blue' } }}>
        TEST
      </Typography>
      <Alert severity="error">Hello</Alert>
      <Container></Container>
    </Container>
  );
};
