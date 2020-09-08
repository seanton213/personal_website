import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
  background: #ffffff;
  margin-bottom: 1.45rem;
`;

const InnerDiv = styled.div`
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const HeaderText = styled.h1`
  margin: 0;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  text-decoration: none;
`;

function Header({ siteTitle }) {
  return (
    <HeaderComponent>
      <InnerDiv>
        <HeaderText>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </HeaderText>
      </InnerDiv>
    </HeaderComponent>
  );
}
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
