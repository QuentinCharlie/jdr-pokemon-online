import styled from 'styled-components';

const BoardStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(100% - 1em);
    height: calc(100vh - 1em);
    margin: 0.5em;
    background-color: lightgray; 
  }

  @media (min-width: 1025px) {
    width: calc(70vw - 1em);
    height: 70vh;
    margin-left: 1em;
    background-color: lightgrey;
    box-shadow: inset 0 0 20px grey;
  }
`;

export default BoardStyled;
