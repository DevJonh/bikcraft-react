import React from 'react'

import Bg from '../../Components/Bg'
import Header from '../../Components/Header'
import BgFooter from '../../Components/BgFooter'
import Footer from '../../Components/Footer'
import Portifolio from '../../Components/Portifolio'

import bg from '../../assets/bg-portfolio.jpg'
import bgFooter from '../../assets/bg-footer.jpg'

import { BlockouteStyle } from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <Bg
        image={bg}
        min="true"
        page="PORTIFÓLIO"
        text="conheça os projetos que amamos mostrar"
      />
      <BlockouteStyle>
        <div className="container">
          <blockquote>
            <p>
              No mundo atual, a continua expansão de nossa atividade cumpre um
              papel essencial na formulação da gestão inovadora da qual fazemos
              parte.
            </p>
            <cite>Barbara Moss</cite>
          </blockquote>
        </div>
      </BlockouteStyle>
      <Portifolio />

      <BgFooter
        text="não tenha nada em sua casa que você não considere útil ou acredita
            ser bonito"
        author="WILLIAN MORRIS"
        image={bgFooter}
      />
      <Footer />
    </>
  )
}

export default Home
