import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  font-style: normal;
  font-weight: normal;
  speak: none;
  margin-right: 0.2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: 0.2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

function Icon({ name, icon }) {
  return (
    <StyledIcon viewBox={icon.viewBox}>
      <title>{name}</title>
      <path d={icon.path} />
    </StyledIcon>
  );
}

Icon.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
};

Icon.defaultProps = {
  name: '',
  icon: {},
};

export default Icon;
