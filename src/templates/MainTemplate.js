import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    <GlobalStyle />
  </>
);
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
