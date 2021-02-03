import React from 'react'

import CardProductStyles from './styles'

import Grid from '../Layout/Grid/styles'

const CardProduct = ({ title, icon, text, characteristics, img1, img2 }) => {
  return (
    <CardProductStyles className="produto">
      <div className="container">
        <div className="item">
          <Grid>
            <div className="grid-11 item-img pro" data-anime="800">
              <h2>{title}</h2>
              <img src={img1} className="image" alt="" />
            </div>
          </Grid>
          <Grid>
            <div className="grid-5 item-icon pro" data-anime="1000">
              <img src={icon} alt="passeio" />
            </div>
          </Grid>
          <Grid>
            <div className="grid-8 img pro" data-anime="1200">
              <img src={img2} alt="" />
            </div>
          </Grid>
          <Grid>
            <div className="grid-8 item-info pro" data-anime="1400">
              <div className="cont">
                <p>{text}</p>
              </div>

              {/* <!--<div class="cont1">--> */}
              {characteristics.map((item) => (
                <h3 key={item}>{item}</h3>
              ))}
              {/* <!--</div>--> */}
            </div>
          </Grid>
        </div>
      </div>
    </CardProductStyles>
  )
}

export default CardProduct
