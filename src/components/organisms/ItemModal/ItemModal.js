import React from 'react';
import styled, { css } from 'styled-components';
import ModalButton from 'components/atoms/ModalButton/ModalButton';
import Heading from 'components/atoms/Heading/Heading';
import PropTypes from 'prop-types';

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
  z-index: 10;
  padding: 0 4vw 0 4vw;
  box-shadow: 0 0 10px 0.5px black;
`;

const StyledHeadingName = styled(Heading)`
  text-align: center;
`;

const Description = styled.p`
  margin: 5rem 0 0 0;
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
`;

const Protocol = styled.li`
  text-align: center;
  font-size: 3rem;
  background-color: #eeeeee;
  ${({ key }) =>
    key % 2 === 0 &&
    css`
      background-color: #f8f8f8;
    `};
`;

const ItemModal = ({ item, isOpenModal }) => (
  <StyledWrapper>
    {item ? (
      <>
        <StyledHeadingName big>{item.name}</StyledHeadingName>
        <Description>{item.description}</Description>

        {item.protocols && (
          <ProtocolsList protocols={item.protocols}>
            {item.protocols.map(
              ({
                id,
                name,
                shortcut,
                link,
                description,
                standarizationDocument
              }) => (
                <Protocol key={id}>{shortcut}</Protocol>
              )
            )}
          </ProtocolsList>
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

ItemModal.propTypes = {
  item: PropTypes.object.isRequired,
  isOpenModal: PropTypes.func
};

export default ItemModal;
