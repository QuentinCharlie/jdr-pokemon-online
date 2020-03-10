import styled from 'styled-components';

const TrainerStyled = styled.div`
  /* MOBIL-TABLET */
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .trainer-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: lightgreen;
      }
      .ui.left.sidebar {
        background-color: lightgreen;
        /* for a fullboard size sidebar : */
        width: calc(93vw - .5em);
        .trainer-sidebar {
          color: white;
        }
      }
    }
  }

  /* DESKTOP */
  @media (min-width: 1025px) {
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: calc(30vh - 40px - 3em);
      height: calc(30vh - 40px - 3em);
      margin: 1em;
      /* background-color: lightgray; */
      /* padding: .5em; */
      position: relative;
      .trainer-avatar {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        position: relative;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        align-items: flex-start;
        cursor: pointer;
        .trainer-avatar-img {
          /* width: 100%; */
          position: absolute;
          bottom: -1em;
          height: 28vh;
          /* object-fit: cover; */
          -webkit-filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
          filter: drop-shadow(0px 0px 15px rgba(117, 117, 117, .3));
        }
        .health-container {
          position: absolute;
          bottom: .5em;
          height: 1.5em;
          width: 100%;
          background-color: lightgray;
          text-align: center;
          border-radius: 10px;
          text-align: center;
          span {
            color: white;
            position: relative;
            z-index: 5;
          }
          img {
            position: absolute;
            z-index: 5;
            color: white;
            left: .3em;
            bottom: .15em;
            height: 80%;
          }
          /* BARRE VERTE*/
          .health-bar {
            position: absolute;
            bottom: 0em;
            height: 100%;
            background-color: #19cd70;
            border-radius: 10px 0 0 10px;
          }
        }
      }
      .money {
        color: white;
        position: absolute;
        bottom: 2.25em;
        left: 0;
        background-color: orange;
        border-radius: 10px;
        padding: 0 .5em;
        line-height: 1.5em;
      }
    }
  }
`;

export default TrainerStyled;
