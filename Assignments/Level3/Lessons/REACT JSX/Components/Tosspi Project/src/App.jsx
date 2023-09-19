import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NewTosspiLogo from '../public/images/NewTosspiLogo.jpg';
import Navbar from './components/Navbar';
import Main from './components/Main';
//import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
    {/*<Footer />*/}
    </>
  )
}

export default App
