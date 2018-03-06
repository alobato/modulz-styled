import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const RectangleButton = styled.button`
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

  border-radius: 0;
  color: ${palette.WHITE};
  font-size: ${palette.FONTSIZE_300};
  height: ${palette.SPACING_600};
  min-width: ${palette.SPACING_600};
  line-height: ${palette.SPACING_600};
  padding: 0 ${palette.SPACING_300};

  &:hover {

  }

  &:active {
    box-shadow: none;
  }

  ${props => props.large && css`
    font-size: ${palette.FONTSIZE_400};
    height: ${palette.SPACING_700};
    min-width: ${palette.SPACING_700};
    line-height: ${palette.SPACING_700};
    padding: 0 ${palette.SPACING_400};
  `}

  ${props => props.white && css` background-color: ${palette.WHITE}; color: ${palette.GRAY_800}; `}
  ${props => props.red && css` background-color: ${palette.RED_500}; `}
  ${props => props.pink && css` background-color: ${palette.PINK_500}; `}
  ${props => props.purple && css` background-color: ${palette.PURPLE_500}; `}
  ${props => props.indigo && css` background-color: ${palette.INDIGO_500}; `}
  ${props => props.blue && css` background-color: ${palette.BLUE_500}; `}
  ${props => props.teal && css` background-color: ${palette.TEAL_500}; `}
  ${props => props.green && css` background-color: ${palette.GREEN_500}; `}
  ${props => props.lime && css` background-color:${palette.LIME_500}; `}
  ${props => props.yellow && css` background-color:${palette.YELLOW_500}; `}
  ${props => props.amber && css` background-color: ${palette.AMBER_500}; `}
  ${props => props.orange && css` background-color: ${palette.ORANGE_500}; `}
  ${props => props.crimson && css` background-color: ${palette.CRIMSON_500}; `}
  ${props => props.lavender && css` background-color: ${palette.LAVENDER_500}; `}
  ${props => props.violet && css` background-color: ${palette.VIOLET_500}; `}
`;

export default RectangleButton;
