import './App.css'

import { Route , Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element = {<HomePage />}></Route>
      <Route path="/about" element={<HomePage/>}></Route>
    </Routes>

  
    </>
)}

export default App;
