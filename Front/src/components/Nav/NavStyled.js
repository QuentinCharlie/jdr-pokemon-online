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
      .ui.left.sidebar {
        background-color: lightgrey;
        width: 30vw;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .nav-sidebar {
          color: white;
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
