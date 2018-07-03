import React from 'react';
import styled from 'styled-components';
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
          {this.props.children}
        </Dummy>
      </Wrapper>
    )
  }
}

export default ToggleButton;
