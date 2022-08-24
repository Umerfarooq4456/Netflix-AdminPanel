import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './utils/routes/MainRoutes';
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
