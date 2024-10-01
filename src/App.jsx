import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from "./pages/Home"
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  // TheBrowserRouter component must wrap around the entire app
  return (
    <BrowserRouter>
      <h1>React Router</h1>

      {/* The Link intercepts the request and swaps out the content that is displayed on screen */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* The Routes contains all the pages and components to render for each page */}
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>

      <footer>
        <h3>This is my footer</h3>
      </footer>

    </BrowserRouter>
  )
}

export default App
