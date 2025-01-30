import './App.css';
import Nav from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <About />
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
