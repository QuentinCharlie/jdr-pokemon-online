import styled from 'styled-components';

const AttacksStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .attacks-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: lightskyblue;
      }
      .ui.left.sidebar {
        background-color: lightskyblue;
        width: 40vw;
        /* for a fullboard size sidebar : 
        width: calc(93vw - .5em); */
        .attacks-sidebar {
          color: white;
        }
      }
    }
  }

  @media (min-width: 1025px) {
    width: 30%;
    .mobile-tablet {
      display: none
    }
    .desktop {
      /* width: calc(((70vw - (30vh - 40px - 3em))/2 - 1.5em)/1.8); */
      width: 100%;
      height: calc(30vh - 40px - 3em);
      margin: 1em 0 auto auto;
      background-color: none;
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
      overflow: auto;
      /* flex-grow: 1; */
      /* scrollbar hidden (IE/Edge) */
      -ms-overflow-style: none;
      /* scrollbar hidden (Chrome/Firefox/Safari) */
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media (min-width : 1400px) {
      width: 50%;
  }

`;

export default AttacksStyled;
