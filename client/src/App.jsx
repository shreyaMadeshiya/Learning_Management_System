import './App.css'

import { Route , Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import CourseList from './Pages/Course/CourseList';
import HomePage from './Pages/HomePage';
import Login from './Pages/login';
import NotFound from './Pages/NotFound';
import Signup from './Pages/SignUp';



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element = {<HomePage />}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/courses" element={<CourseList/>}></Route>cd


      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
      <Route path="*" element={<NotFound/>}></Route>

    </Routes>

  
    </>
)}

export default App;
