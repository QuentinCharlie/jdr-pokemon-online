import styled from 'styled-components';

const TrainerStyled = styled.div`
  /* MOBIL-TABLET */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .trainer-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: white;
        border-radius: 10px;
        border: 1px solid #6c757d;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 80%;
        }
      }
      .ui.left.sidebar {
        background-color: white;
        /* for a fullboard size sidebar : */
        width: calc(93vw - .5em);
        .trainer-sidebar {
          color: white;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          .top-wrapper {
            height: 50%;
            width: 100%;
            display: flex;
            margin-bottom: .5em;
            .trainer-wrapper {
              height: 100%;
              width: 50%;
              display: flex;
              .trainer-avatar {
                position: relative;
                z-index: 1;
                width: 50%;
                height: 100%;
                display: flex;
                align-items: flex-end;
                img {
                  width: 100%;
                  transform: translateY(.5em);
                }
              }
              .trainer-info {
                /* background-color: lightblue; */
                position: relative;
                z-index: 0;
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: .5em;
                p {
                  color: #6c757d;
                  font-size: .8em;
                  margin: 0;
                }
              }
            }
            .trainer-additional-info {
              height: 100%;
              width: 50%;
              display: flex;
              .trainer-team {
                background-color: lightgray;
                border-radius: 10px;
                box-shadow: 0 0 15px rgba(117, 117, 117, .3);
                height: 100%;
                width: 30%;
                margin-right: .5em;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                .pokemon {
                  width: 50%;
                  height: calc(100% / 4);
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-content: center;
                  img {
                    height: 100%;
                    object-position: 50% 50%;
                    objet-fit: cover;
                  }
                  &.empty {
                    padding: .2em;
                    img {
                      height: 100%;
                      objet-fit: cover;
                      transform: rotate(15deg);
                      opacity: .1;
                    }
                  }
                }
              }
              .trainer-right-wrapper {
                height: 100%;
                width: 70%;
                display : flex;
                flex-direction: column;
                .trainer-spendables {
                  height: 20%;
                  width: 100%;
                  display: flex;
                  margin-bottom: .5em;
                  color: #6c757d;
                  .money {
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(117, 117, 117, .3);
                    background-color: white;
                    width: 50%;
                    height: 100%;
                    margin-right: .5em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  .exp {
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(117, 117, 117, .3);
                    background-color: white;
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                }
                .inventory {
                  border-radius: 10px;
                  box-shadow: 0 0 15px rgba(117, 117, 117, .3);
                  background-color: white;
                  height: 80%;
                  width: 100%;
                  padding: .5em;
                  overflow: auto;
                  /* scrollbar hidden (IE/Edge) */
                  -ms-overflow-style: none;
                  /* scrollbar hidden (Firefox) */
                  scrollbar-width: none;
                  /* scrollbar hidden (Chrome/Safari) */
                  &::-webkit-scrollbar {
                    display: none;
                  }
                  .inventory-item {
                    border-radius: 1em;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: .8em;
                    color: #6c757d;
                    padding-right: .5em;
                    &:hover {
                      background-color: #6c757d;
                      box-shadow: 2px 4px 8px rgba(117, 117, 117, .6);
                      color: white;
                      transition: .2s;
                    }
                    .item-infos {
                      display: flex;
                      align-items: center;
                    }
                  }
                }
              }
            }
          }
          .bottom-wrapper {
            position: relative;
            z-index: 10;
            height: 50%;
            width: 100%;
            display: flex;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(117, 117, 117, .6);
            .stats-stats {
              background-color: white;
              color: #6c757d;
              height: 100%;
              width: 25%;
              border-radius: 10px 0 0 10px;
              padding: .5em;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .stat {
                display: flex;
                flex-direction: column;
                justify-content:flex-start;
                font-size: .6em;
                width: 100%;
                height: calc(100% / 6);
                margin-bottom: .2em;
                .number {
                  position: absolute;
                  top: calc(50% - .3em);
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
                .title {
                  line-height: 1;
                }
              }
            }
            .stats-skills {
              background-color: white;
              height: 100%;
              width: 75%;
              border-radius: 0 10px 10px 0;
              display: flex;
              padding: .5em;
              table {
                width: 50%;
                font-size: .7em;
                line-height: 1.5;
                color: #6c757d;
                th {
                  font-weight: bold;
                  text-align: left;
                }
              }
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
      width: calc(30vh - 40px - 3em);
      height: calc(30vh - 40px - 3em);
      margin: 1em;
      /* background-color: lightgray; */
      /* padding: .5em; */
      position: relative;
      .trainer-avatar {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        position: relative;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        align-items: flex-start;
        cursor: pointer;
        .trainer-avatar-img {
          /* width: 100%; */
          position: absolute;
          bottom: -1em;
          height: 28vh;
          /* object-fit: cover; */
          -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
          filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        }
        .health-container {
          position: absolute;
          bottom: .5em;
          height: 1.5em;
          width: 100%;
          background-color: lightgray;
          text-align: center;
          border-radius: 10px;
          text-align: center;
          span {
            color: white;
            position: relative;
            z-index: 5;
          }
          .span {
            color: white;
            height: 100%;
            position: relative;
            top: calc(50% - .7em);
            z-index: 5;
            .text {
              color: #6c757d;
            }
          }
          img {
            position: absolute;
            z-index: 5;
            color: white;
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
      .money {
        color: white;
        position: absolute;
        bottom: 2.25em;
        left: 0;
        background-color: orange;
        border-radius: 10px;
        padding: 0 .5em;
        line-height: 1.5em;
      }
    }
  }
`;

export default TrainerStyled;
