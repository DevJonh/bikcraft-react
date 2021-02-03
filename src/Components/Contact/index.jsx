/* eslint-disable multiline-ternary */
import React from 'react'
import Grid from '../Layout/Grid/styles'
import Title from '../SectionTitle'
import { useHistory } from 'react-router-dom'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

import ContactStyles from './styles'

const Contact = ({ transparent }) => {
  const history = useHistory()
  return (
    <ContactStyles transparent={transparent}>
      {history.location.pathname !== '/contato' && (
        <Title title="QUALIDADE" color="#FEC63E" size={24} />
      )}

      <Grid>
        <div className="container">
          <Grid>
            <form method="POST" className="grid-8 formphp">
              <div className="item-form">
                <span>Nome</span>
                <input type="text" name="nome" required />
              </div>
              <div className="item-form">
                <span>Email</span>
                <input type="email" name="email" required />
              </div>
              <div className="item-form">
                <span>Telefone</span>
                <input type="text" name="tel" />
                <label className="nao-aparece">Se não é robô ignore.</label>
                <input type="text" className="nao-aparece" name="leaveblank" />
                <label className="nao-aparece">Se não é robô ignore.</label>
                <input
                  type="text"
                  className="nao-aparece"
                  name="dontchange"
                  value="http://"
                />
              </div>
              <div className="item-form">
                <span>Mensagem</span>
                <textarea name="msg" cols="30" rows="5" required></textarea>
                <button type="button" className="btn">
                  Enviar
                </button>
              </div>
            </form>
          </Grid>

          <Grid>
            <div className="contato grid-8" data-anime="3400">
              <h3>DADOS</h3>
              <p>+55 21 99999-9999</p>
              <p>orcamento@bikcraft.com</p>
              {history.location.pathname !== '/contato' ? (
                <>
                  <h3>MONTE SUA BIKCRAFT</h3>
                  <span>Escolha as especificações</span>
                  <select className="impar">
                    <option selected value="cores">
                      -cores
                    </option>
                    <option value="azul">Azul</option>
                    <option value="vermelho">Vermelho</option>
                    <option value="verde">Verde</option>
                    <option value="amarelo">Amarelo</option>
                  </select>
                  <select className="par">
                    <option selected value="estilo">
                      -estilo
                    </option>
                    <option value="passeio">Passeio</option>
                    <option value="esporte">Esporte</option>
                    <option value="retro">Retrô</option>
                  </select>
                  <select className="impar">
                    <option selected value="cores">
                      -acessórios
                    </option>
                    <option value="buzina">Buzina</option>
                    <option value="pGarrafa">Porta Garrafa</option>
                    <option value="pitura">Pintura</option>
                  </select>
                  <select className="par">
                    <option selected value="cores">
                      -medidas
                    </option>
                    <option value="pequena">Pequena</option>
                    <option value="media">Média</option>
                    <option value="grande">Grande</option>
                  </select>
                </>
              ) : (
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
              )}
            </div>
          </Grid>
        </div>
      </Grid>
    </ContactStyles>
  )
}

export default Contact
