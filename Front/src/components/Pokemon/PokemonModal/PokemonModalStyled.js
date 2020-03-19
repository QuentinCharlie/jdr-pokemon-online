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
      font-weight: bold;
      font-size: 2em;
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
        /* scrollbar hidden (Firefox) */
        scrollbar-width: none;
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
              .stat {
                position: relative;
                margin-bottom: .5em;
                img {
                  height: 90%;
                  position: absolute;
                  top: 50%;
                  left: .2em;
                  transform: translateY(-50%);
                }
              }
            }
          }
          .pokemon-description-appearance {
            display: flex;
            align-items: center;
            justify-content: center;
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
        box-shadow: 0 0 15px rgba(117, 117, 117, .6);
        border-radius: 10px;
        background-color: white;
        .stats-stat {
          /* background-color: lightgreen;  */
          border-radius: 10px;
          /* box-shadow: lightgrey 0 0 5px; */
          height: 100%;
          width: calc((100% / 3) - .25em);
          padding: .5em;
          .stat-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
          /* box-shadow: lightgrey 0 0 5px; */
          /* background-color: lightgray;  */
          height: 100%;
          width: calc((100% / 3) * 2);
          margin-left: .5em;
          padding: .5em;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: space-between;
          .type-table-head {
            position: relative;
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: flex-end;
            span {
              position: absolute;
              top: .2em;
              text-transform: uppercase;
              font-size: 2em;
              color: lightgrey;
            }
          }
          .type {
            position: relative;
            border-radius: 40px;
            box-shadow: 0 0 15px rgba(117, 117, 117, .6);
            width: 19%;
            height: 25%;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: saturate(60%);
            text-align: center;
            /* .multi {
              position: relative;
            } */
            img {
              position: absolute;
              height: 85%;
              top: 50%;
              right: .5em;
              transform: translateY(-50%);
              opacity: .1;
            }
          }
        }
      }
      .text {
        height: calc(100% / (10/3));
        width: 100%;
        display: flex;
        .text-background {
          /* background-color: lightcoral;  */
          width: calc(100% / 3);
          height: 100%;
        }
        .text-history {
          /* background-color: lightcoral;  */
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
          margin: 0 .5em;
        }
        .text-notes {
          /* background-color: lightcoral;  */
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
        /* scrollbar hidden (Firefox) */
        scrollbar-width: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
        .attack {
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
          position: relative;
          height: 25%;
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: .5em;    
          padding: .5em;
          color: white;
          .attack-name {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: .3em;
            line-height: 1;
          }
          .attack-icons {
            display: flex;
            width: 100%;
            height: 1em;
            align-items: center;
            margin-bottom: 1em;
            .attack-category {
              display: flex;
              align-items: center;
              font-size: 1em;
              font-weight: normal;
              font-style: italic;
              background-color: rgba(20, 20, 20, 0.05);
              width: auto;
              height: 70%;
              padding-right: .3em;
            }
            .attack-distance {
              display: flex;
              align-items: center;
              margin-left: .5em;
              font-size: 1em;
              font-weight: normal;
              font-style: italic;
              border-radius: 10px;
              padding: .2em .4em;
              background-color: rgba(20, 20, 20, 0.05);
              width: auto;
              height: 70%;
            }
          }
          .effect {
            width: 90%;
            margin: 0 auto 2em 0;
            font-size: .8em;
          }
          .attack-stats {
            position: absolute;
            bottom: .5em;
            left: .5em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 50%;
            height: 20%;
            .attack-stat {
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }
          }
          img {
            position: absolute;
            height: 85%;
            top: 50%;
            right: .5em;
            transform: translateY(-50%);
            opacity: .1;
          }
        }
      }
    }
  }
  
`;

export default PokemonModalStyled;
