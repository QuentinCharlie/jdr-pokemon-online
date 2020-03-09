import styled from 'styled-components';

const TrainerModalStyled = styled.div`
  padding: .5em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
      .trainer {
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
        .trainer-avatar {
          height: 100%;
          width: 20%;
          padding: .5em;
          margin-right: .5em;
          /* background-color: lightblue; */
          /* border-radius: 10px;
          box-shadow: lightgrey 0 0 5px; */
          .trainer-avatar-container {
            position: relative;
            /* overflow: hidden; */
            height: 100%;
            width: 100%;
            /* border-radius: 8px; */
            .modal-trainer-avatar {
              z-index: 10;
              position: absolute;
              bottom: -1em;
              left: 50%;
              transform: translateX(-50%);
              /* object-position: 50% 50%;
              objet-fit: cover; */
              -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
              filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
            }
          }
        }
        .trainer-description {
          display: flex;
          width: 80%;
          height: 100%;
          .trainer-description-infos {
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-right: .5em;
            .trainer-description-infos-basics {
              position: relative;
              height: 50%;
              background-color: #69a3ff;
              margin-bottom: .5em;
              padding: .5em;
              border-radius: 10px;
              box-shadow: 0 0 15px rgba(117, 117, 117, .6);
              color: white;
              font-size: 1.5em;
              &::after {
                position: absolute;
                top: -0.17em;
                right: .3em;
                line-height: 1em;
                font-weight: bold;
                content: 'Trainer';
                color: white;
                opacity: .3;
                text-transform: uppercase;
              }
            }
            .trainer-description-infos-team {
              height: 50%; 
              background-color: lightgray;
              border-radius: 10px;
              box-shadow: lightgrey 0 0 5px;
              .team-container {
                height: 100%;
                width: 100%;
                display: flex;
                border-radius: 8px;
                .pokemon {
                  height: 100%;
                  width: calc(100% / 7);
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    height: 100%;
                    object-position: 50% 50%;
                    objet-fit: cover;
                  }
                  &.empty {
                    img {
                      height: 100%;
                      transform: rotate(15deg);
                      opacity: .1;
                    }
                  }
                }
              }
            }
          }
          .trainer-description-appearance {
            position: relative;
            display: flex;
            align-items: center;
            background-color: #69a3ff;
            width: 50%;
            height: 100%;              
            padding:.5em;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(117, 117, 117, .6);
            color: white;
            font-size: 1.5em;
            &::after {
              position: absolute;
              top: -0.17em;
              right: .3em;
              line-height: 1em;
              font-weight: bold;
              content: 'Informations';
              color: white;
              opacity: .3;
              text-transform: uppercase;
            }
            .table-container {
              width: 75%;
            }
            .trainer-sprite {
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
        min-height: calc(100% / 2.5);
        width: 100%;
        margin: .5em 0;
        display: flex;
        flex-direction: row;
        .stats-stat {
          position: relative;
          z-index: 5;
          color: white;
          background-color: #32e689; 
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
          height: 100%;
          width: calc((100% / 3) - .25em);
          padding: .5em;
          &::after {
            position: absolute;
            top: -0.17em;
            right: .3em;
            line-height: 1em;
            font-size: 1.5em;
            font-weight: bold;
            content: 'Stats';
            color: white;
            opacity: .3;
            text-transform: uppercase;
          }
          .stat-container {
            padding-top: 2em;
            padding-bottom: 1em;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .stat {
              /* height: calc(100% / 6); */
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
        .stats-skills {
          position: relative;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
          background-color: #32e689;
          color: white;
          height: 100%;
          width: calc((100% / 3) * 2);
          margin-left: .5em;
          padding: .5em;
          padding-top: 2em;
          &::after {
            position: absolute;
            top: -0.17em;
            right: .3em;
            line-height: 1em;
            font-size: 1.5em;
            font-weight: bold;
            content: 'Skills & Knowledge';
            color: white;
            opacity: .3;
            text-transform: uppercase;
          }
          table {
            width: 100%;
            height: 100%;
            th {
              padding-bottom: 1em;
              font-weight: bold;
            }
          }
        }
      }
      .text {
        height: calc(100% / (10/3));
        width: 100%;
        display: flex;
        .text-background {
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
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
      .spendables {
        height: calc(100% / 14);
        margin-bottom: .5em;
        display: flex;
        .spendables-money {
          position: relative;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
          border-radius: 10px;
          height: 100%;
          width: 50%;
          font-size: 1.5em;
          color: white;
          background-color: lightgrey;
          margin-right: .5em;
          span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          &::after {
              position: absolute;
              top: -0.17em;
              right: .3em;
              line-height: 1em;
              font-weight: bold;
              content: 'Money';
              color: white;
              opacity: .3;
              text-transform: uppercase;
            }
        }
        .spendables-xp {
          position: relative;
          box-shadow: 0 0 15px rgba(117, 117, 117, .6);
          border-radius: 10px;
          height: 100%;
          width: 50%;
          font-size: 1.5em;
          color: white;
          background-color: lightgrey;
          span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          &::after {
            position: absolute;
            top: -0.17em;
            right: .3em;
            line-height: 1em;
            font-weight: bold;
            content: 'Exp';
            color: white;
            opacity: .3;
            text-transform: uppercase;
          }
        }
      }
      .inventory {
        height: calc(100% - (100% / 14));
        width: 100%;
        display: flex;
        flex-direction: column;
        .inventory-nav {
          background-color: coral;
          height: calc(100% / 14);
          width: 100%;
          display: flex;
          justify-content: space-around;
          .menu-item {
            display: flex;
            align-items: center;
            height: 100%;
            &-img {
            }
          }
        }
        .inventory-content {
          background-color: lightcoral;
          height: calc(100% - (100% / 14));
          width: 100%;
          display:flex;
          flex-direction: column;
          padding: .5em 1.5em .5em 1em;
          overflow: auto;
          .inventory-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: .2em;
            .item-infos {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
  
`;

export default TrainerModalStyled;
