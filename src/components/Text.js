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

  ${props => props.redTint && css` color: ${palette.RED_300}; `}
  ${props => props.pinkTint && css` color: ${palette.PINK_300}; `}
  ${props => props.purpleTint && css` color: ${palette.PURPLE_300}; `}
  ${props => props.indigoTint && css` color: ${palette.INDIGO_300}; `}
  ${props => props.blueTint && css` color: ${palette.BLUE_300}; `}
  ${props => props.tealTint && css` color: ${palette.TEAL_300}; `}
  ${props => props.greenTint && css` color: ${palette.GREEN_300}; `}
  ${props => props.limeTint && css` color: ${palette.LIME_300}; `}
  ${props => props.yellowTint && css` color: ${palette.YELLOW_300}; `}
  ${props => props.amberTint && css` color: ${palette.AMBER_300}; `}
  ${props => props.orangeTint && css` color: ${palette.ORANGE_300}; `}
  ${props => props.crimsonTint && css` color: ${palette.CRIMSON_300}; `}
  ${props => props.lavenderTint && css` color: ${palette.LAVENDER_300}; `}
  ${props => props.violetTint && css` color: ${palette.VIOLET_300}; `}

  ${props => props.redShade && css` color: ${palette.RED_700}; `}
  ${props => props.pinkShade && css` color: ${palette.PINK_700}; `}
  ${props => props.purpleShade && css` color: ${palette.PURPLE_700}; `}
  ${props => props.indigoShade && css` color: ${palette.INDIGO_700}; `}
  ${props => props.blueShade && css` color: ${palette.BLUE_700}; `}
  ${props => props.tealShade && css` color: ${palette.TEAL_700}; `}
  ${props => props.greenShade && css` color: ${palette.GREEN_700}; `}
  ${props => props.limeShade && css` color: ${palette.LIME_700}; `}
  ${props => props.yellowShade && css` color: ${palette.YELLOW_700}; `}
  ${props => props.amberShade && css` color: ${palette.AMBER_700}; `}
  ${props => props.orangeShade && css` color: ${palette.ORANGE_700}; `}
  ${props => props.crimsonShade && css` color: ${palette.CRIMSON_700}; `}
  ${props => props.lavenderShade && css` color: ${palette.LAVENDER_700}; `}
  ${props => props.violetShade && css` color: ${palette.VIOLET_700}; `}
`;

export default Text;
