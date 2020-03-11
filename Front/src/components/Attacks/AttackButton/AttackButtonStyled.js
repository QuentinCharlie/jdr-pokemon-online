import styled from 'styled-components';

import Electric from 'src/assets/images/types/Electric.svg';
import Normal from 'src/assets/images/types/normal.svg';

const AttackButtonStyled = styled.div`
  width: 100%;
  height: 48%;
  margin: 0 0 .5em 0;
  @media (min-width: 1400px) {
    width: 49%;
    /* margin: 0 0em .5em 0; */
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
    /* background-color: #A3B2BD; */
    font-size: 1.5em;
    /* border: 1px solid #2d6898; */
    cursor: pointer;
    /* BORDER RADIUS */
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 10px;
    /* SHADOW */
    box-shadow: 0 0 15px rgba(117, 117, 117, .3);
    transition: 0.2s;
    &.Electrik {
      background: url(${Electric}) no-repeat;
      background-size: 55%;
      background-position: top -.5em right -.7em;
    }
    &.Normal {
      background: url(${Normal}) no-repeat;
      background-size: 55%;
      background-position: top -.5em right -.7em;
    }

    
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
            &.statut {
              content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
              opacity: .8;
            }
            &.special {
              content: url("https://www.pokebip.com/pokedex-images/types/speciale.png");
              opacity: .8;
            }
            &.physical {
              content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
              opacity: .8;
            }
          }
          .attack-distance {
            width: auto;
            height: 70%;
            &.melee {
              content: url("https://i.imgur.com/bsvUkK6.png");
              opacity: .8;
            }
            &.rayon {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.contact {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.zone {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.cible {
              /*https://i.imgur.com/xgGwnku.png */
            }
            &.personnel {
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
