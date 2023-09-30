import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Signup from "./components/Signup"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Posts from "./components/Posts"


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
