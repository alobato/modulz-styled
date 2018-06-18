import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const OffsetButton = styled.button`
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
  font-size: ${theme.FONTSIZE_300};
  height: ${theme.SPACING_600};
  min-width: ${theme.SPACING_600};
  line-height: ${theme.SPACING_600};
  padding: 0 ${theme.SPACING_400};
  background-color: transparent;
  color: ${theme.BLUE_700};

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
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
    background-color: ${theme.BLUE_100};
    z-index: -2;
  }

  &:hover::before {
    box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
  }

  &:active {
    transform: translate(1px, 1px);
  }

  &:active::after {
    transform: translate(-6px, -6px);
  }

  ${p => p.small && css`
    font-size: ${theme.FONTSIZE_100};
    height: ${theme.SPACING_400};
    min-width: ${theme.SPACING_400};
    line-height: ${theme.SPACING_400};
  `}

  ${p => p.primary && css`
    background-color: ${theme.BLUE_100};
    color: ${theme.BLUE_700};
    box-shadow: 0 0 0 1px ${theme.BLUE_300}, 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px ${theme.BLUE_500}, 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px ${theme.BLUE_500};
    }
  `}

  ${p => p.positive && css`
    background-color: ${theme.GREEN_100};
    color: ${theme.GREEN_700};
    box-shadow: 0 0 0 1px hsl(138, 50%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%);
    }
  `}

  ${p => p.negative && css`
    background-color: ${theme.BLUE_100};
    color: ${theme.BLUE_700};
    box-shadow: 0 0 0 1px hsl(348, 70%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%);
    }
  `}
`;

export default OffsetButton;
