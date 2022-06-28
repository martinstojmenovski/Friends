import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
