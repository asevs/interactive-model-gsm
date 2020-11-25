import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalButton from 'components/atoms/ModalButton/ModalButton';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import ProtocolModal from 'components/organisms/ProtocolModal/ProtocolModal';

const StyledWrapper = styled.div`
  top: 150%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  background-color: white;
  position: absolute;
  z-index: 3;
  padding: 0 4vw 0 4vw;
  box-shadow: 0 0 10px 0.5px black;
`;

const StyledHeadingName = styled(Heading)`
  text-align: center;
`;

const Description = styled.p`
  margin: 5rem 0 0 0;
  white-space: pre-line;
  text-align: justify;
`;

const StyledModalButton = styled(ModalButton)`
  width: 150px;
  margin: 5rem auto 2rem auto;
`;

const ProtocolsList = styled.ul`
  margin: 8rem auto 0 auto;
  list-style-type: none;
  width: 60%;
  padding: 0;
  height: 200px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

const Protocol = styled.li`
  text-align: center;
  font-size: 3rem;
  background-color: #f8f8f8;
  :hover {
    cursor: pointer;
    background-color: gray;
  }
  ${({ id }) =>
    id % 2 === 0 &&
    css`
      background-color: #eeeeee;
    `};
`;

const ItemModal = ({ item, isOpenModal }) => {
  const [isProtocolToModalOpen, setProtocolToModalOpen] = useState();

  function isProtocolModalOpen() {
    setProtocolToModalOpen(null);
  }

  return (
    <StyledWrapper>
      <StyledHeadingName big>{item.name}</StyledHeadingName>
      <Description>{item.description}</Description>

      {item.protocols.length != 0 && (
        <ProtocolsList protocols={item.protocols}>
          {item.protocols.map(protocol => (
            <Protocol
              onClick={() => setProtocolToModalOpen(protocol.shortcut)}
              id={item.protocols.indexOf(protocol)}
              key={protocol.shortcut}
            >
              {protocol.shortcut}
            </Protocol>
          ))}
        </ProtocolsList>
      )}
      {isProtocolToModalOpen != null && (
        <ProtocolModal
          protocol={item.protocols.filter(
            protocol => protocol.shortcut === isProtocolToModalOpen
          )}
          isModalOpen={() => isProtocolModalOpen()}
        />
      )}
      <StyledModalButton onClick={() => isOpenModal('')}>
        Zamknij
      </StyledModalButton>
    </StyledWrapper>
  );
};

ItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  isOpenModal: PropTypes.func
};

export default ItemModal;
