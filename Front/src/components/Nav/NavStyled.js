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
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #6c757d;
        /* box-shadow: 0 0 15px rgba(117, 117, 117, .3); */
        .img {
          height: 80%;
        }
      }
      .ui.bottom.sidebar {
        background-color: white;
        padding: .5em;
        margin-right: calc(7vw + .5em)!important;
        margin-left: calc(93vw - 20vw - .5em)! important;
        width: 20vw!important;
        height: calc(100% - .5em)!important;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .nav-sidebar {
          color: #6c757d;
          padding: .5em;
          a {
            color: #6c757d;
          }
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
      padding: 0 1em;
      background-color: #6c757d;
      box-shadow: 0 0 15px rgba(117, 117, 117, .6);
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: white;
      }
      .nav-items {
        display: flex;
      }
      .nav-item {
        color: white;
        line-height: 40px;
        padding: 0 1em;
        margin-right: 0em;
        margin-bottom: 0;
        /* border-left: 1px solid black;
        border-right: 1px solid black; */
        transition: .3s;
        &:hover {
          box-shadow: inset 0 -3px red;
          background-color: rgb(90,97,104);
          transition: .2s;
        }
      }
    }
  }
`;

export default NavStyled;
