import styled from 'styled-components';

const LogStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }
  /* DESKTOP */
  @media (min-width: 1025px) {
    position: relative;
    width: calc(30vw - 2em);
    height: 70vh;
    margin: 0 1em;
    padding-top: .5em;
    /* box-shadow: 0 0 10px rgba(117, 117, 117, .3); */
    /* background-color: lightgray; */
    .svg1 {
      border-radius: 10px 10px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    .svg2 {
      border-radius: 10px 10px 0 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 7;
    }
    .svg3 {
      border-radius: 0 0 10px 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 7;
    }
    .log {
      border-radius: 10px;
      position: relative;
      z-index: 6;
      width: 100%;
      height: 90%;
      padding: 3.5em .5em 0 .5em;
      margin-bottom: .5em;
      overflow: auto;
      /* scrollbar hidden (IE/Edge) */
      -ms-overflow-style: none;
      /* scrollbar hidden (Chrome/Firefox/Safari) */
      &::-webkit-scrollbar {
        display: none;
      }
      p {
        margin-bottom: 0;
      } 
      .entry {
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(117, 117, 117, .3);
        background-color: rgba(255, 255, 255, 1);
        margin-bottom: .5em;
        padding: .5em;
        .turn {
          padding: 0 1em;
        }
      }
    }
    
    .current-player {
      position: relative;
      border-radius: 0 0 10px 10px;
      /* background-color: lightgray; */
      width: 100%;
      height: calc(10% - .5em);
      /* border-top: solid gray 2px; */
      padding: .5em;
      p {
        color: white;
        position: absolute;
        bottom: 1em;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      }
      .turn-name {
        font-size: 1.5em;
        text-align: center;
      }
    }
  }
`;

export default LogStyled;
