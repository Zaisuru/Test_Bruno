import logo from '../assets/Logo.svg';
import '../styles/App.css';

import Header from "./Header";
import Hero from "./Hero";
import Reassurance from "./Reassurance";
import Solutions from "./Solutions"
import Consultants from "./Consultants";
import Designed from "./Designed";

function App() {
  return (
     <div className="grid-container">
         <Header />
         <Hero />
         <Reassurance />
         <Consultants />
         <Solutions />
         <Designed />
     </div>
  )
}
export default App
