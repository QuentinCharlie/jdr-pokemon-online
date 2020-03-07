import styled from 'styled-components';

const NavStyled = styled.nav`
  /* MOBILE */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .nav-button {
      width: calc(7vw - .5em);
      height: calc(7vw - .5em);
      margin-bottom: .5em;
      background-color: lightgray;
      }
      .ui.bottom.sidebar {
        background-color: lightgrey;
        padding: .5em;
        margin-right: calc(7vw + .5em)!important;
        margin-left: calc(93vw - 20vw - .5em)! important;
        width: 20vw!important;
        height: calc(100% - .5em)!important;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .nav-sidebar {
          color: white;
          padding: .5em;
          .nav-items {
            display: flex;
            flex-direction: column;
            margin-top: .5em;
          }
          .nav-item {
            margin-bottom: .5em;
            display: block;
            /* border: 1px solid black; */
          }
        }
      }
    }
  }

  /* DESKTOP */
  @media (min-width : 1025px) {
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: 100vw;
      height: 40px;
      margin-bottom: 1em;
      padding: 0 0 0 1em;
      background-color: lightgray;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-items {
        display: flex;
      }
      .nav-item {
        margin-right: 1.5em;
        margin-bottom: 0;
      }
    }
  }
`;

export default NavStyled;
