import { Navbar } from './components/Navbar'
import {About} from './components/About'
import './App.css'
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

//TODO: Add a footer component
//TODO: Add a contact component
//TODO: check navigation while scrolling, must update the url when section is in view

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full bg-sky-950">
      <Navbar />
      <main className="flex-grow w-full">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App
