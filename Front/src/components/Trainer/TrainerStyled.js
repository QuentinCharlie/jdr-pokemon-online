import styled from 'styled-components';

const TrainerStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-width: 1025px) {
    width: calc(30vh - 40px - 3em);
    height: calc(30vh - 40px - 3em);
    margin: 1em;
    background-color: lightgray;
  }
`;

export default TrainerStyled;
