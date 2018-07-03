import styled from 'styled-components';
import * as theme from './../theme/';

const Slider = styled.input`
  appearance: none;
  display: block;
  padding: var(--spacing-100) 0;
  width: 100%;
  cursor: pointer;
  vertical-align: middle;
  background: transparent;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: ${theme.GRAY_300};
    border-radius: 9999px;
    border: none;
  }

  &::-webkit-slider-thumb {
    box-shadow: inset 0 0 0 1px ${theme.GRAY_400};
    border: none;
    height: ${theme.SPACING_300};
    width: ${theme.SPACING_300};
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    appearance: none;
    margin-top: -6px;
    transition: transform 100ms ease;
  }

  &:focus {
    outline: none;

    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${theme.BLUE_500};
    }
  }
`;

export default Slider;
