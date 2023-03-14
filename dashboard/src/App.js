import './App.css';

//components
import NavBar from './components/NavBar';
import ScanResultDetail from './components/ScanResultDetail';
import ScanResultList from './components/ScanResultLIst';
import AddScanResult from './components/AddScanResult';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add'  element= {<AddScanResult />} />
        <Route path='/list' element={ <ScanResultList />} />
        <Route path='/detail' element={ <ScanResultDetail />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
