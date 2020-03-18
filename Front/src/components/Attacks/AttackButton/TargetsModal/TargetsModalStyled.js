import styled from 'styled-components';

const TargetsModalStyled = styled.div`
  padding: 2em 1em;
  .target-container {
    .target-group {
      display: flex;
      margin-bottom: 1em;
      align-items: center;
      .target-trainer {
        width: 100px;
        height: 100px;
        cursor: pointer;
        margin-right: 1em;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .target-pokemon {
        img {
          cursor: pointer;
        }
      }
    }
  }
`;

export default TargetsModalStyled;
