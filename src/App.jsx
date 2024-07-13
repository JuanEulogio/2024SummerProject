import { useState } from 'react'
import { Container, Row, Col, Button, Image, Card, Carousel } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  return ( <div>
     <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  </div>
  )
}

export default App
