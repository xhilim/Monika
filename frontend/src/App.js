import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login"
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Start from './pages/Start'
import Home from './pages/Home';

function App() 
{
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Start />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}

export default App;
