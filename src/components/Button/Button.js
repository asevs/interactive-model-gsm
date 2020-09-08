import styled from 'styled-components';

const Button = styled.div`
  text-align: center;
  color: white;
  width: 256px;
  height: 64px;
  line-height: 64px;
  transition: all 0.3s;
  span {
    transition: all 0.3s;
    transform: scale(1, 1);
  }
  ::before,
  ::after {
    content: '';
    position: absolute;
    transition: all 0.3s;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  ::before {
    opacity: 0;
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.3, 1.3);
  }

  :hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  ::after {
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  :hover::after {
    transform: scale(0, 0);
    opacity: 0;
  }
`;

export default Button;
