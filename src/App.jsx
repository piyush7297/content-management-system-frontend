import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
