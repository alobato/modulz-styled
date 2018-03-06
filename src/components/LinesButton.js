import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const LinesButton = styled.button`
  position: relative;
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
  transition-duration: 100ms;
  transition-timing-function: ease;

  z-index: 0;
  border-radius: 0;
  font-size: ${palette.FONTSIZE_300};
  height: ${palette.SPACING_600};
  min-width: ${palette.SPACING_600};
  line-height: ${palette.SPACING_600};
  padding: 0 ${palette.SPACING_400};
  background-color: transparent;
  color: ${palette.BLACK};

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${palette.WHITE};
    box-shadow: inset 0 0 0 1px ${palette.BLUE_300};
    transition-property: all;
    transition-duration: 100ms;
    transition-timing-function: ease;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 6px;
    left: 6px;
    z-index: -2;
    background-image: repeating-linear-gradient(
      -45deg,
      ${palette.BLUE_500},
      ${palette.BLUE_500} 1px,
      transparent 1px,
      transparent 6px
    );
  }

  &:hover::before {
    box-shadow: inset 0 0 0 1px ${palette.BLUE_500};
  }

  &:active {
    transform: translate(1px, 1px);
  }

  &:active::after {
    transform: translate(-6px, -6px);
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
    background-color: ${palette.BLUE_100};
    color: ${palette.BLUE_700};
    box-shadow: 0 0 0 1px hsl(348, 70%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%);
    }
  `}
`;

export default LinesButton;
