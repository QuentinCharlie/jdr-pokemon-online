import styled from 'styled-components';

const BoardStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(100% - 1em);
    height: calc(100vh - 1em);
    margin: 0.5em;
    background-color: lightgray;
  }

  @media (min-width: 1025px) {
    border-radius: 10px;
    width: calc(70vw - 1em);
    height: 70vh;
    margin-left: 1em;
    background-color: lightgrey;
    box-shadow: 0 0 15px rgba(117, 117, 117, .6);
    .scroll-container {
      height: 100%;
      width: 100%;
      position: relative;
      border-radius: 10px;
      .map {
        position: absolute;
        z-index: auto;
      }
      .pikachu {
        position: absolute;
      }
      #board {
        position: absolute;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default BoardStyled;
