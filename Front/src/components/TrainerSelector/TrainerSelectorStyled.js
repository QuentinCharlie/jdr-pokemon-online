import styled from 'styled-components';

const TrainerSelectorStyled = styled.div`
  padding: 1em;
  .card-list {
    width: 100%;
    height: 100%;
    display: flex;
    .card-trainer {
      width: calc(100% / 3);
      .image-container {
        .img {
          object-fit: contain;
        }
      }

    }
  }
`;

export default TrainerSelectorStyled;
