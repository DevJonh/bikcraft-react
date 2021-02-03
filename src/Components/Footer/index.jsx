import React from 'react'

import Title from '../SectionTitle'
import Grid from '../Layout/Grid'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

import FooterStyle, { RodapeStyle } from './styles'

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div className="container">
          <Grid>
            <div className="grid-8 item-footer">
              <Title
                size={18}
                title="NOSSA HISTÓRIA"
                color="#FEC63E"
                borderLeft={true}
              />
              <p>
                O verdadeiro segredo da felicidade está em ter um genuíno
                interesse por todos os detalhes da vida cotidiana. Interesse por
                todos os detalhes da vida cotidiana.
              </p>
            </div>
          </Grid>
          <Grid>
            <div className="grid-4 item-footer">
              <Title
                size={18}
                title="CONTATO"
                color="#FEC63E"
                borderLeft={true}
              />
              <ul>
                <li>- 71 9999-9999</li>
                <li>- contato@bikcraft.com</li>
                <li>- Salvador - BA</li>
              </ul>
            </div>
          </Grid>
          <Grid>
            <div className="grid-4 item-footer redes">
              <Title
                size={18}
                title="REDES SOCIAIS"
                color="#FEC63E"
                borderLeft={true}
              />
              <div className="social">
                <a href="https://facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://instagram.com">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://twitter.com">
                  <img src={twitter} alt="" />
                </a>
              </div>
            </div>
          </Grid>
        </div>
      </FooterStyle>
      <RodapeStyle>
        <div className="container">
          <p>&copy;Bikcraft 2019 - Alguns direitos reservados.</p>
        </div>
      </RodapeStyle>
    </>
  )
}

export default Footer
