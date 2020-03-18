import styled from 'styled-components';

const CellRowStyled = styled.div`
  @media (max-width : 1024px) {
    display: flex;
    .cell {
      border: 1px solid rgba(0, 0, 0, .1);
      width: 50px;
      height: 50px;
    }
  }

  @media (min-width: 1025px) {
    display: flex;
    .cell {
      border: 1px solid rgba(0, 0, 0, .1);
      width: 50px;
      height: 50px;
    }
  }
`;

export default CellRowStyled;
