import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './Palette.js';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  user-select: none;
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

  border-radius: ${palette.BORDERRADIUS_S};
  font-size: ${palette.FONTSIZE_300};
  height: ${palette.SPACING_500};
  min-width: ${palette.SPACING_500};
  line-height: ${palette.SPACING_500};
  padding: 0 ${palette.SPACING_200};
  background-color: ${palette.GRAY_100};
  color: ${palette.GRAY_800};
  box-shadow: 0 0 0 1px ${palette.GRAY_400}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 0 1px ${palette.GRAY_500}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 1px ${palette.GRAY_500};
  }

  ${p => p.small && css`
    font-size: ${palette.FONTSIZE_100};
    height: ${palette.SPACING_400};
    min-width: ${palette.SPACING_400};
    line-height: ${palette.SPACING_400};
  `}

  ${p => p.primary && css`
    background-color: ${palette.BLUE_100};
    color: ${palette.BLUE_700};
    box-shadow: 0 0 0 1px ${palette.BLUE_300}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px ${palette.BLUE_500}, 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px ${palette.BLUE_500};
    }
  `}

  ${p => p.positive && css`
    background-color: ${palette.GREEN_100};
    color: ${palette.GREEN_700};
    box-shadow: 0 0 0 1px hsl(138, 50%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%);
    }
  `}

  ${p => p.negative && css`
    background-color: ${palette.RED_100};
    color: ${palette.RED_700};
    box-shadow: 0 0 0 1px hsl(348, 70%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%);
    }
  `}
`;

export default Button;
