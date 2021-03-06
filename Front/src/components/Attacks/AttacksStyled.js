import styled from 'styled-components';

const AttacksStyled = styled.div`
  @media (max-width : 1024px) {
    .desktop {
      display: none
    }
    .mobile-tablet {
      .attacks-button {
        width: calc(7vw - .5em);
        height: calc(7vw - .5em);
        margin-bottom: .5em;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #6c757d;
        /* box-shadow: 0 0 15px rgba(117, 117, 117, .3); */
        img {
          height: 80%;
        }
      }
      .ui.left.sidebar {
        background-color: white;
        width: 40vw;
        /* for a fullboard size sidebar : 
        width: calc(93vw - .5em); */
        .attacks-sidebar {
          color: white;
          .button {
            height: 20vh;
          }
        }
      }
    }
  }

  @media (min-width: 1025px) {
    width: 30%;
    .mobile-tablet {
      display: none
    }
    .desktop {
      width: 100%;
      height: calc(30vh - 40px - 3em);
      margin: 1em 0 auto auto;
      background-color: none;
      display: flex;
      justify-content: space-between;
      align-content: space-between;
      flex-wrap: wrap;
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

  @media (min-width : 1400px) {
      width: 50%;
  }
`;

export default AttacksStyled;
