import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import PropTypes from 'prop-types';

const FooterComponent = styled.footer`
  background: #eeeeee;
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (max-width: 448px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterText = styled.p`
  font-color: #949494;
  margin: 5px;
  flex-shrink: 0;
`;

function Footer({ contacts }) {
  return (
    <FooterComponent>
      <FooterText>© {new Date().getFullYear()} Sean Olson Luna</FooterText>
      <Contacts contacts={contacts} />
    </FooterComponent>
  );
}

Footer.propTypes = {
  contacts: PropTypes.object,
};

Footer.defaultProps = {
  contacts: {},
};

export default Footer;
