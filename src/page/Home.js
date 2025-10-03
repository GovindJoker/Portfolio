import React from 'react'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Work from './components/Work'
import HireMe from './components/HireMe'
import ContectUs from './components/ContectUs'

const Home = () => {
  return (
   <div>
     {/* <div class="fh5co-loader"></div> */}
    <div id="page">
        {/* <h1>swrfgfe</h1> */}
        <Header/>
        <AboutMe/>
        <Resume/>
        <Skills/>
        <Work/>
        <HireMe/>
        {/* <ContectUs/> */}
    </div>
   </div>
  )
}

export default Home