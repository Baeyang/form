import './App.css';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Page/login';
import UserProvider from './Context/context';
import Home from './Page/home';
import Private from './Page/privateroute';

function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}></Route>
          <Route element={<Private/>}>
            <Route path='Home' element={<Home/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App;
