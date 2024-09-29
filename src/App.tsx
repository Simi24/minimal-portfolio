import { Navbar } from './components/Navbar'
import {About} from './components/About'
import './App.css'
import { Experience } from './components/Experience';

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full bg-sky-950">
      <Navbar />
      <main className="flex-grow w-full">
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App
