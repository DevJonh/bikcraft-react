import styled from 'styled-components'

const CardProductStyles = styled.div`
  width: 100%;
  margin-top: 80px;
  & + div.produto {
    margin-top: 60px;

    &:nth-last-child(3n) {
      margin-bottom: 100px;
    }
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .container .item {
    display: flex;
    flex-wrap: wrap;
    margin: 25px auto;
  }

  .item-img {
    height: 280px;
    margin-bottom: 20px;
    margin-right: 10px;
  }

  .item-img .image {
    display: block;
    position: relative;
    top: -67px;
  }

  .item-img img {
    max-width: 100%;
  }
  .item-img h2 {
    display: block;
    top: 100px;
    position: relative;
    text-align: center;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: white;
    z-index: 1;
  }

  .item-img h2::after,
  .item-img h2::before {
    content: '';
    width: 60px;
    height: 3px;
    display: block;
    margin: 7.8px auto;
    background-color: #fff;
  }

  .item-icon {
    position: relative;
    top: 10px;
    flex: 1;
    align-self: center;
    background-color: black;
    margin-left: 10px;
    height: 280px;
  }

  .item-icon img {
    max-width: 100%;
    display: block;
    position: relative;
    margin: 70px auto;
  }

  .item .img img {
    max-width: 100%;
    display: block;
    height: 284px;
  }
  .item-info {
    height: 284px;
    max-height: 284px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 400px;
  }

  .cont {
    background-color: black;
  }

  .item-info .cont p {
    font-size: 18px;
    line-height: 26px;
    text-align: left;
    font-weight: lighter;
    padding: 24px 40px;
    color: white;
  }

  .item-info h3 {
    flex: 2 1 200px;
    background-color: #fec63e;
    display: inline-block;
    border: 2px solid black;
    text-align: center;
    margin: 0px;
    padding: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 18px;
  }
`

export default CardProductStyles
