import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import SingleWork from './components/SingleWork'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/work' element={<Work/>} />
    <Route path='/work/:id' element={<SingleWork/>} />
     
     </Routes>
     <Footer/>
    </>
  )
}

export default App
