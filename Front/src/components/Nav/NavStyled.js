import styled from 'styled-components';

const NavStyled = styled.nav`
  /* MOBILE */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .nav-button {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: .5em .5em .5em 0;
    background-color: lightgray;
    }
    .ui.left.sidebar {
      width: 30vw;
      /* // fullboard
      width: calc(100% - 15vh); */
    }
  }

  /* DESKTOP */
  @media (min-width : 1025px) {
    .mobile-tablet {
      display: none
    }
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
`;

export default NavStyled;
