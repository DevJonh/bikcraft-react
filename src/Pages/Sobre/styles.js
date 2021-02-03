import styled from 'styled-components'

export const HistorySobreStyle = styled.section`
  width: 100%;
  margin-top: 70px;

  .container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  .container p {
    margin: 10px 0;
    font-size: 18px;
    line-height: 28px;
    text-align: left;
    padding-left: 0;
    max-width: 520px;
  }

  .container .valor {
    margin-bottom: 100px;
  }
  .container ul {
    list-style: none;
    padding: 0;
  }

  .container ul li {
    padding: 8px;
    padding-left: 0;
  }
  .container .item {
    flex: 2;
    margin-bottom: 50px;
  }

  .container .item + .item {
    margin-left: 80px;
  }

  .container img {
    max-width: 100%;
    display: block;
    position: relative;
  }
`
