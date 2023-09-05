import { useState } from 'react'
import reactLogo from './assets/react.svg'          /*imports the react logo */
import viteLogo from '/vite.svg'                    /*imports the vite logo */
import './App.css'                                  /*imports the App.css file.*/
import Header from './components/Header'            /*imports the Header.jsx file from the components folder.*/
import Footer from './components/Footer'            /*imports the Footer.jsx file from the components folder.*/
import MainContent from './components/MainContent'  /*imports the MainContent.jsx filer from the components folder.*/

function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainContent />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
