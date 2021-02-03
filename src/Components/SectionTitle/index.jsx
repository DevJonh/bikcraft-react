import React from 'react'

import Title from './styles'

const SectionTitle = ({ title, size, color, borderLeft }) => {
  return (
    <Title
      borderLeft={borderLeft}
      color={color}
      size={size}
      as={size >= 24 ? 'h1' : 'h2'}
    >
      {title}
    </Title>
  )
}

export default SectionTitle
