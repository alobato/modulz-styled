import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
`;

const Radio = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked ~ div {
    color: ${theme.BLUE_500};
  }

`;

const Dummy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:  ${theme.SPACING_500};
  height: ${theme.SPACING_500};
  color: ${theme.GRAY_500};
`;

export class ToggleButton extends React.Component {
  render () {
    return (
      <Wrapper>
        <Radio
          type="radio"
          name={this.props.name}
          defaultChecked={this.props.checked}
        />
        <Dummy>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor">
            <path d="M0 0H9" transform="translate(4 16.5)" />
            <path d="M0 0H17" transform="translate(4 12.5)" />
            <path d="M0 0H9" transform="translate(4 8.5)" />
          </svg>
        </Dummy>
      </Wrapper>
    )
  }
}

export default ToggleButton;
