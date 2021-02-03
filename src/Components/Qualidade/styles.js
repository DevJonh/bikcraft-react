import styled from 'styled-components'

const QualidadeStyle = styled.section`
  width: 100%;
  margin-top: 60px;
  img {
    display: block;
    color: black;
    position: relative;
    margin: 40px auto;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
    margin: 0 auto 60px;
  }

  .container .item-qualidade {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .container .quali {
    padding: 10px;
  }

  .container .quali h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }

  h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #000;
    margin: 10px auto;
  }

  .container .quali p {
    width: 240px;
    margin: 5px auto;
    text-align: center;
    color: black;
    font-size: 14px;
    padding-top: 0;
    padding: 20px;
  }

  .container p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 0px;
  }

  .container a {
    display: inline-block;
    margin: 10px auto 30px;
    padding: 12px 25px;
  }
`

export default QualidadeStyle
