
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signin from './components/authcomponents/Signin';
import Signup from './components/authcomponents/Signup';
import HomePage from './components/HomePage';
import Dashboard from './components/seller/Dashboard';

function App() {
  return (
    <div className="App">
       
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sellerdash' element={<Dashboard/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
