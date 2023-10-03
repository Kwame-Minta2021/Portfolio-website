import logo from './logo.svg';
import './App.css';
import { Navbar, Home, Projects, Experience, Achievements,
  Leadership,Contact } from './components/sections';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Experience/>
      <Achievements/>
      <Leadership/>
      <Contact/>
    </div>
  );
}

export default App;
