import styled, { css } from 'styled-components'

const BgStyle = styled.section`
  width: 100%;
  display: block;
  align-items: center;
  height: ${({ min }) => (min ? '200px' : 'auto')};
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;

  .container img {
    max-width: 100%;
    height: auto;
  }
  .bg {
    width: 100%;
    display: block;
    position: absolute;
  }

  .container {
    display: block;
    text-align: center;
  }

  .container h1 {
    text-align: center;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 48px;
    font-weight: bold;
    color: white;
    padding-top: ${({ min }) => (min ? '60px' : '80px')};
  }

  .container blockquote {
    display: block;
    max-width: 250px;
    text-align: center;
    margin: 0px auto 10px;
    color: white;
  }
  .container blockquote p {
    font-size: 16px;
    font-weight: normal;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    color: white;
  }
  ${({ min }) =>
    min
      ? ''
      : css`
          .container blockquote p::after {
            content: '';
            display: block;
            width: 60px;
            height: 3px;
            background-color: white;
            margin: 10px auto;
          }
        `}
  .container blockquote p::before {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: white;
    margin: 10px auto;
  }

  .container blockquote cite {
    font-style: normal;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin: 15px auto;
  }

  .container a.btn {
    display: inline-block;
  }
`

export default BgStyle
