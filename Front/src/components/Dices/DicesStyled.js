import styled from 'styled-components';

const DicesStyled = styled.div`
  @media (max-width : 1024px), (max-height : 768px) {
    width: calc(15vh - .5em);
    height: calc(15vh - .5em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-height : 769px) {
    width: calc(30vw - 2em);
    height: calc(30vh - 40px - 3em);
    margin: 1em 1em 1em 0;
    background-color: lightgray;
  }
`;

export default DicesStyled;

