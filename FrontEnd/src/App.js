
import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import AdminLogin from './components/AdminPanel/AdminLogin'

import AboutPage from './pages/AboutPage'
import AdminClientsPage from './pages/AdminClientsPage'
import AdminGalleryPage from './pages/AdminGalleryPage'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

import HomePage from './pages/HomePage'
import HouseKeepingPage from './pages/HouseKeepingPage'
import SecrityGuardsPage from './pages/SecrityGuardsPage'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/houseKeeping" element={<HouseKeepingPage/>}></Route>
      <Route exact path="/securityGuards" element={<SecrityGuardsPage/>}></Route>
      <Route exact path="/clients" element={<ClientsPage/>}></Route>
      <Route exact path="/contact" element={<ContactPage/>}></Route>
      <Route exact path="/gallery" element={<GalleryPage/>}></Route>
      <Route exact path="/admin" element={<AdminLogin/>}></Route>
      <Route exact path="/adminHome" element={<AdminGalleryPage/>}></Route>
      <Route exact path="/adminClient" element={<AdminClientsPage/>}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App