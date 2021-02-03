import React from 'react'
import { Link } from 'react-router-dom'

import HeaderStyle from './styles'

import Logo from '../../assets/bikcraft.svg'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <div className="grid-4 header-logo">
          <Link to="/">
            <img src={Logo} alt="bikcraft" />
          </Link>
        </div>

        <nav className="menu grid-12">
          <ul>
            <li>
              <Link to="/sobre">SOBRE</Link>
            </li>
            <li>
              <Link to="/produtos">PRODUTOS</Link>
            </li>
            <li>
              <Link to="/portifolio">PORTIFÓLIO</Link>
            </li>
            <li>
              <Link to="/contato">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
