
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Service from './views/Service'
import News from './views/News'
import Contact from './views/Contact'
import PageNotFound from './views/PageNotFound'
import ScrollToTop from './components/ScrollToTop'
import AutoScrollToTop from './components/AutoScrollToTop'



function App() {
  return (
    <BrowserRouter>
    <AutoScrollToTop/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
