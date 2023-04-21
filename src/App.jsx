import { useState } from 'react'
import './App.css'
import {Navbar, Brand , Cta} from './component/Import'
import {Blog , Intro ,Possibility,Features,Footer,Header } from './conatiners/Import'


function App() {

  return (
    <div>
    <Navbar/>
    <Header/>
    <Brand/>
    <Intro/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  )
}

export default App
