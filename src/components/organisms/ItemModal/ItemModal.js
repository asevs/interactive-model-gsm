import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalButton from 'components/atoms/ModalButton/ModalButton';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';
import ProtocolModal from 'components/organisms/ProtocolModal/ProtocolModal';

const StyledWrapper = styled.div`
  top: 150vh;
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
  zoom: 1;

  @media (min-width: 430px) and (max-width: 1000px) {
    width: 60vw;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    width: 40vw;
  }

  @media (min-width: 310px) and (max-width: 430px) {
    width: 100vw;
    height: 100%;
    top: 160%;
  }
`;

const StyledHeadingName = styled(Heading)`
  text-align: center;
`;

const Description = styled.p`
  margin: 5rem 0 0 0;
  padding: 0 1em 0 0;
  white-space: pre-line;
  text-align: justify;
  max-height: 45vh;
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

const StyledModalButton = styled(ModalButton)`
  width: 150px;
  margin: 5rem auto 2rem auto;
`;

const ProtocolsList = styled.ul`
  margin: 0 auto 0 auto;
  list-style-type: none;
  padding: 0;
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
  font-size: 1.7rem;
  background-color: #f8f8f8;
  :hover {
    cursor: pointer;
    background-color: gray;
  }
  ${({ priority }) =>
    priority === 1 &&
    css`
      background-color: #35cccc;
    `};
  ${({ priority }) =>
    priority === 2 &&
    css`
      background-color: #0dffff;
    `};
  ${({ priority }) =>
    priority === 3 &&
    css`
      background-color: #ccffff;
    `};
  ${({ priority }) =>
    priority === 4 &&
    css`
      background-color: #cbffcd;
    `};
  ${({ priority }) =>
    priority === 5 &&
    css`
      background-color: #1bccff;
    `};
  ${({ priority }) =>
    priority === 6 &&
    css`
      background-color: #fdff9b;
    `};
  ${({ priority }) =>
    priority === 7 &&
    css`
      background-color: #cbffcd;
    `};
  ${({ priority }) =>
    priority === 8 &&
    css`
      background-color: #fdff21;
    `};
`;

const Table = styled.table`
  margin: 5rem auto 0 auto;
  border-width: 0;
  padding: 0;
`;

const Td = styled.td``;
const Tr = styled.tr``;
const ItemModal = ({ item, isOpenModal }) => {
  const [isProtocolToModalOpen, setProtocolToModalOpen] = useState();

  function isProtocolModalOpen() {
    setProtocolToModalOpen(null);
  }

  return (
    <StyledWrapper>
      <StyledHeadingName big>{item.name}</StyledHeadingName>
      <Description>
        {item.description !== null ? item.description : `Brak danch`}
      </Description>

      {item.controlProtocols != 0 && (
        <Table>
          <thead>
            <tr>
              {item.controlProtocols != 0 && <th>Control plane</th>}
              {item.userProtocols != 0 && <th>User plane</th>}
              {item.transportProtocols != 0 && <th>Transport Control Plane</th>}
            </tr>
          </thead>
          <tbody>
            <Tr>
              {item.controlProtocols != 0 && (
                <Td>
                  <ProtocolsList protocols={item.controlProtocols}>
                    {item.controlProtocols.map(protocol => (
                      <Protocol
                        onClick={() => setProtocolToModalOpen(protocol)}
                        priority={protocol.priority}
                        key={protocol.shortcut}
                      >
                        {protocol.shortcut}
                      </Protocol>
                    ))}
                  </ProtocolsList>
                </Td>
              )}
              {item.userProtocols != 0 && (
                <Td>
                  <ProtocolsList protocols={item.userProtocols}>
                    {item.userProtocols.map(protocol => (
                      <Protocol
                        onClick={() => setProtocolToModalOpen(protocol)}
                        priority={protocol.priority}
                        key={protocol.shortcut}
                      >
                        {protocol.shortcut}
                      </Protocol>
                    ))}
                  </ProtocolsList>
                </Td>
              )}
              {item.transportProtocols != 0 && (
                <Td>
                  <ProtocolsList protocols={item.transportProtocols}>
                    {item.transportProtocols.map(protocol => (
                      <Protocol
                        onClick={() => setProtocolToModalOpen(protocol)}
                        priority={protocol.priority}
                        key={protocol.shortcut}
                      >
                        {protocol.shortcut}
                      </Protocol>
                    ))}
                  </ProtocolsList>
                </Td>
              )}
            </Tr>
            <Tr>
              {item.allProtocols != 0 && (
                <Td colSpan="3">
                  <ProtocolsList protocols={item.allProtocols}>
                    {item.allProtocols.map(protocol => (
                      <Protocol
                        onClick={() => setProtocolToModalOpen(protocol)}
                        priority={protocol.priority}
                        key={protocol.shortcut}
                      >
                        {protocol.shortcut}
                      </Protocol>
                    ))}
                  </ProtocolsList>
                </Td>
              )}
            </Tr>
          </tbody>
        </Table>
      )}
      {isProtocolToModalOpen != null && (
        <ProtocolModal
          protocol={isProtocolToModalOpen}
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
