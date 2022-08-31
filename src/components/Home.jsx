import React from 'react'
import About from './About';
import AllInOne from './AllInOne';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar'
import Pricing from './Pricing';
import Support from './Support'


function Home() {
    return (
        <>
        <div>
          <Navbar />
          <Hero />
          <About />
          <Support />
          <AllInOne />
          <Pricing />
        <Footer />
        </div>
        </>
      
  )
}

export default Home