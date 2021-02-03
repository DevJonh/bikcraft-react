import styled from 'styled-components'

const SectionTitleStyle = styled.h1`
  padding-top: ${({ size }) => (size >= 24 ? '40px' : 0)};
  text-align: ${({ borderLeft }) => (borderLeft ? 'left' : 'center')};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: ${({ color }) => color};
    margin: ${({ size }) => (size >= 24 ? '10px' : '5px')} auto;
    margin-left: ${({ borderLeft }) => (borderLeft ? '0px' : 'auto')};
  }
`

export default SectionTitleStyle
