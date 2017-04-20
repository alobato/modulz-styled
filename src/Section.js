import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'
import * as palette from './Palette.js';

const Section = styled.section`
  background-color: ${palette.COLOR_WHITE};

  ${props => props.small && css`
      padding: ${palette.SPACING_300} 0;
  `}

  ${props => props.medium && css`
      padding: ${palette.SPACING_600} 0;
  `}

  ${props => props.large && css`
      padding: ${palette.SPACING_900} 0;
  `}

  ${props => props.h90 && css`
      height: 90vh;
  `}

  ${props => props.gray_100 && css` background-color: ${palette.GRAY_100}; `}
  ${props => props.gray_200 && css` background-color: ${palette.GRAY_200}; `}
  ${props => props.gray_700 && css` background-color: ${palette.GRAY_700}; `}
  ${props => props.gray_800 && css` background-color: ${palette.GRAY_800}; `}

  ${props => props.red && css` background-color ${palette.RED_500}; `}
  ${props => props.pink && css` background-color: ${palette.PINK_500}; `}
  ${props => props.purple && css` background-color: ${palette.PURPLE_500}; `}
  ${props => props.indigo && css` background-color: ${palette.INDIGO_500}; `}
  ${props => props.blue && css` background-color: ${palette.BLUE_500}; `}
  ${props => props.teal && css` background-color: ${palette.TEAL_500}; `}
  ${props => props.green && css` background-color: ${palette.GREEN_500}; `}
  ${props => props.lime && css` background-color:${palette.LIME_500}; `}
  ${props => props.yellow && css` background-color:${palette.YELLOW_500}; `}
  ${props => props.amber && css` background-color: ${palette.AMBER_500}; `}
  ${props => props.orange && css` background-color: ${palette.ORANGE_500}; `}
  ${props => props.crimson && css` background-color: ${palette.CRIMSON_500}; `}
  ${props => props.lavender && css` background-color: ${palette.LAVENDER_500}; `}
  ${props => props.violet && css` background-color: ${palette.VIOLET_500}; `}
`;

export default Section;
