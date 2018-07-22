import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Wrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  user-select: none;
`;

const Checkbox = styled.input`
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
  width:  ${theme.SPACING_300};
  height: ${theme.SPACING_300};
  color: ${theme.GRAY_600};

  &:hover {
    color: ${theme.GRAY_600};
  }

  ${props => props.blue && css`
    color: ${theme.GRAY_500};
  `}

  ${props => props.green && css`
    color: ${theme.GREEN_500};
  `}

  ${props => props.yellow && css`
    color: ${theme.YELLOW_500};
  `}

  ${props => props.red && css`
    color: ${theme.RED_500};
  `}

  ${props => props.size2 && css`
    width:  ${theme.SPACING_500};
    height: ${theme.SPACING_500};
  `}
`;

export class CheckboxButton extends React.Component {
  render () {
    return (
      <Wrapper
        size={this.props.size}>
        <Checkbox
          type="checkbox"
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

export default CheckboxButton;
