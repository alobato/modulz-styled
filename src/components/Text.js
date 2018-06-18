import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Text = styled.p`
  font-size: ${theme.FONTSIZE_400};
  color: ${theme.GRAY_800};
  letter-spacing: .14px;
  line-height: 1.6;

  ${props => props.small && css`
    font-size: ${theme.FONTSIZE_200};
  `}

  ${props => props.large && css`
    font-size: ${theme.FONTSIZE_500};
  `}

  ${props => props.gray_500 && css` color: ${theme.GRAY_500}; `}

  ${props => props.white && css` color: ${theme.WHITE}; `}
  ${props => props.red && css` color: ${theme.RED_500}; `}
  ${props => props.pink && css` color: ${theme.PINK_500}; `}
  ${props => props.purple && css` color: ${theme.PURPLE_500}; `}
  ${props => props.indigo && css` color: ${theme.INDIGO_500}; `}
  ${props => props.blue && css` color: ${theme.BLUE_500}; `}
  ${props => props.teal && css` color: ${theme.TEAL_500}; `}
  ${props => props.green && css` color: ${theme.GREEN_500}; `}
  ${props => props.lime && css` color: ${theme.LIME_500}; `}
  ${props => props.yellow && css` color: ${theme.YELLOW_500}; `}
  ${props => props.amber && css` color: ${theme.AMBER_500}; `}
  ${props => props.orange && css` color: ${theme.ORANGE_500}; `}
  ${props => props.crimson && css` color: ${theme.CRIMSON_500}; `}
  ${props => props.lavender && css` color: ${theme.LAVENDER_500}; `}
  ${props => props.violet && css` color: ${theme.VIOLET_500}; `}

  ${props => props.redTint && css` color: ${theme.RED_300}; `}
  ${props => props.pinkTint && css` color: ${theme.PINK_300}; `}
  ${props => props.purpleTint && css` color: ${theme.PURPLE_300}; `}
  ${props => props.indigoTint && css` color: ${theme.INDIGO_300}; `}
  ${props => props.blueTint && css` color: ${theme.BLUE_300}; `}
  ${props => props.tealTint && css` color: ${theme.TEAL_300}; `}
  ${props => props.greenTint && css` color: ${theme.GREEN_300}; `}
  ${props => props.limeTint && css` color: ${theme.LIME_300}; `}
  ${props => props.yellowTint && css` color: ${theme.YELLOW_300}; `}
  ${props => props.amberTint && css` color: ${theme.AMBER_300}; `}
  ${props => props.orangeTint && css` color: ${theme.ORANGE_300}; `}
  ${props => props.crimsonTint && css` color: ${theme.CRIMSON_300}; `}
  ${props => props.lavenderTint && css` color: ${theme.LAVENDER_300}; `}
  ${props => props.violetTint && css` color: ${theme.VIOLET_300}; `}

  ${props => props.redShade && css` color: ${theme.RED_700}; `}
  ${props => props.pinkShade && css` color: ${theme.PINK_700}; `}
  ${props => props.purpleShade && css` color: ${theme.PURPLE_700}; `}
  ${props => props.indigoShade && css` color: ${theme.INDIGO_700}; `}
  ${props => props.blueShade && css` color: ${theme.BLUE_700}; `}
  ${props => props.tealShade && css` color: ${theme.TEAL_700}; `}
  ${props => props.greenShade && css` color: ${theme.GREEN_700}; `}
  ${props => props.limeShade && css` color: ${theme.LIME_700}; `}
  ${props => props.yellowShade && css` color: ${theme.YELLOW_700}; `}
  ${props => props.amberShade && css` color: ${theme.AMBER_700}; `}
  ${props => props.orangeShade && css` color: ${theme.ORANGE_700}; `}
  ${props => props.crimsonShade && css` color: ${theme.CRIMSON_700}; `}
  ${props => props.lavenderShade && css` color: ${theme.LAVENDER_700}; `}
  ${props => props.violetShade && css` color: ${theme.VIOLET_700}; `}
`;

export default Text;
