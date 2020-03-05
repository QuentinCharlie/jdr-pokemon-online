import styled from 'styled-components';

const ProgressBarStyled = styled.div`
  height: 1.5em;
  width: 100%;
  color: white;
  background-color: #f4df25;
  text-align: center;
  position: relative;
  border-radius: 10px;
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
  }
`;

export default ProgressBarStyled;
