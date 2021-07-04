import './App.css';
import React from "react";


import About from "./components/About/index";
import Header from "./components/Header/header";
import Contact from "./components/Contact/index"
import Footer from "./components/Footer/index";
// import  from "./components/Projects/index.js"
 import Resume from "./components/Resume/index.js"
import Portfolio from "./components/Portfolio/portfolio"

function App() {
  return(
  
   <div>
     <Header/>
     <main>
       <About/>
 <Portfolio/>
  <Contact/>
  <Resume/>
    </main>
   <Footer/> 
   </div> 

  );
}

export default App;
