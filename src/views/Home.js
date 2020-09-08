import React from 'react';
import styled from 'styled-components';
import background from 'assets/background.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/Button/Button';
import { Link, Element } from 'react-scroll';

const StyledWrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  height: 100vh;
  background-size: cover;
`;

const StyledHeading = styled(Heading)`
  position: absolute;
  margin: 20% 0 0 5%;
  font-size: 6.3rem;
  color: white;
  width: 50%;
`;

const StyledButton = styled(Button)`
  position: absolute;
  margin: 40% 0 0 47%;
`;

const ModelWrapper = styled(Element)`
  height: 100vh;
`;

const Home = () => (
  <>
    <StyledWrapper>
      <StyledHeading big>Model sieci komórkowej 2G/3G/4G</StyledHeading>

      <Link
        activeClass="active"
        to="model"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <StyledButton>Zaczynajmy</StyledButton>
      </Link>
    </StyledWrapper>
    <ModelWrapper id="model">MODEL</ModelWrapper>
  </>
);

export default Home;
