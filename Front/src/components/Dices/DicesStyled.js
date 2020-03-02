import styled from 'styled-components';

const DicesStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-width : 1025px) {
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
      background: linear-gradient(180deg, lightgray 0%, rgba(255,255,255,0) 28%);
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      width: calc((100% / 3) - .2em );
      img {
        object-fit: contain;
        height: 48%;
        margin-bottom: .6em;
      }
      button {
        background: linear-gradient(0deg, rgba(240,0,0,1) 0%, rgba(238,21,21,1) 100%);
        border-bottom: 2px solid black;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        box-shadow: 0 10px 0 lightgrey;
        height: calc(48% - 10px);
        margin-bottom: 10px;
        position: relative;
        transition: .2s;
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
          transition: .2s;
        }
      }
    }
    .dice:first-child {
      margin-right: .4em;
    }
    .dice:last-child {
      margin-left: .4em;
    }
    .dice-trainer {
      /* background-color: lightblue; */
    }
    .dice-pokemon {
      /* background-color: red; */
    }
    .dice-luck {
      /* background-color: lightgreen; */
    }
   
  }
`;

export default DicesStyled;
