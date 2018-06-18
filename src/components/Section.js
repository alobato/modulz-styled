import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Section = styled.section`
  ${props => props.size1 && css`
    padding-top: ${theme.SPACING_300};
    padding-bottom: ${theme.SPACING_300};
  `}

  ${props => props.size2 && css`
    padding-top: ${theme.SPACING_600};
    padding-bottom: ${theme.SPACING_600};
  `}

  ${props => props.size3 && css`
    padding-top: ${theme.SPACING_900};
    padding-bottom: ${theme.SPACING_900};
  `}

  ${props => props.expanded && css`
    height: 100vh;
  `}
`;

Section.propTypes = {
  mode: PropTypes.oneOf([
    'size1',
    'size2',
    'size3'
  ])
}

export default Section;
