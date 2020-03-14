import styled from 'styled-components';

const ProgressBarStyled = styled.div`
  height: 1.5em;
  width: 100%;
  color: white;
  background-color: rgba(20, 20, 20, 0.1);
  text-align: center;
  position: relative;
  border-radius: 10px;
  .hidden {
    display: none;
  }
  .skew-number {
    position: absolute;
    top: calc(50% - 0.75em);
    left: calc(50% - 17px);
    background-color: rgb(248, 204, 83);
    width: 25px;
    height: 1.5em;
    transform: skew(-20deg);
  }
  span {
    color: white;
    height: 100%;
    position: relative;
    top: calc(50% - .7em);
    z-index: 5;
  }
  .bar {
    border-radius: 10px 0 0 10px;
    position: absolute;
    bottom: 0em;
    height: 100%;
    .skew-bar {
      content: "";
      position: absolute;
      top: 0;
      right: -4px;
      background-color: rgb(248, 204, 83);
      width: 15px;
      height: 1.5em;
      transform: skew(-20deg);
      z-index: 3;
    }
  }

  /* @media (max-width: 1350px) {
    background: none;
    text-align: right;
    margin-right: 1em;
    text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
    .bar {
      display: none;
    }
  } */
`;

export default ProgressBarStyled;
