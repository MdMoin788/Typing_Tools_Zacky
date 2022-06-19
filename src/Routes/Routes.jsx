import React from 'react'
import {Route, Routes as Router} from "react-router-dom"
import Home from '../Components/Home'
import ShowResults from '../Components/ShowResults'

const Routes = () => {
  return (
    <div>
        <Router>
            <Route path='/' element={<Home />}/>
            <Route path='/results' element={< ShowResults />}/>
        </Router>
      
    </div>
  )
}

export default Routes
