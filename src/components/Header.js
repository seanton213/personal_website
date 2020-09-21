import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled.header`
  background: #ffffff;
  margin-bottom: 1.45rem;
  border-bottom-color: #949494;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

const InnerDiv = styled.div`
  max-width: 960;
  padding: 0.75rem 1.0875rem;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: 4px;
`;

const StyledLink = styled((props) => <Link {...props} />)`
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
