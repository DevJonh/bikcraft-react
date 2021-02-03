/* eslint-disable comma-dangle */
import React from 'react'

import Bg from '../../Components/Bg'
import Header from '../../Components/Header'

import bg from '../../assets/bg.jpg'
import passeio from '../../assets/passeio.svg'
import esporte from '../../assets/esporte.svg'
import retro from '../../assets/retro.svg'
import bikcraftPasseio from '../../assets/bikcraft-passeio-1.jpg'
import bikcraftPasseio2 from '../../assets/bikcraft-passeio-2.jpg'

import bgFooter from '../../assets/bg-footer.jpg'

import BgFooter from '../../Components/BgFooter'
import Footer from '../../Components/Footer'
import CardProduct from '../../Components/CardProduct'
import { ContainerStyle } from './styles'
import Contact from '../../Components/Contact'

const Home = () => {
  return (
    <>
      <Header />
      <Bg
        image={bg}
        min="true"
        page="PRODUTOS"
        text="conheça todos os nossos produtos"
      />
      <ContainerStyle>
        <CardProduct
          title="PASSEIO"
          icon={passeio}
          img1={bikcraftPasseio}
          img2={bikcraftPasseio2}
          characteristics={[
            'CONFORTO',
            'VELOCIDADE',
            'DESIGN',
            'VERSATILIDADE',
          ]}
          text="O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana. Interesse por todos os detalhes da vida cotidiana."
        />
        <CardProduct
          title="ESPORTE"
          icon={esporte}
          img1={bikcraftPasseio}
          img2={bikcraftPasseio2}
          characteristics={[
            'CONFORTO',
            'VELOCIDADE',
            'DESIGN',
            'VERSATILIDADE',
          ]}
          text="O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana. Interesse por todos os detalhes da vida cotidiana."
        />
        <CardProduct
          title="RETRÔ"
          icon={retro}
          img1={bikcraftPasseio}
          img2={bikcraftPasseio2}
          characteristics={[
            'CONFORTO',
            'VELOCIDADE',
            'DESIGN',
            'VERSATILIDADE',
          ]}
          text="O verdadeiro segredo da felicidade está em ter um genuíno interesse por todos os detalhes da vida cotidiana. Interesse por todos os detalhes da vida cotidiana."
        />
      </ContainerStyle>

      <Contact />

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
