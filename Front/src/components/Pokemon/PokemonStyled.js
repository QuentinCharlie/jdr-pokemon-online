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
        background-color: white;
        border-radius: 10px;
        border: 1px solid #6c757d;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 80%;
          max-width: 90%;
        }
      }
      .ui.left.sidebar {
        background-color: white;
        /* for a fullboard size sidebar : */
        width: calc(93vw - .5em);
        .pokemon-sidebar {
          color: #6c757d;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          .top-wrapper {
            height: 50%;
            width: 100%;
            display: flex;
            .pokemon {
              height: 100%;
              width: 50%;
              display: flex;
              .pokemon-left {
                height: 100%;
                width: 50%;
                display: flex;
                flex-direction: column;
                position: relative;
                .pokemon-avatar {
                  /* background-color: lightgrey; */
                  height: 100%;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    max-height: 90%;
                    max-width: 95%;
                  }
                }
                .exp {
                  background-color: orange;
                  box-shadow: 0 0 15px rgba(117, 117, 117, .3);
                  color: white;
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 30%;
                  height: 15%;
                  border-radius: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .pokemon-right {
                height: 100%;
                width: 50%;
                display: flex;
                flex-direction: column;
                .pokemon-description {
                  /* background-color: lightgoldenrodyellow; */
                  color: #6c757d;
                  height: 60%;
                  width: 100%;
                  padding-left: .5em;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                }
                .basic-stats {
                  /* background-color: lightblue; */
                  height: 40%;
                  width: 100%;
                  padding-right: .5em;
                  display: flex;
                  flex-direction: column;
                  /* BARRE GRISE */
                  .energy-container {
                    /* position: absolute;
                    bottom: 1.8em;
                    height: 1.5em; */
                    position: relative;
                    width: 100%;
                    height: 30%;
                    margin-bottom: .5em;
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
                    /* BARRE BLEUE*/
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
                    /* position: absolute;
                    bottom: 0;
                    height: 1.5em; */
                    position: relative;
                    width: 100%;
                    height: 30%;
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
              }
            }
            .right-wrapper {
              height: 100%;
              width: 50%;
              padding-bottom: .5em;
              .attacks {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                height: 100%;
                width: 100%;
                overflow: auto;
                /* scrollbar hidden (IE/Edge) */
                -ms-overflow-style: none;
                /* scrollbar hidden (Firefox) */
                scrollbar-width: none;
                /* scrollbar hidden (Chrome/Firefox/Safari) */
                &::-webkit-scrollbar {
                  display: none;
                }
                /* .attack:nth-child(odd) {
                  margin-right: .5em;
                } */
                .attack {
                  /* background-color: lightgreen; */
                  color: white;
                  height: 47%;
                  width: 49%;
                  padding: .5em;
                  margin-bottom: .5em;
                  border-radius: 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  position: relative;
                  .attack-name {
                    font-weight: bold;
                    font-size: 1em;
                  }
                  .attack-icons {
                    display: fex;
                    font-size: .8em;
                    font-style: italic;
                    .attack-category {
                      background-color: rgba(20, 20, 20, 0.05);
                      border-radius: 10px;
                      margin-right: .5em;
                    }
                    .attack-distance {
                      background-color: rgba(20, 20, 20, 0.05);
                      border-radius: 10px;
                    }
                  }
                  .attack-stats {
                    display: flex;
                    font-size: .8em;
                    .attack-stat {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      line-height: 1.1;
                      margin-right: .3em;
                    }
                  }
                  .type {
                    height: 98%;
                    position: absolute;
                    z-index: 1;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    opacity: .2;
                  }
                }
              }
            }
          }
          .bottom-wrapper {
            height: 50%;
            width: 100%;
            display: flex;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(117, 117, 117, .3);
            .stats {
              /* background-color: lightcoral; */
              height: 100%;
              width: 35%;
              display: flex;
              padding: .5em;
              flex-direction: column;
              justify-content: center;
              .stat {
                display: flex;
                align-items: flex-end;
                margin-bottom: .5em;
                .title {
                  color: #6c757d;
                  width: 30%;
                  abbr {
                    font-style: none;
                    text-decoration: none;
                  }
                }
              }
            }
            .sensibilities {
              /* background-color: lightgoldenrodyellow; */
              height: 100%;
              width: 65%;
              border-radius: 10px;
              /* box-shadow: lightgrey 0 0 5px; */
              /* background-color: lightgray;  */
              height: 100%;
              width: calc((100% / 3) * 2);
              margin-left: .5em;
              padding: .5em;
              padding-top: 1.1em;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: space-between;
              .type {
                position: relative;
                border-radius: 40px;
                box-shadow: 0 0 15px rgba(117, 117, 117, .6);
                width: 19%;
                height: 25%;
                color: white;
                font-size: .8em;
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
        /* BARRE BLEUE*/
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
        /* scrollbar hidden (Firefox) */
        scrollbar-width: none;
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
            line-height: 1;
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
