import logo from '../assets/logo.svg';
import '../styles/App.css';

import Header from "./Header";
import Hero from "./Hero";
import Reassurance from "./Reassurance";
import Consultants from "./Consultants"
import Solutions from "./Solutions"

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


/*
       <Reassurance />
       <Solutions />*/