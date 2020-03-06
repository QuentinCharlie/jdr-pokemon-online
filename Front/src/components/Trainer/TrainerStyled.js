import styled from 'styled-components';

const TrainerStyled = styled.div`
  @media (max-width : 1024px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: 0 .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-width: 1025px) {
    width: calc(30vh - 40px - 3em);
    height: calc(30vh - 40px - 3em);
    margin: 1em;
    background-color: lightgray;
    padding: .5em;
    position: relative;
    .trainer-avatar {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      display: flex;
      justify-content: center;
      /* align-items: center; */
      align-items: flex-start;
      cursor: pointer;
      .trainer-avatar-img {
        width: 100%;
        object-fit: cover;
      }
      .health-container {
        position: absolute;
        bottom: 0;
        height: 1.5em;
        width: 100%;
        background-color: gray;
        text-align: center;
        span {
          position: relative;
          z-index: 5;
        }
        /* BARRE VERTE*/
        .health-bar {
          position: absolute;
          bottom: 0em;
          height: 100%;
          background-color: green;
        }
      }
    }
    .money {
      position: absolute;
      top: .5em;
      right: .5em;
      background-color: yellow;
      padding: .2em .5em;
    }
  }
`;

export default TrainerStyled;
