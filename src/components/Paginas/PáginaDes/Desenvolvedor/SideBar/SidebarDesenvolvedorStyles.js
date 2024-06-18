import styled from 'styled-components';

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  width: 300px;
  animation: showSidebar .4s;
  z-index: 1000;  /* Adicionando z-index para garantir que a sidebar fique por cima */

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
    z-index: 1001;  /* Garantir que o ícone também esteja por cima */
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
