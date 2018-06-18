import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Heading = styled.h3`
  font-size: ${theme.FONTSIZE_800};
  color: ${theme.GRAY_800};
  letter-spacing: -.5px;
  line-height: 1.1;
  font-weight: 700;

  ${p => p.small && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.2px;
    line-height: 1.25;
  `}

  ${p => p.thin && css`
    font-size: ${theme.FONTSIZE_600};
    font-weight: 300;
    letter-spacing: .2px;
    line-height: 1.4;
  `}

  ${p => p.large && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.025em;
    line-height: 1;
    font-weight: 900;
  `}

  ${props => props.white && css` color: ${theme.WHITE}; `}
  ${props => props.black && css` color: ${theme.BLACK}; `}

  ${props => props.gray_500 && css` color: ${theme.GRAY_500}; `}

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
  ${props => props.indigoShade && css` color: ${theme.INDIGO_700}; `}
`;

export default Heading;
