import React from 'react'

import BgFooterStyle from './styles'

const BgFooter = ({ text, author, image }) => {
  return (
    <BgFooterStyle>
      <img src={image} className="bg-f" alt="" />
      <div className="container">
        <blockquote>
          <p>{text}</p>
          <cite> {author}</cite>
        </blockquote>
      </div>
    </BgFooterStyle>
  )
}

export default BgFooter
