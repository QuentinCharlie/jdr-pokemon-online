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
      .trainer-stats {
        width: 100%;
        /* height: 100%; */
        .stat {
          display: flex;
          align-items: flex-end;
          .title {
            padding: .2em 0;
            width: 30%;
            text-shadow: 1px 1px 2px rgba(20, 20, 20, .15);
            /* text-align: center; */
            abbr {
              font-style: none;
              text-decoration: none;
            }
          }
        }
      }
      .background-container {
        height: 150px;
        overflow: auto;
        /* scrollbar hidden (IE/Edge) */
        -ms-overflow-style: none;
                /* scrollbar hidden (Firefox) */
                scrollbar-width: none;
        /* scrollbar hidden (Chrome/Safari) */
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default TrainerSelectorStyled;
