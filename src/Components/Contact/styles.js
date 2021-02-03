import styled from 'styled-components'

const ContactStyles = styled.section`
  width: 100%;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : '#000'};
  .container {
    max-width: 960px;
    margin: 0px auto;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .nao-aparece {
    display: none;
    background-color: transparent;
  }

  img {
    max-width: 100%;
    display: block;
    color: ${({ transparent }) => (transparent ? '#fff' : '#000')};
    position: relative;
    margin: 9px auto;
    margin-bottom: 30px;
  }

  .container form {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  }

  .container .item-form {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: 10px auto;
    margin-right: 30px;
  }

  .container .item-form span {
    display: block;
    font-size: 18px;
    color: ${({ transparent }) => (transparent ? '#000' : '#fff')};
  }

  .form-contato .container .item-form span {
    color: ${({ transparent }) => (transparent ? '#fff' : '#000')};
    font-family: 'Times New Roman', Times, serif;
  }

  .container .item-form input,
  textarea {
    flex: 1 1 400px;
    margin: 0 auto;
    margin-right: 20px;
    padding: 10px;
    background-color: transparent;
    border: 4px solid #fec63e;
  }

  .container .item-form button {
    color: #fec63e;
    padding: 5px 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: transparent;
    border: 4px solid #fec63e;
  }

  .contato {
    flex: 1;
    display: block;
    margin-bottom: 150px;
    margin-left: 30px;
  }
  .contato h3 {
    color: #fec63e;
    font-weight: bold;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto;
    padding: 20px 0;
  }

  .contato p,
  span {
    margin-top: 0;
    margin-bottom: 5px;
    display: block;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    padding: 5px;
    color: ${({ transparent }) => (transparent ? '#000' : '#fff')};
  }

  .form-contato .contato p,
  span {
    color: ${({ transparent }) => (transparent ? '#fff' : '#000')};
  }

  .contato select {
    display: block;
    width: 350px;
    align-items: center;
    padding: 12px 50px;
    border: none;
    color: white;
    background-color: #292929;
  }

  .contato .par {
    background-color: #000;
  }

  div.contato .item-footer {
    margin: 30px auto;
  }

  div.contato .item-footer .social {
    float: left;
  }
  div.contato .item-footer img {
    max-width: 70%;
    display: block;
    position: relative;
    margin: 5px 10px;
  }

  .item-footer .social {
    margin-top: -12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    img {
      flex: 1;
      padding: 5px;
      margin: 0 5px;
      border: 3px solid #fec63e;
    }

    img:nth-child(1) {
      margin-left: 0;
    }
  }
`

export default ContactStyles
