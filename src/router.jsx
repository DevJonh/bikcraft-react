import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Portifolio from './Pages/Portifolio'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contatos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/portifolio" component={Portifolio} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
