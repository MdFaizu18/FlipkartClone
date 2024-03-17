import './App.css';
import Header from '../src/components/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';

function App() {
  return (
    // so we could able to use all the components inside the dataprovider 
    <DataProvider >
      <Header />
      <Box style={{marginTop:54}}>
      <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
