import styled from 'styled-components';

const ProgressBarStyled = styled.div`
  height: 1.5em;
  width: 100%;
  background-color: gray;
  text-align: center;
  position: relative;
  span {
    position: relative;
    z-index: 5;
  }
  .bar {
    position: absolute;
    bottom: 0em;
    height: 100%;
  }
`;

export default ProgressBarStyled;
