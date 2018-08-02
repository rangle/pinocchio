import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
        <img src='/pinocchio.jpg' style={{height: '70px'}}/> Pinocchio
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
