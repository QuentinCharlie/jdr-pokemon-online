import styled from 'styled-components';

const PokemonStyled = styled.div`

  /* MOBIL-TABLET */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .pokemon-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: lightsalmon;
      }
      .ui.left.sidebar {
        background-color: lightsalmon;
        /* for a fullboard size sidebar : */
        width: calc(93vw - .5em);
        .pokemon-sidebar {
          color: white;
        }
      }
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    width: 70%;
    margin-right: 1em;
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: 100%;
      height: calc(30vh - 40px - 3em);
      margin: 1em 1em 1em 0;
      color: white;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(117, 117, 117, .6);
      padding: .5em;
      display: flex;
      .pokemon-avatar {
        height: calc(30vh - 40px - 4em);
        width: calc(30vh - 40px - 4em);
        margin-right: 1em;
        padding-bottom: 3em;
        position: relative;
        .avatar-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .5em;
          width: 100%;
          height: 100%;
          cursor: pointer;
          img {
            max-height: 100%;
            max-width: 100%;
            -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
            filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
          }
        }
      /* BARRE GRISE */
      .energy-container {
        position: absolute;
        bottom: 1.8em;
        height: 1.5em;
        width: 100%;
        background-color: rgba(20, 20, 20, 0.05);
        border-radius: 10px;
        text-align: center;
        span {
          color: white;
          height: 100%;
          position: relative;
          top: calc(50% - .7em);
          z-index: 5;
        }
        img {
          position: absolute;
          z-index: 5;
          left: .3em;
          bottom: .15em;
          height: 80%;
        }
        /* BARRE VERTE*/
        .energy-bar {
          position: absolute;
          bottom: 0em;
          height: 100%;
          background-color: #98bfe6;
          border-radius: 10px 0 0 10px;
          &.rounded {
            border-radius: 10px;
          }
        }
      }
      /* BARRE GRISE */
      .health-container {
        position: absolute;
        bottom: 0;
        height: 1.5em;
        width: 100%;
        background-color: rgba(20, 20, 20, 0.05);
        border-radius: 10px;
        text-align: center;
        span {
          color: white;
          height: 100%;
          position: relative;
          top: calc(50% - .7em);
          z-index: 5;
        }
        img {
          position: absolute;
          z-index: 5;
          left: .3em;
          bottom: .15em;
          height: 80%;
        }
        /* BARRE VERTE*/
        .health-bar {
          position: absolute;
          bottom: 0em;
          height: 100%;
          background-color: #19cd70;
          border-radius: 10px 0 0 10px;
          &.rounded {
            border-radius: 10px;
          }
        }
      }
    }
      .exp {
        /* font-weight: bold; */
        color: white;
        text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
        position: absolute;
        top: 0em; left: 0;
        background-color: rgba(20, 20, 20, 0.05);
        border-radius: 10px;
        padding: .2em .5em;
      }


      .pokemon-info {
        width: calc(100% - (30vh - 40px - 4em));
        height: 100%;
        /* padding: 0.5em; */
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
        .pokemon-presentation {
          display: flex;
          flex-direction: column;
          margin-bottom: .6em;
          .pokemon-name {
            text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
            font-size: 2em;
            font-weight: bold;
          }
          .pokemon-types {
            margin-top: .5em;
            .pokemon-type {
              &:first-child {
                margin-right: .5em;
              }
              border-radius: 8px;
              font-size: .8em;
              display: inline-block;
              padding: .2em .5em;
              font-style: italic;
              font-weight: bold;
              background-color: rgba(20, 20, 20, 0.05);
            }
          }
        }
        .pokemon-stats {
          width: 100%;
          /* height: 100%; */
        .stat {
          display: flex;
          align-items: flex-end;
          .title {
            color: white;
            padding: .2em 0;
            width: 30%;
            text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
            /* text-align: center; */
            abbr {
              font-style: none;
              text-decoration: none;
            }
          }
        }
      }
      }
    }
  }

  @media (min-width: 1400px) {
    width: 50%;
    margin-right: 1em;
  }
`;

export default PokemonStyled;
