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
  width: 29vw;
  background-color: white;
  position: absolute;
  z-index: 4;
  box-shadow: 0 0 10px 0.5px black;
  padding: 0 4vw 0 4vw;
  cursor: auto;
  @media (min-width: 310px) and (max-width: 430px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledHeadingName = styled(Heading)`
  text-align: center;
`;

const Description = styled.p`
  margin: 5rem 0 0 0;
  font-size: 16px;
`;

const StyledModalButton = styled(ModalButton)`
  width: 150px;
  margin: 5rem auto 2rem auto;
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
  standardizationDocument: PropTypes.string,
  protocol: PropTypes.object,
  isModalOpen: PropTypes.func
};

export default ProtocolModal;
