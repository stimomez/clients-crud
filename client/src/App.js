import './App.css';
import ClientList from './components/ClientList';
import Inputs from './components/Inputs';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    identificationDocument: '',
    telephone: '',
    email: '',
    password: '',
    address: '',
    documentPdf: '',
  });

  const reset = () => {
    setData({
      name: '',
      lastName: '',
      identificationDocument: '',
      telephone: '',
      email: '',
      password: '',
      address: '',
      documentPdf: '',
    });
  };
  const URL = 'http://localhost:3520/api/v1/clients';
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/clients"
            element={<ClientList URL={URL} setData={setData} />}
          />
          <Route
            path="/addclient"
            element={
              <Inputs URL={URL} data={data} setData={setData} reset={reset} />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
