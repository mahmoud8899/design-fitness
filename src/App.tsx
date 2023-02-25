import React from "react"
import { Home } from './Screen/Home/index'
import './css/index.css'
import { NavBar } from "./Screen/NavBar"
import { Footer } from "./Screen/footer"


const App = () => {


     return (
          <>
              <Footer   />
               <NavBar />
               <Home />
          </>)
}

export default App