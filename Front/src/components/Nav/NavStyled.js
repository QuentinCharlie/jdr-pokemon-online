import styled from 'styled-components';

const NavStyled = styled.nav`
  @media (max-width : 1024px), (max-height : 768px) {
    width: calc(15vh - .75em);
    height: calc(15vh - .75em);
    margin: .5em .5em .5em 0;
    background-color: lightgray;
  }

  @media (min-height : 769px) {
    width: 100vw;
    height: 40px;
    margin-bottom: 1em;
    background-color: lightgray;
  }
`;

export default NavStyled;
