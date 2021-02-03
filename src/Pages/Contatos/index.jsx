import React from 'react'

import Bg from '../../Components/Bg'
import Header from '../../Components/Header'

import bg from '../../assets/bg-contato.jpg'

import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Bg
        image={bg}
        min="true"
        page="CONTATO"
        text="tire as suas dúvidas com a gente"
      />
      <Contact transparent="true" />

      <Footer />
    </>
  )
}

export default Home
