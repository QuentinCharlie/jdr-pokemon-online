import styled from 'styled-components';

const PokemonStyled = styled.div`


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

  @media (min-width: 1025px) {
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: calc((70vw - (30vh - 40px - 3em))/2 - 1.5em);
      height: calc(30vh - 40px - 3em);
      margin: 1em 1em 1em 0;
      background-color: lightgray;
      padding: .5em;
      display: flex;
      .pokemon-avatar {
        height: calc(30vh - 40px - 4em);
        width: calc(30vh - 40px - 4em);
        margin-right: .5em;
        padding-bottom: 3em;
        background-color: #fff;
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
          }
        }
        /* BARRE GRISE */
        .energy-container {
          position: absolute;
          bottom: 1.5em;
          height: 1.5em;
          width: 100%;
          background-color: gray;
          text-align: center;
          span {
            height: 100%;
            position: relative;
            top: calc(50% - .7em);
            z-index: 5;
          }
          /* BARRE VERTE*/
          .energy-bar {
            position: absolute;
            bottom: 0em;
            height: 100%;
            background-color: lightblue;
          }
        }
        /* BARRE GRISE */
        .health-container {
          position: absolute;
          bottom: 0;
          height: 1.5em;
          width: 100%;
          background-color: gray;
          text-align: center;
          span {
            height: 100%;
            position: relative;
            top: calc(50% - .7em);
            z-index: 5;
          }
          /* BARRE VERTE*/
          .health-bar {
            position: absolute;
            bottom: 0em;
            height: 100%;
            background-color: green;
          }
        }
      }
      .exp {
        position: absolute;
        top: 0; right: 0;
        background-color: yellow;
        padding: .2em .5em;
      }


      .pokemon-info {
        width: calc(100% - (30vh - 40px - 4em));
        padding: 0.5em;
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
            font-size: 2em;
            font-weight: bold;
          }
          .pokemon-type {
            font-style: italic;
            img {
              margin-top: .6em;
              width: 15%;
            }
          }
        }
        .pokemon-stats {
          width: 100%;
          max-height: 100%;
          .stat {
            display: flex;
            align-items: center;
            .title {
              padding: .2em 0;
              width: 30%;
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
`;

export default PokemonStyled;
