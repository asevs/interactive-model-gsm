import React from 'react';
import styled, { css } from 'styled-components';
import background from 'assets/background.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ModelGSM from 'components/organisms/ModelGSM/ModelGSM';
import { Link, Element } from 'react-scroll';
import { MapInteractionCSS } from 'react-map-interaction';
import ItemModal from 'components/organisms/ItemModal/ItemModal';
import API from '../utils/API';
import Search from 'components/organisms/Search/Search';
const StyledWrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 50% 50%;
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
  width: 100vw;
  background-repeat: no-repeat;
  padding: 2rem 0 3rem 1rem;
  margin: 1rem 6rem 0 1rem;
  ${({ styledBackground }) =>
    styledBackground &&
    css`
      -webkit-filter: blur(3px);
      -moz-filter: blur(3px);
      -o-filter: blur(3px);
      -ms-filter: blur(3px);
      filter: blur(3px);
    `};
`;

const StyledSearch = styled(Search)`
  width: 13%;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        shortcut: ''
      },

      checkedItem: null
    };
  }
  // eslint-disable-next-line
  checkItem = checkedItem => {
    this.setState({ checkedItem: checkedItem });
    checkedItem ? this.getItem(checkedItem) : this.setState({ item: null });
  };

  getItem = checkedItem => {
    API.get(`/interfaces/getByShortcut/${checkedItem}`).then(res => {
      this.setState({ item: res.data });
    });
  };

  updateSearch(event) {
    this.setState({ searchItem: event.target.value });
  }

  searchingFor(searchItem) {
    return function(x) {
      return x.toLowerCase().includes(searchItem.toLowerCase()) || !searchItem;
    };
  }

  render() {
    const { item, checkedItem } = this.state;

    return (
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
        {checkedItem && <ItemModal item={item} isOpenModal={this.checkItem} />}
        <ModelWrapper id="model" styledBackground={checkedItem}>
          <StyledSearch setCheckedItem={this.checkItem} />
          <MapInteractionCSS>
            <ModelGSM setCheckedItem={this.checkItem} />
          </MapInteractionCSS>
        </ModelWrapper>
      </>
    );
  }
}

export default Home;
