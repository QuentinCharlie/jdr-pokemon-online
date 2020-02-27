import styled from 'styled-components';

const LogStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-width: 1025px) {
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
  }
`;

export default LogStyled;
