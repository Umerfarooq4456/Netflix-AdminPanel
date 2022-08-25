import axios from 'axios';
import { useSelector } from 'react-redux';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './utils/routes/MainRoutes';
import './App.css';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  const { loginData } = useSelector(state => state.Auth);

  if (loginData) {
    const newToken = localStorage.setItem('new-token', loginData.data.token);
    if (newToken) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + newToken;
    } else {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + loginData.data.token;
    }
    axios.defaults.headers.common['DeviceId'] = 'web';
  }

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
