import React from 'react'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import Subscribe from './Component/Subscribe/Subscribe'
import Banner2 from './Component/Banner/Banner2'
import Footer from './Component/Footer/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero/>
      <Services/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </main>
  )
}

export default App