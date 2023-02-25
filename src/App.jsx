
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import TestPage from './pages/TestPage'

function App() {
  return (
    <div className="main">
       <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/test/page' element={ <TestPage /> } />
         
       </Routes>
    </div>
  )
}

export default App
