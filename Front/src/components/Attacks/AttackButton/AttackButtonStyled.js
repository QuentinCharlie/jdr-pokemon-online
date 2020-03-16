import styled from 'styled-components';

const AttackButtonStyled = styled.div`
  width: 100%;
  height: 48%;
  margin: 0 0 .5em 0;
  @media (min-width: 1400px) {
    width: 49%;
  }
  .button {
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .3em;
    text-align: left;
    text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.5em;
    cursor: pointer;
    /* BORDER RADIUS */
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 10px;
    /* SHADOW */
    box-shadow: 0 0 15px rgba(117, 117, 117, .3);
    transition: 0.2s;
    img.type {
      height: 98%;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: .2;
    }

    /* SHINY EFFECT */
    /* &::before {
      position: absolute;
      top: 0;
      left: -75%;
      z-index: 2;
      display: block;
      content: '';
      width: 50%;
      height: 100%;
      background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
    }
    &:hover::before {
      -webkit-animation: shine .75s;
      animation: shine .75s;
    }
    @-webkit-keyframes shine {
      100% {
        left: 125%;
      }
    }
    @keyframes shine {
      100% {
        left: 125%;
      }
    } */
    
    &:active {
      box-shadow: none;
      transform: translateY(3px);
      transition: 0s;
    }
    @media (min-height: 960px) {
      .attack {
        display: flex;
        flex-direction: column;
        .attack-name {
          width: calc(100% - .2em);
          padding-bottom: .2em;
          }
        .attack-icons {
          display: flex;
          width: 100%;
          height: 1em;
          align-items: center;
          .attack-category {
            width: auto;
            height: 70%;
            padding-right: .3em;
            /* &.Statut {
              content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
              opacity: .8;
            }
            &.Special {
              content: url("https://www.pokebip.com/pokedex-images/types/speciale.png");
              opacity: .8;
            }
            &.Physique {
              content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
              opacity: .8;
            } */
          }
          .attack-distance {
            width: auto;
            height: 70%;
            &.melee {
              content: url("https://i.imgur.com/bsvUkK6.png");
              opacity: .8;
            }
            &.Rayon {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.Contact {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.Zone {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.Cible {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.Personnel {
              /*https://i.imgur.com/xgGwnku.png */
            }
          }
          .attack-info {
            width: auto;
            height: 70%;
            padding-left: .3em;
            content: url("https://image.flaticon.com/icons/svg/813/813715.svg");
            opacity: .8;
          }
      
        }
      }
      .attack-stats {
        display: flex;
        justify-content: flex-start;
        /* overflow: auto; */
        /* scrollbar hidden (IE/Edge)
        -ms-overflow-style: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        /* &::-webkit-scrollbar {
          display: none;
        } */ 
      }
      .attack-stat {
        padding-right: .5em;
        font-size: .6em;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media (max-height: 959px) {
    .attack {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .attack-icons {
        height: 1.3em;
        display: flex;
        align-items: center;
        .attack-info {
          width: auto;
          height: 70%;
          padding-left: .3em;
          content: url("https://image.flaticon.com/icons/svg/813/813715.svg");
          opacity: .8;
        }
      }
    }
    .attack-stats {
      display: none;
    }
  }


`;

export default AttackButtonStyled;
