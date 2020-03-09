import styled from 'styled-components';

const LogStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .log-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: lightblue;
      }
      .ui.top.sidebar {
        background-color: lightblue;
        padding: .5em;
        margin-right: calc(7vw - 1em)! important;
        margin-left: calc(43vw - .5em)! important;
        width: 50vw!important;
        height: calc(100vh - .5em)!important;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .log-sidebar {
          height: 100%;
          width: 100%;
          padding: .2em;
          .log {
            width: 100%;
            height: 90%;
            margin-bottom: .5em;
            overflow: auto;
            /* scrollbar hidden (IE/Edge) */
            -ms-overflow-style: none;
            /* scrollbar hidden (Chrome/Firefox/Safari) */
            &::-webkit-scrollbar {
              display: none;
            }
            p {
              margin-bottom: 0;
            } 
            .entry {
              background-color: white;
              margin-bottom: .3em;
              padding: .5em;
              .turn {
                padding: 0 1em;
              }
            }
          }
          .current-player {
            background-color: lightblue;
            width: 100%;
            height: calc(10% - .5em);
            p {
              margin-bottom: 0;
            }
            .turn-name {
              font-size: 1.5em;
              text-align: center;
            }
          }
        }
      }
    }
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    .mobile-tablet {
      display: none
    }
    .desktop {
      border-radius: 10px;
      position: relative;
      width: calc(30vw - 2em);
      height: 70vh;
      margin: 0 1em;
      padding-top: .5em;
      /* background-color: lightgray; */
      .log {
        border-radius: 10px;
        width: 100%;
        height: 90%;
        padding: 2em .5em 0 .5em;
        margin-bottom: .5em;
        overflow: auto;
        /* scrollbar hidden (IE/Edge) */
        -ms-overflow-style: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
        p {
          margin-bottom: 0;
        } 
        .entry {
          box-shadow: 0 0 7px rgba(117, 117, 117, .2);
          border-radius: 10px;
          position: relative;
          z-index: 6;
          background-color: white;
          margin-bottom: .3em;
          padding: .5em;
          .turn {
            padding: 0 1em;
          }
        }
      }
      .svg1 {
      border-radius: 10px 10px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      }
      .svg2 {
        border-radius: 10px 10px 0 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 7;
        -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .5));

      }
      .svg3 {
        border-radius: 0 0 10px 10px;
        position: absolute;
        bottom: .25em;
        left: 0;
        z-index: 7;
        -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .5));
      }
    }
    .current-player {
      border-radius: 0 0 10px 10px;
      /* background-color: lightgray; */
      width: 100%;
      height: calc(10% - .5em);
      /* border-top: solid gray 2px; */
      padding: .5em;
      .turn-name {
        width: 100%;
        margin-bottom: 0;
        color: white;
        position: absolute;
        left: 50%;
        bottom: 1.5em;
        transform: translate(-50%, 50%);
        z-index: 10;
        font-size: 1.5em;
        text-align: center;
      }
    }
  }
`;

export default LogStyled;
