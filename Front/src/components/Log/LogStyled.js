import styled from 'styled-components';

const LogStyled = styled.div`
  width: calc(30vw - 2em);
  height: 70vh;
  margin: 0 1em;

  .log {
    background-color: lightgray;
    width: 100%;
    height: 90%;
  }
  
  .current-player {
    background-color: lightgray;
    width: 100%;
    height: 10%;
    border-top: solid gray 2px;
  }
`;

export default LogStyled;
