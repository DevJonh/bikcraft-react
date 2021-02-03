/* eslint-disable multiline-ternary */
import React from 'react'
import { Link } from 'react-router-dom'

import BgStyle from './styles'

const Bg = ({ image, min, page, text }) => {
  return (
    <BgStyle min={min} image={image}>
      {min ? (
        <div className="container">
          <h1>{page}</h1>
          <blockquote>
            <p>{text}</p>
          </blockquote>
        </div>
      ) : (
        <div className="container">
          <h1>BICICLETAS FEITAS A MÃO</h1>
          <blockquote>
            <p>
              não tenha nada em sua casa que você não considere útil ou acredita
              ser bonito
            </p>
            <cite> WILLIAN MORRIS</cite>
          </blockquote>
          <Link to="/contato" className="btn fadeInUp" data-anime="800">
            ORÇAMENTO
          </Link>
        </div>
      )}
    </BgStyle>
  )
}

export default Bg
