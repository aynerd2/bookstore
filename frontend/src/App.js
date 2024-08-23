import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Showbooks from './components/Showbooks';
import DeleteBooks from './components/DeleteBooks';
import EditBooks from './components/EditBooks'
import Home from './components/Home';
import CreateBooks from './components/CreateBooks';
import Login from './components/authcomponent/Login';
import Signup from './components/authcomponent/Signup';
import PrivateRoute from './components/authcomponent/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Signup />} />

    {/* PRIVATE */}
    <Route element={<PrivateRoute/>}>
      <Route path="/home" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<Showbooks />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Route>

  </Routes>
  );
}

export default App;
