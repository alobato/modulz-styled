import React, { Component } from 'react';
import { css } from 'styled-components';
import * as theme from './../theme/';
import ListItem from './ListItem.js';

const Link = ListItem.withComponent('a');

const InteractiveListItem = Link.extend`
  cursor: pointer;
  transition-property: all;
  transition-duration: 80ms;
  transition-timing-function: linear;
  user-select: none;

  &:hover,
  &:focus {
    background-color: ${theme.GRAY_200};
  }

  &:active {
    background-color: ${theme.GRAY_300};
  }

  ${props => props.rounded && css`
    border-radius: ${theme.BORDERRADIUS_200};
  `}
`;

class LinkItem extends Component {
  render() {
    return (
      <li>
        <InteractiveListItem
          href={this.props.href}
          target={this.props.target}>
          {this.props.children}
        </InteractiveListItem>
      </li>
    )
  }
}

export default LinkItem;
