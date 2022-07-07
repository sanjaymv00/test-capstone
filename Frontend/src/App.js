import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';

function App() {


  if(localStorage.getItem('loggedIn')==null){
    localStorage.setItem('userId',null);
    localStorage.setItem('loggedIn',false);
  }

  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route exact path = '/login' element = {<Login/>}/>
            <Route exact path = '/signup' element = {<Signup/>}/>
            <Route exact path = '/profile' element = {<ProtectedRoute><Profile/></ProtectedRoute>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
