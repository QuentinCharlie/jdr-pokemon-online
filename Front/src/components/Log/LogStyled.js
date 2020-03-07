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
        margin-right: calc(7vw - 1em)! important;
        margin-left: calc(43vw - .5em)! important;
        width: 50vw!important;
        height: calc(100vh - .5em)!important;
        /* // for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .log-sidebar {
          color: white;
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
      width: calc(30vw - 2em);
      height: 70vh;
      margin: 0 1em;
      padding-top: .5em;
      background-color: lightgray;
      
      .log {
        width: 100%;
        height: 90%;
        padding: 0 .5em;
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
    }
    
    .current-player {
      background-color: lightgray;
      width: 100%;
      height: calc(10% - .5em);
      border-top: solid gray 2px;
      padding: .5em;
      p {
        margin-bottom: 0;
      }
      .turn-name {
        font-size: 1.5em;
        text-align: center;
      }
    }
  }
`;

export default LogStyled;
