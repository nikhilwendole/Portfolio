import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import About from './components/About'

import PricingPage from './components/Pricingpage'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Services from './components/services'


const App = () => {
  return (
    <div>
      <Navbar/>
  <Hero/>
  <About/>
  <Projects/>
<Services/>
<PricingPage/>
<Contact/>

    </div>
  )
}

export default App