import styled from 'styled-components'

const FooterStyle = styled.footer`
  background-color: black;

  .container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .container .item-footer:nth-child(1) {
    flex: 2;
  }
  .container .item-footer p {
    color: white;
    text-align: left;
    max-width: 400px;
    line-height: 26px;
  }
  .container .item-footer img {
    max-width: 100%;
    display: block;
    margin: 10px 0 10px;
  }
  .container .item-footer {
    flex: 1;
    margin: 30px 10px;
  }

  .item-footer ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
  }

  .item-footer ul li {
    color: white;
    margin: 3px 0px;
  }

  .item-footer .social {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .item-footer .social a:hover {
    border: 3px solid #ffffff;
    opacity: 1;
    transition: 0.3s;
  }

  .item-footer .social img:nth-child(1) {
    margin-left: 0;
  }

  .item-footer .social a {
    border: 3px solid #fec63e;
    margin: 0 5px;
    padding: 5px;
    display: flex;
    justify-content: center;
  }
  .item-footer .social img {
    flex: 1;
    display: block;
    max-width: 70%;
    margin: 0;
  }
`

export const RodapeStyle = styled.div`
  width: 100%;
  background-color: #fec63e;

  .container {
    max-width: 960px;
    margin: 0 auto;
  }

  .container p {
    margin: 0;
    padding: 15px 0;
    text-align: center;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
`

export default FooterStyle
