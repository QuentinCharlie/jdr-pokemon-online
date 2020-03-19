import styled from 'styled-components';

const AttackButtonStyled = styled.div`
  width: 100%;
  height: 48%;
  margin: 0 0 .5em 0;

  /* Modal */
  

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
      z-index: 1;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: .2;
    }
    
    &:active {
      box-shadow: none;
      transform: translateY(3px);
      transition: 0s;
    }
    @media (min-height: 960px) {
      .attack {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
        .attack-name {
          width: calc(100% - .2em);
          padding-bottom: .2em;
          line-height: 1;
          }
        .attack-icons {
          display: flex;
          width: 100%;
          height: 1em;
          align-items: center;
          .attack-category {
            display: flex;
            align-items: center;
            font-size: .5em;
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
            font-size: .5em;
            font-weight: normal;
            font-style: italic;
            border-radius: 10px;
            padding: .2em .4em;
            background-color: rgba(20, 20, 20, 0.05);
            width: auto;
            height: 70%;
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
        position: relative;
        z-index: 10;
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
      position: relative;
      z-index: 10;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .attack-icons {
        height: 1.3em;
        display: flex;
        align-items: center;
        .attack-category {
          display: none;
        }
        .attack-distance {
          display: none;
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
      position: relative;
      z-index: 10;
      display: none;
    }
  }


`;

export default AttackButtonStyled;
