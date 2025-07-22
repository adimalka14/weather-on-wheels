import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import { PlacesPage, CreationPage } from './pages/';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/creation" element={<CreationPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
