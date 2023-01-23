import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import Carousel from './componentes/Carousel/Carousel'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'






function App() {
  

  

  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo='Saludos soy ItemListContainer'/>
      <Carousel/>
    </div>
  )
}

export default App
