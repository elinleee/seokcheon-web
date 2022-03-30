/* src/routes/Login/Login.js */
/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import styled from 'styled-components';

/* Styled Components */
const Container = styled.div`
`;

/* Main Component */
const Login = props => {
  /* Props */
  const {
    className,
  } = props;

  /* Renderer */
  return (
    <Container className={className}>
      Login
    </Container>
  );
}

/* Main Component Settings */
Login.propTypes = {
  className: PropTypes.string,
}

/* Exports */
export default Login;
