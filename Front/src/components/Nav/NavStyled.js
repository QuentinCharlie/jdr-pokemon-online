import styled from 'styled-components';

const NavStyled = styled.nav`
  /* MOBILE */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .nav-button {
      width: calc(15vh - .75em);
      height: calc(15vh - .75em);
      margin: .5em 0 .5em 0;
      background-color: lightgray;
      }
      .ui.left.sidebar {
        background-color: lightgrey;
        width: 30vw;
        /* // for a fullboard size sidebar :
        width: calc(100% - 15vh); */
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
