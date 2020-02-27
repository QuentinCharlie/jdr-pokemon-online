import styled from 'styled-components';

const BoardStyled = styled.div`
  @media (max-width : 1024px), (max-height : 768px) {
    width: calc(100% - 1em);
    height: calc(100vh - 1em);
    margin: 0.5em;
    background-color: lightgray; 
  }

  @media (min-height : 769px) {
    width: calc(70vw - 1em);
    height: 70vh;
    margin-left: 1em;
    background-color: lightgrey; 
  }
`;

export default BoardStyled;

