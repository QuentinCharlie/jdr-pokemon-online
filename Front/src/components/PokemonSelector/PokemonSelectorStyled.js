import styled from 'styled-components';

const PokemonSelectorStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: .5em 0 .5em .5em;
  /* scrollbar hidden (IE/Edge) */
  -ms-overflow-style: none;
  /* scrollbar hidden (Chrome/Firefox/Safari) */
  &::-webkit-scrollbar {
    display: none;
  }
  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pokemon-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .selection-header {
      width: 100%;
      background: #cb2d3e;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #ef473a, #cb2d3e);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #ef473a, #cb2d3e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      margin: 0 .5em .5em 0;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(117, 117, 117, .6);
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 2em;
        font-weight: bold;
        color: #f0f0f0;
        padding: 1em;
      }
    }
    .pokemon-card {
      width: calc((100%) - .5em);
      @media (min-width: 700px) {
        width: calc((100% / 2) - .5em);
      }@media (min-width: 1150px) {
        width: calc((100% / 3) - .5em);
      }
      margin: 0 .5em .5em 0;
      color: white;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(117, 117, 117, .6);
      padding: 1em;
      display: flex;
      .pokemon-avatar {
        height: 100%;
        width: 40%;
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
          width: 60%;
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
`;

export default PokemonSelectorStyled;
