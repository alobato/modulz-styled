import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Section = styled.section`
  display: flex;
  background-color: ${theme.WHITE};

  ${props => props.small && css`
      padding: ${theme.SPACING_300} 0;
  `}

  ${props => props.medium && css`
      padding: ${theme.SPACING_600} 0;
  `}

  ${props => props.large && css`
      padding: ${theme.SPACING_900} 0;
  `}

  ${props => props.h90 && css`
      height: 90vh;
      align-items: center;
  `}

  ${props => props.gray_100 && css` background-color: ${theme.GRAY_100}; `}
  ${props => props.gray_200 && css` background-color: ${theme.GRAY_200}; `}
  ${props => props.gray_700 && css` background-color: ${theme.GRAY_700}; `}
  ${props => props.gray_800 && css` background-color: ${theme.GRAY_800}; `}
  ${props => props.gray_900 && css` background-color: ${theme.GRAY_900}; `}

  ${props => props.red && css` background-color: ${theme.RED_500}; `}
  ${props => props.pink && css` background-color: ${theme.PINK_500}; `}
  ${props => props.purple && css` background-color: ${theme.PURPLE_500}; `}
  ${props => props.indigo && css` background-color: ${theme.INDIGO_500}; `}
  ${props => props.blue && css` background-color: ${theme.BLUE_500}; `}
  ${props => props.teal && css` background-color: ${theme.TEAL_500}; `}
  ${props => props.cyan && css` background-color: ${theme.CYAN_500}; `}
  ${props => props.green && css` background-color: ${theme.GREEN_500}; `}
  ${props => props.lime && css` background-color: ${theme.LIME_500}; `}
  ${props => props.yellow && css` background-color: ${theme.YELLOW_500}; `}
  ${props => props.amber && css` background-color: ${theme.AMBER_500}; `}
  ${props => props.orange && css` background-color: ${theme.ORANGE_500}; `}
  ${props => props.crimson && css` background-color: ${theme.CRIMSON_500}; `}
  ${props => props.lavender && css` background-color: ${theme.LAVENDER_500}; `}
  ${props => props.violet && css` background-color: ${theme.VIOLET_500}; `}

  ${props => props.redTint && css` background-color: ${theme.RED_100}; `}
  ${props => props.pinkTint && css` background-color: ${theme.PINK_100}; `}
  ${props => props.purpleTint && css` background-color: ${theme.PURPLE_100}; `}
  ${props => props.indigoTint && css` background-color: ${theme.INDIGO_100}; `}
  ${props => props.blueTint && css` background-color: ${theme.BLUE_100}; `}
  ${props => props.tealTint && css` background-color: ${theme.TEAL_100}; `}
  ${props => props.greenTint && css` background-color: ${theme.GREEN_100}; `}
  ${props => props.limeTint && css` background-color: ${theme.LIME_100}; `}
  ${props => props.yellowTint && css` background-color: ${theme.YELLOW_100}; `}
  ${props => props.amberTint && css` background-color: ${theme.AMBER_100}; `}
  ${props => props.orangeTint && css` background-color: ${theme.ORANGE_100}; `}
  ${props => props.crimsonTint && css` background-color: ${theme.CRIMSON_100}; `}
  ${props => props.lavenderTint && css` background-color: ${theme.LAVENDER_100}; `}
  ${props => props.violetTint && css` background-color: ${theme.VIOLET_100}; `}

  ${props => props.purpleShade && css` background-color: ${theme.PURPLE_900}; `}
  ${props => props.violetShade && css` background-color: ${theme.VIOLET_900}; `}
`;

export default Section;
