import styled from 'styled-components';
import pokeGif from 'src/assets/images/pokemon/pikachu.gif';

const GridStyled = styled.div`
  @media (max-width : 1024px) {
    #grid {
      position: absolute;
      display: flex;
      flex-direction: column;
      .row {
        display: flex;
        .cell {
          border: 1px solid rgba(0, 0, 0, .1);
          width: 50px;
          height: 50px;
          position: relative;
        }
      }
    }
    
  }

  @media (min-width: 1025px) {
    #grid {
      position: absolute;
      display: flex;
      flex-direction: column;
      .row {
        display: flex;
        .cell {
          border: 1px solid rgba(0, 0, 0, .1);
          width: 50px;
          height: 50px;
          position: relative;
        }
        /* .pokemon {
          content: url(${pokeGif});
        } */
      }
    }
  }
`;

export default GridStyled;
