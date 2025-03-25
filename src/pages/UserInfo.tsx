import {
  Button,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import { useFormStore } from '../store/formStore';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipCode,
    username,
    resetForm,
  } = useFormStore();

  const handleClear = () => {
    resetForm();
    navigate('/');
  };

  const userData = [
    { label: 'First Name', value: firstName },
    { label: 'Last Name', value: lastName },
    { label: 'Email', value: email },
    { label: 'Street', value: street },
    { label: 'City', value: city },
    { label: 'State', value: state },
    { label: 'Zip Code', value: zipCode },
    { label: 'Username', value: username },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant='h4' component='h1' gutterBottom>
            User Information
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }}>
              <TableBody>
                {userData.map(({ label, value }) => (
                  <TableRow key={label}>
                    <TableCell>
                      <strong>{label}</strong>
                    </TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant='contained' onClick={handleClear} sx={{ mt: 2 }}>
            Clear Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserInfo;
