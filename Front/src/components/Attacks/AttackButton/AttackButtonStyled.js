import styled from 'styled-components';

const AttackButtonStyled = styled.div`
  width: 49%;
  height: 48%;
  .button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .3em;
    text-align: left;
    height: calc(100% - 6px);
    width: 100%;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    background-color: #538fbe;
    font-size: 1.5em;
    border: 1px solid #2d6898;
    cursor: pointer;
    /* BACKGROUND GRADIENT */
    background-image: linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
    background-image: -o-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
    background-image: -moz-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
    background-image: -webkit-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
    background-image: -ms-linear-gradient(bottom, rgb(73,132,180) 0%, rgb(97,155,203) 100%);
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0, rgb(73,132,180)),
      color-stop(1, rgb(97,155,203))
    );

    /* BORDER RADIUS */
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;

    /* SHADOW */
    text-shadow: 0px -1px 0px rgba(0,0,0,.5);
    -webkit-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    -moz-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    transition: 0.2s;

    &:active {
      box-shadow: none;
      transform: translateY(6px);
      transition: 0s;
      background-image: linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
      background-image: -o-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
      background-image: -moz-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
      background-image: -webkit-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
      background-image: -ms-linear-gradient(bottom, rgb(88,154,204) 0%, rgb(90,150,199) 100%);
  
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0, rgb(88,154,204)),
        color-stop(1, rgb(90,150,199))
      );
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
          }
          .statut {
            content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
            opacity: .8;
          }
          .special {
            content: url("https://www.pokebip.com/pokedex-images/types/speciale.png");
            opacity: .8;
          }
          .physical {
            content: url("https://www.pokebip.com/pokedex-images/types/statut.png");
            opacity: .8;
          }
          .attack-distance {
            width: auto;
            height: 70%;
          }
          .melee {
            content: url("https://i.imgur.com/bsvUkK6.png");
            opacity: .8;
          }
          .distance {
            /*https://i.imgur.com/xgGwnku.png */
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
