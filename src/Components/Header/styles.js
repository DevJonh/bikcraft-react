import styled from 'styled-components'

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #fec63e;
  position: relative;

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    margin: 7px 0;
  }

  .menu ul {
    float: right;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  .menu ul li a {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px;
    color: black;
    font-size: 14px;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.3s;
  }

  .menu ul li a:hover {
    color: white;
    opacity: 0.8;
  }
`

export default HeaderStyle
