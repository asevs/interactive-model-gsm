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
  width: 35vw;
  height: 75vh;
  background-color: white;
  position: absolute;
  z-index: 3;
  padding: 0 4vw 0 4vw;
  box-shadow: 0 0 10px 0.5px black;

  ${({ setHeight }) =>
    setHeight &&
    css`
      height: 45vh;
    `};
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
  position: absolute;
  bottom: 5rem;
  left: 39%;
`;

const ProtocolsList = styled.ul`
  margin: 8rem auto 0 auto;
  list-style-type: none;
  width: 25rem;
  padding: 0;
  overflow-y: auto;
  height: 200px;

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

  function CheckDescription(description, protocols) {
    if (protocols.length === 0 && `${description}`.length < 400) return true;
  }

  return (
    <StyledWrapper
      setHeight={CheckDescription(item.description, item.protocols)}
    >
      {item ? (
        <>
          <StyledHeadingName big>{item.name}</StyledHeadingName>
          <Description>{item.description}</Description>

          {item.protocols && (
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
        </>
      ) : (
        <StyledHeadingName big>Brak danych</StyledHeadingName>
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
