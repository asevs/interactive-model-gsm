import React from 'react';
import styled from 'styled-components';
import ModalButton from 'components/atoms/ModalButton/ModalButton';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 35vw;
  height: 75vh;
  background-color: white;
  position: absolute;
  z-index: 10;
  padding: 0 4vw 0 4vw;
  cursor: auto;
`;

const StyledHeadingName = styled(Heading)`
  text-align: center;
`;

const Description = styled.p`
  margin: 5rem 0 0 0;
  font-size: 16px;
`;

const StyledModalButton = styled(ModalButton)`
  position: absolute;
  bottom: 5rem;
  left: 39%;
  font-size: 2.3rem;
`;

const ProtocolModal = ({ protocol, isModalOpen }) => (
  <StyledWrapper>
    <StyledHeadingName big>{protocol[0].name}</StyledHeadingName>
    <Description>{protocol[0].description}</Description>
    <a href={protocol[0].link} target="_blank" rel="noopener noreferrer">
      {protocol[0].standardizationDocument}
    </a>

    <StyledModalButton onClick={() => isModalOpen()}>Zamknij</StyledModalButton>
  </StyledWrapper>
);

ProtocolModal.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  closeModal: PropTypes.func,
  standardizationDocument: PropTypes.string
};

export default ProtocolModal;
