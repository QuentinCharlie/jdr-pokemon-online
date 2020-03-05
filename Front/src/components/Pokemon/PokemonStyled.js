import styled from 'styled-components';

const PokemonStyled = styled.div`


  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-width: 1025px) {
    width: calc((70vw - (30vh - 40px - 3em))/2 - 1.5em);
    height: calc(30vh - 40px - 3em);
    margin: 1em 1em 1em 0;
    background-color: #f6e652;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(117, 117, 117, .6);
    padding: .5em;
    display: flex;
    .pokemon-avatar {
      height: calc(30vh - 40px - 4em);
      width: calc(30vh - 40px - 4em);
      margin-right: .5em;
      padding-bottom: 3em;
      /* background-color: #fff; */
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img {
        max-height: 80%;
        max-width: 100%;
        -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
      }
      /* BARRE GRISE */
      .energy-container {
        position: absolute;
        bottom: 1.8em;
        height: 1.5em;
        width: 100%;
        background-color: #f4df25;
        border-radius: 10px;
        text-align: center;
        span {
          color: white;
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
          background-color: #98bfe6;
          border-radius: 10px 0 0 10px;
        }
      }
      /* BARRE GRISE */
      .health-container {
        position: absolute;
        bottom: 0;
        height: 1.5em;
        width: 100%;
        background-color: #f4df25;
        border-radius: 10px;
        text-align: center;
        span {
          color: white;
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
          background-color: #19cd70;
          border-radius: 10px 0 0 10px;
        }
      }
    }
    .exp {
      /* font-weight: bold; */
      color: white;
      position: absolute;
      top: .25em; right: 0;
      background-color: #f4df25;
      border-radius: 10px;
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
          color: white;
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
        height: 100%;
        max-height: 100%;
        .stat {
          display: flex;
          align-items: flex-end;
          .title {
            color: white;
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
`;

export default PokemonStyled;
