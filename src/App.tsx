import React, { Fragment } from "react"
import { Home } from './Screen/Home/index'
import { NavBar } from "./Screen/NavBar"
import { Footer } from "./Screen/footer"


const App = () => {


     return (
          <Fragment>
               <NavBar />
               <Home />
               <Footer />
          </Fragment>
     )
}

export default App