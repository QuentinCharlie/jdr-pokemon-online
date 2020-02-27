import styled from 'styled-components';

const AppStyled = styled.div`
  @media (max-width : 1024px), (max-height : 768px) {
    .desktop {
      display: none;
    }
    .mobile-tablet {
      display: flex;
    }
    
    width: 100vw;
    height: 100vh;


    .container--nav-to-dices {
      display: flex;      
      flex-direction: column;
    }
  }

  @media (min-height : 769px) {
    .mobile-tablet {
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
