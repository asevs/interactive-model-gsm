import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  top: 150%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 50vw;
  height: 70vh;
  background-color: gray;
  box-shadow: 0 20px 40px -10px rgba(#818181, 0.5);
  position: absolute;
  z-index: 10;
`;

const ItemModal = () => <StyledWrapper>xdd</StyledWrapper>;

export default ItemModal;
