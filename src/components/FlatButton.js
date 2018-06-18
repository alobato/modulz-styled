import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const FlatButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  user-select: none;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  outline: none;
  letter-spacing: .15px;
  transition-property: all;
  transition-duration: .15s
  transition-timing-function: ease;
  box-shadow: 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

  border-radius: 4px;
  color: ${theme.WHITE};
  font-size: ${theme.FONTSIZE_300};
  height: ${theme.SPACING_600};
  min-width: ${theme.SPACING_600};
  line-height: ${theme.SPACING_600};
  padding: 0 ${theme.SPACING_300};

  &:hover {
    box-shadow: 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    box-shadow: none;
  }

  ${props => props.large && css`
    font-size: ${theme.FONTSIZE_400};
    height: ${theme.SPACING_700};
    min-width: ${theme.SPACING_700};
    line-height: ${theme.SPACING_700};
    padding: 0 ${theme.SPACING_400};
  `}

  ${props => props.white && css` background-color: ${theme.WHITE}; color: ${theme.GRAY_800}; `}
  ${props => props.red && css` background-color: ${theme.RED_500}; `}
  ${props => props.pink && css` background-color: ${theme.PINK_500}; `}
  ${props => props.purple && css` background-color: ${theme.PURPLE_500}; `}
  ${props => props.indigo && css` background-color: ${theme.INDIGO_500}; `}
  ${props => props.blue && css` background-color: ${theme.BLUE_500}; `}
  ${props => props.teal && css` background-color: ${theme.TEAL_500}; `}
  ${props => props.green && css` background-color: ${theme.GREEN_500}; `}
  ${props => props.lime && css` background-color: ${theme.LIME_500}; `}
  ${props => props.yellow && css` background-color: ${theme.YELLOW_500}; `}
  ${props => props.amber && css` background-color: ${theme.AMBER_500}; `}
  ${props => props.orange && css` background-color: ${theme.ORANGE_500}; `}
  ${props => props.crimson && css` background-color: ${theme.CRIMSON_500}; `}
  ${props => props.lavender && css` background-color: ${theme.LAVENDER_500}; `}
  ${props => props.violet && css` background-color: ${theme.VIOLET_500}; `}
`;

export default FlatButton;
