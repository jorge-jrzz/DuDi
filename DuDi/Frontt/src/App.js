import React from 'react';
import './App.css';
/* adding all pages in the file */
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/pure/PrivateRoute';
import Proveedor from './pages/Proveedor';
import ContratistaPage from './pages/Contratista';
import FichaTecnica from './pages/FichaTecnica';

function App() {


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={
          <Login/>
        }/>
        <Route path='/log-in' element={
          <Login/>
        }/>
        <Route path='/sign-up' element={
          <SignUp/>
        }/>
        {/* private routes */}
        <Route path='/home-proveedor' element={
          <PrivateRoute>
            <Proveedor/>
          </PrivateRoute>
        }/>
        <Route path='/home-contratista' element={
          <PrivateRoute>
            <ContratistaPage/>
          </PrivateRoute>
        }/>
        <Route path='/ficha-tecnica' element={
          <PrivateRoute>
            <FichaTecnica/>
          </PrivateRoute>
        }/>

      </Routes>
    </div>
  );
}

export default App;
