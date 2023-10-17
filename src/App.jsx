import logo from './logo.svg';
import './App.css';
import { Navbar, Home, Projects, Experience, Achievements,
  Leadership,Contact } from './components/sections';
import Tools_and_Tech from './components/sections/Tools_and_Tech';
import Footer from './components/parts/Footer';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Experience/>
      <Tools_and_Tech/>
      <Achievements/>
      <Leadership/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
