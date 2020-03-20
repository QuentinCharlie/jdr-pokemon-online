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
      .ui.top.sidebar {
        background-color: transparent;
        padding: 0 .5em;
        margin-right: calc(7vw - 1em)! important;
        margin-left: calc(43vw - .5em)! important;
        width: 50vw!important;
        height: calc(100vh - .5em)!important;
        overflow: hidden;
        margin-top: .5em;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .log-sidebar {
          height: 100%;
          width: 100%;
          /* padding: .2em; */
          .log {
            width: 100%;
            height: 100%;
            overflow: auto;
            /* scrollbar hidden (IE/Edge) */
            -ms-overflow-style: none;
            /* scrollbar hidden (Firefox) */
            scrollbar-width: none;
            /* scrollbar hidden (Chrome/Safari) */
            &::-webkit-scrollbar {
              display: none;
            }
            p {
              margin-bottom: 0;
            } 
            .entry {
              box-shadow: 0 0 15px rgba(117, 117, 117, .3);
              border-radius: 10px;
              background-color: white;
              margin-bottom: .5em;
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* background-color: lightgray; */
      .log {
        width: 100%;
        height: 90%;
        border-radius: 10px;
        /* padding: 0em .5em 0em .5em; */
        /* margin-bottom: .5em; */
        .pokeball-background {
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: .1;
        }
        .entries {        
          width: 100%;
          height: 100%;
          overflow: auto;
          /* scrollbar hidden (IE/Edge) */
          -ms-overflow-style: none;
                /* scrollbar hidden (Firefox) */
                scrollbar-width: none;
          /* scrollbar hidden (Chrome/Safari) */
          &::-webkit-scrollbar {
            display: none;
          }
          p {
            margin-bottom: 0;
          } 
          .entry {
            animation: grow .3s cubic-bezier(.26,.34,.53,1.51);
            box-shadow: 0 0 7px rgba(117, 117, 117, .2);
            border-radius: 10px;
            position: relative;
            z-index: 6;
            background-color: white;
            margin: 0 .5em .5em .5em;
            padding: .5em;
            .turn {
              padding: 0 1em;
            }
          }
          .blank-space {
            height: 4em;
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
      /* .svg3 {
        border-radius: 0 0 10px 10px;
        position: absolute;
        bottom: .25em;
        left: 0;
        z-index: 7;
        -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .5));
      } */
    }
    .current-player {
      position: relative;
      border-radius: 0 0 10px 10px;
      /* background-color: #19cd70; */
      width: 100%;
      height: 10%;
      box-shadow: 0 0 7px rgba(117, 117, 117, .2);
      padding: .5em;
      .turn-name {
        width: 100%;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 1.5em;
        text-align: center;
      }
    }
  }
`;

export default LogStyled;
