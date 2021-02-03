import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Title from '../SectionTitle'
import Grid from '../Layout/Grid/styles'

import PortifolioStyles from './styles'

import esporte from '../../assets/esporte.jpg'
import passeio from '../../assets/passeio.jpg'
import retro from '../../assets/retro.jpg'

const Portifolio = () => {
  const history = useHistory()
  return (
    <PortifolioStyles history={history}>
      {history.location.pathname !== '/portifolio' && (
        <Title title="PORTIFÓLIO" size={24} color="#FEC63E" />
      )}
      <div className="container">
        <Grid>
          <div className="grid-8">
            <img src={retro} alt="" />
          </div>
        </Grid>
        <Grid>
          <div className="grid-8">
            <img src={passeio} alt="" />
          </div>
        </Grid>

        <Grid>
          <div className="grid-16">
            <img src={esporte} alt="" />
          </div>
        </Grid>
        {history.location.pathname !== '/portifolio' && (
          <>
            <p>conheça mais o nosso portifólio</p>
            <Link to="/portifolio" className="btn">
              PORTIFÓLIO
            </Link>
          </>
        )}
      </div>
    </PortifolioStyles>
  )
}

export default Portifolio
