import React from 'react';
import styled, { css } from 'styled-components';
import background from 'assets/background.svg';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ModelGSM from 'components/organisms/ModelGSM/ModelGSM';
import { Link, Element } from 'react-scroll';
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
  font-size: 6.3rem;
  color: white;
  position: absolute;
  top: 40%;
  margin-left: 10rem;

  @media (min-width: 310px) and (max-width: 430px) {
    font-size: 4.3rem;
    top: 20%;
    margin-left: 4rem;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 85%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

const ModelWrapper = styled(Element)`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  margin: 1rem 0 0 0;
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

const ModelLegend = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  background-color: ${({ theme }) => theme.grey100};
  z-index: 1;
  bottom: -100%;
  left: 3;
  border-radius: 30px;
  padding: 2rem;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        shortcut: '',
        protocols: []
      },

      searchCSSItem: null
    };
  }

  checkItem = checkedItem => {
    this.setState({ item: checkedItem });
    checkedItem && this.getItem(checkedItem);
  };

  getItem = checkedItem => {
    API.post(`/interfaces/getByShortcut`, { shortcut: checkedItem }).then(
      res => {
        this.setState({ item: res.data });
      }
    );
  };

  updateSearch(event) {
    this.setState({ searchItem: event.target.value });
  }

  searchingFor(searchItem) {
    return function(x) {
      return x.toLowerCase().includes(searchItem.toLowerCase()) || !searchItem;
    };
  }

  setCSSSearchItem = item => {
    this.setState({ searchCSSItem: item });
  };

  render() {
    const { item, checkedItem, searchCSSItem } = this.state;

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
        {item.name && <ItemModal item={item} isOpenModal={this.checkItem} />}
        <ModelWrapper
          id="model"
          styledBackground={checkedItem}
        >
          <Search
            setCheckedItem={this.checkItem}
            setCSSSearchItem={this.setCSSSearchItem}
          />
          {window.screen.width > 1000 && <ModelLegend>dasdsa</ModelLegend>}
          <ModelGSM
            setCheckedItem={this.checkItem}
            setCSSSearchItem={searchCSSItem}
          />
        </ModelWrapper>
      </>
    );
  }
}

export default Home;
