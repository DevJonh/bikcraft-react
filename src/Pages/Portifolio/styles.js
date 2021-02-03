import styled from 'styled-components'

export const BlockouteStyle = styled.section`
  display: flex;
  margin-top: 40px;

  p {
    font-weight: bold;
  }

  .container {
    margin: 0px auto;
    display: block;

    blockquote {
      display: block;
      text-align: center;
      margin: 30px auto;
      max-width: 300px;

      p {
        margin: 15px auto;
        font-size: 16px;
        font-family: 'Times New Roman', Times, serif;
        font-weight: normal;
      }
    }
  }
  cite {
    display: block;
    font-style: normal;
    font-weight: bold;
    margin-top: 15px;
    text-align: right;
  }
`
