import styled from 'styled-components';

const DicesStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .dices-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #6c757d;
        /* box-shadow: 0 0 15px rgba(117, 117, 117, .3); */
        img {
          height: 80%;
        }
      }
      .ui.bottom.sidebar {
        background-color: lightcoral;
        margin-left: .5em!important;
        width: calc(93vw - 1em)!important;
        height: 50vh!important;
        padding: .5em;
        display: flex;
        align-items: center;
        justify-content: center;
        /* for a fullboard size sidebar :
        width: calc(93vw - .5em); */
        .dices-sidebar {
          color: white;
          height: 95%;
          width: 100%;
          .dices {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 100%;
          }
          .dice {
            display: flex;
            border-radius: 10px;
            background: linear-gradient(180deg, lightgray 0%, rgba(255,255,255,0) 28%);
            flex-grow: 1;
            flex-direction: column;
            /* justify-content: space-between; */
            height: 100%;
            width: calc((100% / 3) - .2em );
            &.hidden {
              display: none;
            }
            .avatar-dice {
              object-fit: contain;
              height: 60%;
              margin-bottom: .6em;
              &.pokemon {
                padding-bottom: .5em;
              }
              &.trainer {
                padding: .8em;
              }
            }
            .roll-button {
              background: linear-gradient(0deg, rgba(240,0,0,1) 0%, rgba(238,21,21,1) 100%);
              border-bottom: 2px solid black;
              border-radius: 10px;
              color: white;
              font-weight: bold;
              box-shadow: 0 10px 0 lightgrey;
              height: 40%;
              margin-bottom: 10px;
              position: relative;
              transition: 0.2s;
              span {
                background-color: white;
                width: 10px;
                height: 10px;
                border: solid 2px black;
                border-radius: 50px;
                position: absolute;
                bottom: -6px;
                left: calc(50% - 5px);
              }
              &:active {
                background: linear-gradient(0deg, rgba(238,83,83,1) 0%, rgba(240,0,0,1) 100%);
                transform: translateY(10px);
                box-shadow: none;
                transition: 0s;
              }
            }
          }
          .dice:first-child {
            margin-right: .4em;
          }
          .dice:last-child {
            margin-left: .4em;
          }
          .active {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            &:first-child {
              margin-right: 0;
            }
            width: 100%;
            position: relative;
            .avatar-dice {
              width: calc((100% / 3) - .2em );
              &.pokemon {
                margin: 0 auto;
                width: 10%;
                transform: scaleX(-1);
              }
            }
            .roll-button {
              position: absolute;
              bottom: 0;
              width: calc((100% / 3) - .2em );
              display: flex;
              justify-content: center;
              align-items: center;
              .back-arrow {
                object-fit: contain;
                height: 50%;
                width: 100%;
              }
            }
            .dice-buttons {
              width: calc(((100% / 3) - .2em ) * 2);
              display: flex;
              flex-direction: column;
              padding-right: .5em;
              height: 100%;
              .buttons-legend {
                width: calc(100% - .4em);
                height: 1.5em;
                margin: .5em .5em .5em .4em;
                color: #fff;
                background: linear-gradient(90deg, rgba(156,156,156,1) 10%, rgba(55,172,51,1) 30%, rgba(51,131,172,1) 50%, rgba(174,61,186,1) 70%, rgba(190,148,64,1) 90%);
                display: flex;
                justify-content: space-between;
                padding: 0 1em;
                align-items: center;
              }
              .dice-button-list {
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                overflow-y: auto;
                /* scrollbar hidden (IE/Edge) */
                -ms-overflow-style: none;
                /* scrollbar hidden (Firefox) */
                scrollbar-width: none;
                /* scrollbar hidden (Chrome/Safari) */
                &::-webkit-scrollbar {
                  display: none;
                }
                .dice-button {
                  flex-grow: 1;
                  margin-left: .4em;
                  margin-bottom: .4em;
                  border: none;
                  border-radius: 10px;
                  box-shadow: 0 0 5px lightgrey;
                  color: #fff;
                  padding: .8em .4em;
                  &.level-null {
                    background-color: white;
                    color: grey;
                  }
                  &.level-1 {
                    background-color: rgba(156,156,156,1);
                  }
                  &.level-2 {
                    background-color: rgba(55,172,51,1);
                  }
                  &.level-3 {
                    background-color: rgba(51,131,172,1)
                  }
                  &.level-4 {
                    background-color: rgba(174,61,186,1);
                  }
                  &.level-5 {
                    background-color: rgba(190,148,64,1);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width : 1025px) {
    .mobile-tablet {
      display: none
    }
      .desktop {
      width: calc(30vw - 2em);
      height: calc(30vh - 40px - 3em);
      margin: 1em 1em 1em 0;
      /* background-color: lightgray; */
      .dices {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
      }
      .dice {
        display: flex;
        border-radius: 10px;
        background: linear-gradient(180deg, lightgray 0%, rgba(255,255,255,0) 28%);
        flex-grow: 1;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: calc((100% / 3) - .2em );
        &.hidden {
          display: none;
        }
        .avatar-dice {
          object-fit: contain;
          height: 48%;
          margin-bottom: .6em;
          &.pokemon {
            padding: .5em;
          }
          &.trainer {
            padding: .8em;
          }
        }
        .roll-button {
          background: linear-gradient(0deg, rgba(240,0,0,1) 0%, rgba(238,21,21,1) 100%);
          border-bottom: 2px solid black;
          border-radius: 10px;
          color: white;
          font-weight: bold;
          box-shadow: 0 10px 0 lightgrey;
          height: calc(48% - 10px);
          margin-bottom: 10px;
          position: relative;
          transition: 0.2s;
          span {
            background-color: white;
            width: 10px;
            height: 10px;
            border: solid 2px black;
            border-radius: 50px;
            position: absolute;
            bottom: -6px;
            left: calc(50% - 5px);
          }
          &:active {
            background: linear-gradient(0deg, rgba(238,83,83,1) 0%, rgba(240,0,0,1) 100%);
            transform: translateY(10px);
            box-shadow: none;
            transition: 0s;
          }
        }
      }
      .dice:first-child {
        margin-right: .4em;
      }
      .dice:last-child {
        margin-left: .4em;
      }
      .active {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        &:first-child {
          margin-right: 0;
        }
        width: 100%;
        position: relative;
        .avatar-dice {
          width: calc((100% / 3) - .2em );
          &.pokemon {
            margin: 0 auto;
            width: 80px;
            transform: scaleX(-1);
          }
        }
        .roll-button {
          position: absolute;
          bottom: 0;
          width: calc((100% / 3) - .2em );
          display: flex;
          justify-content: center;
          align-items: center;
          .back-arrow {
            object-fit: contain;
            height: 50%;
            width: 100%;
          }
        }
        .dice-buttons {
          width: calc(((100% / 3) - .2em ) * 2);
          display: flex;
          flex-direction: column;
          padding-right: .5em;
          height: 100%;
          .buttons-legend {
            width: calc(100% - .4em);
            height: 1.5em;
            margin: .5em .5em .5em .4em;
            color: #fff;
            background: linear-gradient(90deg, rgba(156,156,156,1) 10%, rgba(55,172,51,1) 30%, rgba(51,131,172,1) 50%, rgba(174,61,186,1) 70%, rgba(190,148,64,1) 90%);
            display: flex;
            justify-content: space-between;
            padding: 0 1em;
            align-items: center;
          }
          .dice-button-list {
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;
            /* scrollbar hidden (IE/Edge) */
            -ms-overflow-style: none;
                /* scrollbar hidden (Firefox) */
                scrollbar-width: none;
            /* scrollbar hidden (Chrome/Safari) */
            &::-webkit-scrollbar {
              display: none;
            }
            .dice-button {
              flex-grow: 1;
              margin-left: .4em;
              margin-bottom: .4em;
              border: none;
              border-radius: 10px;
              box-shadow: 0 0 5px lightgrey;
              color: #fff;
              padding: .8em .4em;
              &.level-null {
                background-color: white;
                color: grey;
              }
              &.level-1 {
                background-color: rgba(156,156,156,1);
              }
              &.level-2 {
                background-color: rgba(55,172,51,1);
              }
              &.level-3 {
                background-color: rgba(51,131,172,1)
              }
              &.level-4 {
                background-color: rgba(174,61,186,1);
              }
              &.level-5 {
                background-color: rgba(190,148,64,1);
              }
            }
          }
        }
      } 
    }
  }
`;

export default DicesStyled;
