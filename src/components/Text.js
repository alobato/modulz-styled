import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Text = styled.p`
  color: ${theme.GRAY_900};

  ${props => props.size1 && css`
    font-size: ${theme.FONTSIZE_200};
  `}
  ${props => props.size2 && css`
    font-size: ${theme.FONTSIZE_300};
  `}
  ${props => props.size3 && css`
    font-size: ${theme.FONTSIZE_400};
  `}
  ${props => props.size4 && css`
    font-size: ${theme.FONTSIZE_500};
  `}
  ${props => props.size5 && css`
    font-size: ${theme.FONTSIZE_600};
  `}
  ${props => props.size6 && css`
    font-size: ${theme.FONTSIZE_700};
  `}
  ${props => props.size7 && css`
    font-size: ${theme.FONTSIZE_800};
  `}
  ${props => props.size8 && css`
    font-size: ${theme.FONTSIZE_900};
  `}
`;

export default Text;
