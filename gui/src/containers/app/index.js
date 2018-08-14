import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
        <img src='/pinocchio.jpg' style={{height: '70px'}}/>
The Pinocchio Project: Towards using machine learning to boost the manual QA process.
    <br/>Early Proof of Concept



</header>
    <br/>
    <main>
        <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
