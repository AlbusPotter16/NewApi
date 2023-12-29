 
import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
 
const [category ,setcatagory]=useState("general")
  return (
    <>
    <Navbar setcatagory={setcatagory}/>
    <NewsBoard category={category}/>
 
    </>
  )
}

export default App
