import styled from 'styled-components';

const TrainerSelectorStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: .5em;
  display: flex;
  justify-content: center;
  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-list {
    width: 70%;
    height: 100%;
    .selection-header {
      width: 100%;
      background-color: none;
      padding: .5em 0;
      font-size: 2em;
      font-weight: bold;
      margin: 0 .5em .5em 0;
      border-radius: 10px;
      /* box-shadow: 0 0 15px rgba(117, 117, 117, .6); */
      text-align: center;
    }
    .ui.stackable.cards .card:first-child {
      margin-top: 1em!important;
    }
    .card-trainer {
      min-width: 250px;
      cursor: pointer;
      .image-container {
        display: flex;
        justify-content: center;
        .img {
        }
      }
      .background-container {
        height: 150px;
        overflow: auto;
        /* scrollbar hidden (IE/Edge) */
        -ms-overflow-style: none;
        /* scrollbar hidden (Chrome/Firefox/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default TrainerSelectorStyled;
