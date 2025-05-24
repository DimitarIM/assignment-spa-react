import { useState } from 'react';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';

import Home from './pages/Home/Home';
import Exercises from './pages/Exercises/Exercises';
import About from './pages/About/About';
function App() {

  const [activePage, setActivePage] = useState("home");
  console.log(activePage);

  return (
    <>
      <NavBar {...{setActivePage}}/>
      <main className='main-content'>
        {activePage === "home" && <Home />}
        {activePage === "exercises" && <Exercises />}
        {activePage === "about" && <About />}
      </main>
      <Footer/>
    </>
  )
}

export default App
