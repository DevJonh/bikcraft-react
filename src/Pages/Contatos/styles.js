import styled from 'styled-components'

export const ProductHomeStyle = styled.section`
  width: 100%;
  margin-top: 60px;
  .produto img {
    max-width: 100%;
    display: block;
    color: black;
    position: relative;
    margin: 9px auto;
    margin-bottom: 20px;
  }

  .produto .container {
    margin: 0 auto;
    max-width: 960px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

  .produto p {
    font-family: 'Times New Roman', Times, serif;
    color: black;
    font-size: 14px;
    text-align: center;
  }

  .item {
    flex: 1 1 300px;
    position: relative;
    margin: 40px 10px;
  }
  .item-icon {
    box-sizing: border-box;
    background-color: black;
    padding-top: 29px;
    max-width: 300px;
    height: 200px;
  }

  .item-icon img {
    max-width: 100%;
    display: block;
    position: relative;
    margin: 0 auto;
  }

  .item-info {
    background-color: #fec63e;
    max-width: 300px;
    max-height: 120px;
    padding: 20px;
  }

  .item-info h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-align: center;
    margin: 0;
  }

  .item-info img {
    max-width: 100%;
    display: block;
    margin: 5px auto;
  }

  .container p {
    flex: 2 1 850px;
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 20px auto 0px auto;
  }

  .container a {
    display: block;
    width: 16%;
    margin: 12px auto;
  }
`
