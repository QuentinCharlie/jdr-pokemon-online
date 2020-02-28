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
    /* padding: 20px 70px; */
    font-size: 1.5em;
    border: 1px solid #2d6898;
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
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    text-shadow: 0px -1px 0px rgba(0,0,0,.5);
    -webkit-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    -moz-box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    box-shadow: 0px 6px 0px #2b638f, 0px 3px 15px rgba(0,0,0,.4), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5);
    transition: 0.15s;


    &:active {
      box-shadow: none;
      transform: translateY(6px);
      transition: 0.2s;
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
    .attack-stats {
      display: flex;
      justify-content: space-between;
      overflow: auto;
      /* scrollbar hidden (IE/Edge) */
      -ms-overflow-style: none;
      /* scrollbar hidden (Chrome/Firefox/Safari) */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .attack-stat {
      font-size: .6em;
      font-weight: normal;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }


`;

export default AttackButtonStyled;
