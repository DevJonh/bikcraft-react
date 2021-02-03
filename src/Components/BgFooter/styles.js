import styled from 'styled-components'

const BgFooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .bg-f {
    max-width: 100%;
    display: block;
    position: absolute;
    z-index: -3;
  }

  .container {
    position: relative;
    padding-bottom: 25px;
    margin: 0px auto;
    text-align: center;
  }

  .container blockquote img {
    max-width: 100%;
    display: block;
    position: relative;
    margin: 0px auto;
  }
  .container blockquote {
    align-items: center;
    display: block;
    max-width: 234px;
    text-align: center;
    padding: 10px;
    margin: 0px auto;
  }

  .container blockquote p {
    margin-top: 15px;
    font-size: 14px;
    color: white;
    font-weight: normal;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
  }

  .container blockquote p::after,
  .container blockquote p::before {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #ffffff;
    margin: 10px auto;
  }

  .container blockquote cite {
    color: white;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding-bottom: 20px;
    margin: 10px auto 0;
  }
`

export default BgFooterStyle
