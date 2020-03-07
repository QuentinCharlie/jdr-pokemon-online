import styled from 'styled-components';

const AppStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop-app {
      display: none;
    }
    .mobile-tablet-app {
      display: flex;
      width: 100vw;
      height: 100vh;
      .container--nav-to-dices {
        width: calc(7vw - .5em);
        height: calc(100% - 1em);
        margin: .5em .5em .5em 0;
        overflow: auto;
        /* scrollbar hidden (IE/Edge) */
        -ms-overflow-style: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }

  @media (min-width : 1025px) {
    .mobile-tablet-app {
      display: none;
    }

    width: 100%;
    height: 100%;

    .main-wrapper {
      height: calc(100vh - 40px - 1em);
    }
    
    .container {
      display: flex;
    }
  }

`;

export default AppStyled;
