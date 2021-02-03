import React from 'react'

import Bg from '../../Components/Bg'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Grid from '../../Components/Layout/Grid'
import Title from '../../Components/SectionTitle'
import Qualidade from '../../Components/Qualidade'

import bg from '../../assets/bg-sobre.jpg'
import equipe from '../../assets/equipe-bikcraft.jpg'

import { HistorySobreStyle } from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <Bg
        image={bg}
        min="true"
        page="SOBRE"
        text="conheça mais sobre a bikcraft"
      />

      <HistorySobreStyle>
        <div className="container">
          <Grid>
            <div className="grid-10 item hist" data-anime="800">
              <Title
                color="#000"
                size={24}
                title="HISTÓRIA, MISSÃO E VISÃO"
                borderLeft
              />

              <p>
                O verdadeiro segredo da felicidade está em ter um genuíno
                interesse por todos os detalhes da vida cotidiana. Interesse por
                todos os detalhes da vida cotidiana.
              </p>
              <p>
                O verdadeiro segredo da felicidade está em ter um genuíno
                interesse por todos os detalhes da vida cotidiana. Interesse por
                todos os detalhes da vida cotidiana.
              </p>
            </div>
          </Grid>
          <Grid>
            <div className="grid-6 item valor" data-anime="1000">
              <Title color="#000" size={24} title="VALORES" borderLeft />
              <ul>
                <li>- Qualidade no processo com</li>
                <li>- Foco no cliente sem perder a</li>
                <li>- Diversão, preservando a</li>
                <li>- Natureza com sustentabilidade</li>
              </ul>
            </div>
          </Grid>
          <img src={equipe} alt="" />
        </div>
      </HistorySobreStyle>
      <Qualidade />

      <Footer />
    </>
  )
}

export default Home
