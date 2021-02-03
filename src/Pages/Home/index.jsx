import React from 'react'
import { Link } from 'react-router-dom'

import Bg from '../../Components/Bg'
import Header from '../../Components/Header'
import Title from '../../Components/SectionTitle'

import Grid from '../../Components/Layout/Grid'

import bg from '../../assets/bg.jpg'
import esporte from '../../assets/esporte.svg'
import passeio from '../../assets/passeio.svg'
import retro from '../../assets/retro.svg'
import bgFooter from '../../assets/bg-footer.jpg'

import { ProductHomeStyle } from './styles'
import Portifolio from '../../Components/Portifolio'
import Qualidade from '../../Components/Qualidade'
import BgFooter from '../../Components/BgFooter'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Bg image={bg} />
      <ProductHomeStyle className="produto">
        <Title color="black" size={24} title="PRODUTOS" />

        <Grid>
          <div className="container">
            <div className="grid-1-3 item">
              <div className="item-icon">
                <img src={passeio} alt="passeio" />
              </div>
              <div className="item-info">
                <Title color="black" size={18} title="PASSEIO" />
                <p>
                  Ainda assim, existem dúvidas a respeito de como a necessidade
                  de renovação.
                </p>
              </div>
            </div>
            <div className="grid-1-3 item fadeInUp" data-anime="1200">
              <div className="item-icon">
                <img src={esporte} alt="esporte" />
              </div>
              <div className="item-info">
                <Title color="black" size={18} title="ESPORTE" />
                <p>
                  Ainda assim, existem dúvidas a respeito de como a necessidade
                  de renovação.
                </p>
              </div>
            </div>
            <div className="grid-1-3 item fadeInUp" data-anime="1400">
              <div className="item-icon">
                <img src={retro} alt="retro" />
              </div>
              <div className="item-info">
                <Title color="black" size={18} title="RETRÔ" />
                <p>
                  Ainda assim, existem dúvidas a respeito de como a necessidade
                  de renovação.
                </p>
              </div>
            </div>
            <p data-anime="1600">
              clique aqui e veja mais detalhes dos produtos
            </p>
            <Link to="/produtos" className="btn">
              PRODUTOS
            </Link>
          </div>
        </Grid>
      </ProductHomeStyle>
      <Portifolio />
      <Qualidade />
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
