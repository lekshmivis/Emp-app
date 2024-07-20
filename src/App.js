import logo from './logo.svg';
import './App.css';
import AddEmp from './component/AddEmp';
import SearchEmp from './component/SearchEmp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddEmp/>}/>
    <Route path='/search' element={<SearchEmp/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
