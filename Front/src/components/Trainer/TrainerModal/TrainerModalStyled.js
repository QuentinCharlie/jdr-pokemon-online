import styled from 'styled-components';

const TrainerModalStyled = styled.div`
  padding: .5em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .modal-header {
    border-bottom: 1px solid black;
    padding-bottom: .5em;
    h1 {
      text-align: center;
    }
  }
  .modal-content {
    display: flex;
    padding-top: .5em;
    width: 100%;
    height: 100%;
    .wrapper-left {
      display: flex;
      flex-direction: column;
      margin-right: .5em;
      width: 70%;
      height: 100%;
      .trainer {
        display: flex;
        height: calc(100% / 3.5);
        width: 100%;
        .trainer-avatar {
          height: 100%;
          width: 20%;
          padding: .5em;
          background-color: lightblue;
          margin-right: .5em;
          .trainer-avatar-container {
            overflow: hidden;
            height: 100%;
            width: 100%;
            .modal-trainer-avatar {
              width: 100%;
              object-position: 50% 50%;
              objet-fit: cover;
            }
          }
        }
        .trainer-description {
          display: flex;
          width: 80%;
          height: 100%;
          .trainer-description-infos {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: 100%;
            margin-right: .5em;
            .trainer-description-infos-basics {
              height: 50%;
              background-color: lightblue;
              margin-bottom: .5em;
            }
            .trainer-description-infos-team {
              height: 50%;
              background-color: lightblue;
            }
          }
          .trainer-description-appearance {
            background-color: lightblue;
            width: 50%;
            height: 100%;              
            padding:.5em;
          }
        }
      }
      .stats {
        height: calc(100% / 2.5);
        width: 100%;
        margin: .5em 0;
        display: flex;
        .stats-stat {
          background-color: lightgreen; 
          height: 100%;
          width: calc((100% / 3) - .25em);
        }
        .stats-skills {
          background-color: lightgreen; 
          height: 100%;
          width: calc((100% / 3) * 2);
          margin-left: .5em;
        }
      }
      .text {
        height: calc(100% / 3);
        width: 100%;
        display: flex;
        .text-background {
          background-color: lightcoral; 
          width: calc(100% / 3);
          height: 100%;
        }
        .text-history {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
          margin: 0 .5em;
        }
        .text-notes {
          background-color: lightcoral; 
          height: 100%;
          width: calc(100% / 3);
          height: 100%;
        }
      }
    }

    .wrapper-right {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;
      .spendables {
        background-color: lightblue;
        height: calc(100% / 14);
        margin-bottom: .5em;
      }
      .inventory {
        height: calc(100% - (100% / 14));
        width: 100%;
        display: flex;
        flex-direction: column;
        .inventory-nav {
          background-color: coral;
          height: calc(100% / 14);
          width: 100%;
        }
        .inventory-content {
          background-color: lightcoral;
          height: calc(100% - (100% / 14));
          width: 100%;
        }
      }
    }
  }
  
`;

export default TrainerModalStyled;
