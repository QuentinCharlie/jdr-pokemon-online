import styled from 'styled-components';

const PokemonModalStyled = styled.div`
  padding: .5em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% );
  .modal-header {
    height: 5%;
    border-bottom: 1px solid black;
    padding-bottom: .5em;
    h1 {
      text-align: center;
    }
  }
  .modal-content {
    display: flex;
    padding-top: .5em;
    width: 100%;
    height: 95%;
    .wrapper-left {
      display: flex;
      flex-direction: column;
      margin-right: .5em;
      width: 70%;
      height: 100%;
      .pokemon {
        display: flex;
        height: calc(100% / (10/3));
        width: 100%;
        .table-container  {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: auto;
          /* scrollbar hidden (IE/Edge) */
          -ms-overflow-style: none;
          /* scrollbar hidden (Chrome/Firefox/Safari) */
          &::-webkit-scrollbar {
            display: none;
          }
          & table {
            margin-left: .5em;
          }
          & td {
            line-height: 1.2em;
            padding-right: .5em;
            &:nth-child(2) {
              word-break: break-word;
            }
          }
        }
        .pokemon-avatar {
          height: 100%;
          width: 20%;
          padding: .5em;
          margin-right: .5em;
          border-radius: 10px;
          .pokemon-avatar-container {
            overflow: hidden;
            height: 100%;
            width: 100%;
            border-radius: 8px;
            .modal-pokemon-avatar {
              width: 100%;
              object-position: 50% 50%;
              objet-fit: cover;
            }
          }
        }
        .pokemon-description {
          display: flex;
          width: 80%;
          height: 100%;
          .pokemon-description-infos {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-right: .5em;
            .pokemon-description-infos-basics {
              height: 50%;
              margin-bottom: .5em;
              padding: .5em;
              border-radius: 10px;
              color: #6c757d;
              font-size: 1.5em;
            }
            .pokemon-description-infos-vital {
              height: 50%; 
              padding: .5em;
              border-radius: 10px;
            }
          }
          .pokemon-description-appearance {
            display: flex;
            align-items: center;
            width: 50%;
            height: 100%;              
            padding: .5em;
            border-radius: 10px;
            color: #6c757d;
            font-size: 1.5em;
            .table-container {
              width: 75%;
            }
            .pokemon-sprite {
              width: 25%;
              img {
                transform: scale(1.5);
              }
            }
          }
        }
      }
      .stats {
        height: calc(100% / 2.5);
        width: 100%;
        margin: .5em 0;
        display: flex;
        .stats-stat {
          background-color: lightgreen; 
          border-radius: 10px;
          box-shadow: lightgrey 0 0 5px;
          height: 100%;
          width: calc((100% / 3) - .25em);
          padding: .5em;
          .stat-container {
            width: 100%;
            height: 100%;
            .stat {
              height: calc(100% / 6);
              .title {
                margin-bottom: .5em;
              }
              div {
                margin-top: .1em;
                span { 
                  top: calc(50% - .5em);
                }
              }
            }
          }      
        }
        .stats-sensibilities {
          border-radius: 10px;
          box-shadow: lightgrey 0 0 5px;
          background-color: lightgray; 
          height: 100%;
          width: calc((100% / 3) * 2);
          margin-left: .5em;
          padding: .5em;
          display: flex;
          flex-wrap: wrap;
          .type {
            width: calc(100% / 4);
            height: calc(100% / 4);
            border: 1px solid lightgray;
            color: white;
            font-size: 1.3em;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .text {
        height: calc(100% / (10/3));
        width: 100%;
        display: flex;
        .text-background {
          background-color: lightcoral; 
          width: calc(100% / 3);
          height: 100%;
        }
        .text-history {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
          margin: 0 .5em;
        }
        .text-notes {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
        }
      }
    }

    .wrapper-right {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      .xp {
        position: relative;
        height: calc(100% / 14);
        margin: 0 auto .5em auto;
        display: flex;
        background-color: white;
        border-radius: 10px;
        width: 100%;
        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          color: #6c757d;
          font-size: 1.5em;
        }
      }
      .attack-list {
        height: calc(100% - (100% / 14));
        width: 100%;
        padding: .5em;
        background-color: white;
        color: #6c757d;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(117, 117, 117, .6);
        overflow: auto;
        /* scrollbar hidden (IE/Edge) */
        -ms-overflow-style: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
        .AttackButton {
          width: 100%;
        }
        .attack {
          height: 15%;
          width: 100%;
          background-color: lightcoral;
          margin-bottom: .2em;
        }
      }
    }
  }
  
`;

export default PokemonModalStyled;
