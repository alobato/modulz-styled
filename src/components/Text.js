import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Text = styled.p`
  font-size: ${palette.FONTSIZE_400};
  color: ${palette.GRAY_800};
  letter-spacing: .14px;
  line-height: 1.6;

  ${props => props.small && css`
    font-size: ${palette.FONTSIZE_200};
  `}

  ${props => props.large && css`
    font-size: ${palette.FONTSIZE_500};
  `}

  ${props => props.gray_500 && css` color: ${palette.GRAY_500}; `}

  ${props => props.white && css` color: ${palette.WHITE}; `}
  ${props => props.red && css` color: ${palette.RED_500}; `}
  ${props => props.pink && css` color: ${palette.PINK_500}; `}
  ${props => props.purple && css` color: ${palette.PURPLE_500}; `}
  ${props => props.indigo && css` color: ${palette.INDIGO_500}; `}
  ${props => props.blue && css` color: ${palette.BLUE_500}; `}
  ${props => props.teal && css` color: ${palette.TEAL_500}; `}
  ${props => props.green && css` color: ${palette.GREEN_500}; `}
  ${props => props.lime && css` color: ${palette.LIME_500}; `}
  ${props => props.yellow && css` color: ${palette.YELLOW_500}; `}
  ${props => props.amber && css` color: ${palette.AMBER_500}; `}
  ${props => props.orange && css` color: ${palette.ORANGE_500}; `}
  ${props => props.crimson && css` color: ${palette.CRIMSON_500}; `}
  ${props => props.lavender && css` color: ${palette.LAVENDER_500}; `}
  ${props => props.violet && css` color: ${palette.VIOLET_500}; `}
`;

export default Text;
