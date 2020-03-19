import styled from 'styled-components';

const AppStyled = styled.div`

  .selector {
    width: 100%;
    height: 100%;
    background-color: #F3FCFF;
  }
  
  .mjLoading {
    position: relative;
    background-color: #F3FCFF;
    height: 100vh;
    width: 100vw;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .announce {
      position: relative;
      z-index: 2;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      font-size: 2em;
    }
    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .docs {
      display: flex;
      width: 80%;
      margin: 0 auto;
      justify-content: space-around;
      .doc {
        box-shadow: 0 0 15px rgba(117, 117, 117, .3);
        padding: 1em;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        border-radius: 10px;
        height: 20vh;
        min-height: 145px;
        width: 30%;
        background-color: white;
        .doc-title {
          text-align: left;
          font-weight: bold;
          font-size: 1.5em;
          /* margin-bottom: 1em; */
        }
        .doc-description {
          text-align: justify;
          min-width: 65%;
        }
        .doc-link {
          text-align: left;
        }
        img {
          position: absolute;
          z-index: 0;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          height: 80%;
          opacity: .03;
        }
      }
    }

  }

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

    .bottom-left-wrapper {
      display: flex;
      width: 70vw;
      margin-right: 1em;
      .sub-left-wrapper {
        display: flex;
        width: 100%;
      }
    }
    
    .container {
      display: flex;
    }
  }

`;

export default AppStyled;
