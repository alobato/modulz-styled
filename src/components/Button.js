import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Button = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${theme.GRAY_100};
  box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
  border: none;
  border-radius: ${theme.BORDERRADIUS_100};
  color: ${theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: 'UntitledSans-Medium';
  font-size: ${theme.FONTSIZE_200};
  font-weight: 400;
  height: ${theme.SPACING_500};
  justify-content: center;
  line-height: 1;
  min-width: ${theme.SPACING_500};
  outline: none;
  padding: 0 ${theme.SPACING_200};
  pointer-events: auto;
  text-align: center;
  text-decoration: none;
  transition-property: all;
  transition-duration: 80ms;
  transition-timing-function: ease;
  user-select: none;
  white-space: nowrap;

  &:hover {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  &:active {
    background-color: ${theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_500};
  }

  &:disabled {
    background-color: ${theme.GRAY_200};
    color: ${theme.GRAY_500};
    box-shadow: inset 0 0 0 1px ${theme.GRAY_300};
    cursor: not-allowed;
  }

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_300};
    height: ${theme.SPACING_600};
    padding: 0 ${theme.SPACING_300};
  `}

  ${p => p.blue && css`
    background-color: ${theme.BLUE_100};
    color: ${theme.BLUE_600};
    box-shadow: inset 0 0 0 1px ${theme.BLUE_300};

    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_400};
    }

    &:active {
      background-color: ${theme.BLUE_200};
      box-shadow: inset 0 0 0 1px ${theme.BLUE_400};
    }
  `}

  ${p => p.green && css`
    background-color: ${theme.GREEN_100};
    color: ${theme.GREEN_600};
    box-shadow: inset 0 0 0 1px ${theme.GREEN_300};

    &:hover,
    &:active {
      box-shadow: inset 0 0 0 1px ${theme.GREEN_400};
    }

    &:active {
      background-color: ${theme.GREEN_200};
      box-shadow: inset 0 0 0 1px ${theme.GREEN_400};
    }
  `}

  ${p => p.red && css`
    background-color: ${theme.RED_100};
    color: ${theme.RED_600};
    box-shadow: inset 0 0 0 1px ${theme.RED_300};

    &:hover,
    &:active {
      box-shadow: inset 0 0 0 1px ${theme.RED_400};
    }

    &:active {
      background-color: ${theme.RED_200};
      box-shadow: inset 0 0 0 1px ${theme.RED_400};
    }
  `}

  ${p => p.active && css`
    background-color: ${theme.GRAY_300};
    color: ${theme.GRAY_600};
    box-shadow: inset 0 1px 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px ${theme.GRAY_400};
    &:hover,
    &:active {
      box-shadow: inset 0 1px 1px 0 rgba(0,0,0,.1), inset 0 0 0 1px ${theme.GRAY_500};
    }
  `}

  ${p => p.left && css`
    border-radius: ${theme.BORDERRADIUS_100} 0 0 ${theme.BORDERRADIUS_100};
    z-index: 1;
    &:hover {
      z-index: 1;
    }
  `}

  ${p => p.middle && css`
    border-radius: 0;
    margin-left: -1px;
    &:hover {
      z-index: 1;
    }
  `}

  ${p => p.right && css`
    border-radius: 0 ${theme.BORDERRADIUS_100} ${theme.BORDERRADIUS_100} 0;
    margin-left: -1px;
  `}
`;

export default Button;
