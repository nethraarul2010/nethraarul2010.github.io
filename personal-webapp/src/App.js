import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
