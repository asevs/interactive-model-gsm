import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';

const items = [
  'Iur',
  'Nb',
  'Mc',
  'Nc/E',
  'Iub',
  'Abis',
  'Iur-g',
  'X2',
  'S1-MME',
  'S1-U',
  'S11',
  'Gn',
  'Ga',
  'S5',
  'Iuh',
  'Mb',
  'Mp',
  'Mr',
  'Mj',
  'Mn',
  'Mw',
  'Dx',
  'Rx/Gq',
  'Rx',
  'S2',
  'S7',
  'Cx',
  'S10',
  'Lp',
  'SMLC-CBC',
  'Lc',
  'Mx',
  'Mk',
  'Mi',
  'Mg',
  'TDM',
  'Le',
  'Lg',
  'Iu-BC',
  'Gmb',
  'Iupc',
  'CBC-BSC',
  'GERAN',
  'UTRAN',
  'eUTRAN',
  'CS Core',
  'PS Core',
  'Femtocell',
  'LTE',
  'S1-MME',
  'Gd',
  'Iu-CS',
  'Gb',
  'A/Ater',
  'Iur-g',
  'Iu-PS',
  'S101',
  'S13',
  'S12',
  'S6a',
  'Gs',
  'F',
  'S6d',
  'Gp',
  'S3',
  'S4',
  'S6b',
  'SS7',
  'SGs',
  'Ge',
  'RNC',
  'MME',
  'S-GW',
  'PDN GW',
  'SGSN',
  'CGN',
  'CS-MGW',
  'AAA',
  'MSC Server',
  'Other PLMN',
  'PCRF/PDF',
  'MRFP',
  'P-CSCF',
  'Internet, IP Service',
  'I-BCF',
  'BGCF',
  'MRFC',
  'IMS-MGW',
  'I-BFG/TrGW',
  'PSTN Network',
  'SMLC',
  'HNB GW',
  'SMS-SC',
  'GMLC',
  'BM-SC',
  'MMS-SC',
  'CBC',
  'HSS/Auc',
  'GMSC Server',
  'BG',
  'GGSN',
  'BSC',
  'CDMA 2000',
  'ISC',
  'Ma',
  'Dh',
  'Sh',
  'Lh',
  'Camel entity',
  'AS',
  'SLF',
  'I-CSCF',
  'S-CSCF',
  'Lb',
  'eNB',
  'BTS',
  'HNB',
  'NodeB'
];

function searchingFor(searchItem) {
  return function(x) {
    return x.toLowerCase().includes(searchItem.toLowerCase()) || !searchItem;
  };
}

const StyledWrapper = styled.div`
  position: absolute;
  bottom: -6%;
  left: 3;
  width: 250px;
  z-index: 2;
  @media (min-width: 310px) and (max-width: 430px) {
    width: 100%;
    bottom: -17%;
  }
`;

const SearchList = styled.ul`
  list-style-type: none;
  position: absolute;
  margin: 0;
  z-index: 2;
  border: none;
  border-radius: 0 0 20px 20px;
  background-color: white;
  width: 100%;
  box-shadow: 0 0 1px 0.5px grey;
`;

const SearchListItem = styled.li`
  font-size: 1.8rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
  margin-left: -4rem;
  :hover {
    background-color: lightgrey;
    border: none;
    cursor: pointer;
  }
  :last-child {
    border-radius: 0 0 20px 20px;
  }
`;

const SearchInput = styled(Input)`
  ${({ value }) =>
    value.length >= 1 &&
    css`
      border-radius: 20px 20px 0 0;
      box-shadow: 0 0 1px 0.5px ${({ theme }) => theme.grey100};
    `}
`;

const Search = ({ setCheckedItem, setCSSSearchItem }) => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <StyledWrapper>
      <SearchInput
        search
        value={searchItem}
        onChange={e => setSearchItem(e.target.value)}
      />
      {searchItem.length >= 1 && (
        <SearchList>
          {items.filter(searchingFor(searchItem)).map(item => (
            <SearchListItem
              onMouseEnter={() => {
                setCSSSearchItem(item);
              }}
              onMouseLeave={() => {
                setCSSSearchItem('');
              }}
              key={item.id}
              onClick={() => {
                setCheckedItem(item);
                setSearchItem('');
                setCSSSearchItem('');
              }}
            >
              {item}
            </SearchListItem>
          ))}
        </SearchList>
      )}
    </StyledWrapper>
  );
};

Search.propTypes = {
  item: PropTypes.array.isRequired,
  setCheckedItem: PropTypes.func,
  setCSSSearchItem: PropTypes.func
};

export default Search;
