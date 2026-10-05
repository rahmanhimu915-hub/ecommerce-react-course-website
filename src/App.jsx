import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./Components/Navbar"
import './App.css'

/**
 * Renders the shared navigation and the home, authentication, and checkout routes.
 * @returns {import('react').ReactElement} The application layout.
 */
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  )
}

export default App
