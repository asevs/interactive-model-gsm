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
`;

const ProtocolModal = ({
  name,
  closeModal,
  description,
  link,
  standardizationDocument
}) => (
  <StyledWrapper>
    <StyledHeadingName big>{name}</StyledHeadingName>
    <Description>{description}</Description>
    <a href={link}>{standardizationDocument}</a>

    <StyledModalButton>Zamknij</StyledModalButton>
  </StyledWrapper>
);

ProtocolModal.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  closeModal: PropTypes.func,
  standardizationDocument: PropTypes.string
};

export default ProtocolModal;
