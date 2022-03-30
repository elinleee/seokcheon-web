/* src/layouts/Main/Header/Header.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

import SideBar from '../SideBar/SideBar';

/* Styled components */
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  margin-bottom: 30px;
  width: 100%;
  z-index: 100;
  background: white;
`;

/* Main Compoent */
const Header = props => {
  /* Props */
  const {
    className,
  } = props;

  /* Renderer */
  return (
    <Container className={className}>
      <SideBar />
    </Container>
  );
}

/* Main Component Settings */
Header.propTypes = {
  className: PropTypes.string,
}

/* Exports */
export default Header;
