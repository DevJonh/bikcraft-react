import styled from 'styled-components'

const PortifolioStyles = styled.section`
  width: 100%;
  background-color: black;
  margin-top: 60px;

  img {
    max-width: 100%;
    display: block;
    color: black;
    position: relative;
    margin: 9px auto;
  }

  .container {
    max-width: 960px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    padding: ${({ history }) =>
      history.location.pathname === '/portifolio' ? '60px 0' : '0'};
  }

  .container p {
    text-align: center;
    color: white;
    font-size: 14px;
    margin: 35px auto 0px auto;
    flex: 2 1 850px;
  }
`

export default PortifolioStyles
