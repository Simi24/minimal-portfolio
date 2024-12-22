import { Navbar } from './components/Navbar'
import {About} from './components/About'
import './App.css'
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notes from './components/Notes';

//TODO: Add a footer component
//TODO: Add a contact component
//TODO: check navigation while scrolling, must update the url when section is in view

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full bg-sky-950">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Experience />
                <Projects />
              </>
            } />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
