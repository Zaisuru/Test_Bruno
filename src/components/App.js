import logo from '../assets/Logo.svg';
import '../styles/App.css';

import Header from "./Header";
import Hero from "./Hero";
import Reassurance from "./Reassurance";
import Solutions from "./Solutions"
import Consultants from "./Consultants";

function App() {
  return (
     <div className="grid-container">
       <Header />
       <Hero />
       <Reassurance />
       <Consultants />
       <Solutions />
     </div>
  )
}

export default App
