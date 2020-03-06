import styled from 'styled-components';

const AttacksStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .attacks-button {
        width: calc(15vh - .75em);
        height: calc(15vh - .75em);
        margin: 0 .5em .5em 0;
        background-color: lightskyblue;
      }
      .ui.left.sidebar {
        background-color: lightskyblue;
        width: 40vw;
        /* for a fullboard size sidebar : 
        width: calc(100% - 15vh); */
        .attacks-sidebar {
          color: white;
        }
      }
    }
  }

  @media (min-width: 1025px) {
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: calc((70vw - (30vh - 40px - 3em))/2 - 1.5em);
      height: calc(30vh - 40px - 3em);
      margin: 1em 1em 1em 0;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

export default AttacksStyled;
