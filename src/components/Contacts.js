import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { getContactHref, getIcon } from '../util';

const StyledUl = styled.ul`
  display: flex;
  flex-flow: row wrap;
  flex-grow: 0;
  flex-shrink: 2;
  list-style: none;
  padding: 0;
  margin: 5px;
`;

const StyledLi = styled.li`
  padding: 0;
  margin: 4px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  line-height: 35px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #222;
`;

const StyledLink = styled.a`
  border: 0;
  display: flex;
  color: #222;

  &:hover,
  &:focus {
    color: #5d93ff;
  }
`;

function Contacts({ contacts }) {
  return (
    <StyledUl>
      {contacts &&
        Object.keys(contacts).map((name) => (
          <StyledLi key={name}>
            <StyledLink
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </StyledLink>
          </StyledLi>
        ))}
    </StyledUl>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.object,
};

Contacts.defaultProps = {
  contacts: {},
};

export default Contacts;
