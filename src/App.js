import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  const [border, setBorder] = useState('')
  const [center, setCenter] = useState(false)
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<FirstPage border={border} center={center} />} />
          <Route path='/second' element={<SecondPage setBorder={setBorder} setCenter={setCenter} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
