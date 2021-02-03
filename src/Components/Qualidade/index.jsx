import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Title from '../SectionTitle'

import QualidadeStyle from './styles'

import marca from '../../assets/marca.svg'
import Grid from '../Layout/Grid/styles'

const Qualidade = () => {
  const history = useHistory()

  return (
    <QualidadeStyle>
      <Title title="QUALIDADE" size={24} color="#000" />
      <div className="container">
        <img src={marca} alt="bik" className="logo" />

        <div className="item-qualidade">
          <Grid>
            <div className="grid-1-3 quali" data-anime="2600">
              <h2>DURABILIDADE</h2>
              <p>
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </p>
            </div>
          </Grid>

          <Grid>
            <div className="grid-1-3 quali" data-anime="2750">
              <h2>DESIGN</h2>
              <p>
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </p>
            </div>
          </Grid>
          <Grid>
            <div className="grid-1-3 quali" data-anime="2900">
              <h2>SUSTENTABILIDADE</h2>
              <p>
                Ainda assim, existem dúvidas a respeito de como a necessidade de
                renovação.
              </p>
            </div>
          </Grid>
        </div>
        {history.location.pathname !== '/sobre' && (
          <>
            <p data-anime="3000">conheça mais a nossa história</p>
            <Link to="/sobre" className="btn">
              SOBRE
            </Link>
          </>
        )}
      </div>
    </QualidadeStyle>
  )
}

export default Qualidade
