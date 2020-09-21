import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';
import PropTypes from 'prop-types';

const FooterComponent = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  background: #eeeeee;
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;

const FooterText = styled.p`
  font-color: #949494;
  margin: 5px;
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
