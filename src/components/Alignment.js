import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Alignment = styled.div`
  ${props => props.left && css` text-align: left; `}
  ${props => props.center && css` text-align: center; `}
  ${props => props.right && css` text-align: right; `}

  @media screen and (min-width: ${palette.BREAKPOINT_S}) {
    ${props => props.bps_left && css` text-align: left; `}
    ${props => props.bps_center && css` text-align: center; `}
    ${props => props.bps_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${palette.BREAKPOINT_M}) {
    ${props => props.bpm_left && css` text-align: left; `}
    ${props => props.bpm_center && css` text-align: center; `}
    ${props => props.bpm_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${palette.BREAKPOINT_L}) {
    ${props => props.bpl_left && css` text-align: left; `}
    ${props => props.bpl_center && css` text-align: center; `}
    ${props => props.bpl_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${palette.BREAKPOINT_XL}) {
    ${props => props.bpxl_left && css` text-align: left; `}
    ${props => props.bpxl_center && css` text-align: center; `}
    ${props => props.bpxl_right && css` text-align: right; `}
  }
`;

export default Alignment;
