import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Alignment = styled.div`
  ${props => props.left && css` text-align: left; `}
  ${props => props.center && css` text-align: center; `}
  ${props => props.right && css` text-align: right; `}

  @media screen and (min-width: ${theme.BREAKPOINT_100}) {
    ${props => props.bps_left && css` text-align: left; `}
    ${props => props.bps_center && css` text-align: center; `}
    ${props => props.bps_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_200}) {
    ${props => props.bpm_left && css` text-align: left; `}
    ${props => props.bpm_center && css` text-align: center; `}
    ${props => props.bpm_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_300}) {
    ${props => props.bpl_left && css` text-align: left; `}
    ${props => props.bpl_center && css` text-align: center; `}
    ${props => props.bpl_right && css` text-align: right; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_400}) {
    ${props => props.bpxl_left && css` text-align: left; `}
    ${props => props.bpxl_center && css` text-align: center; `}
    ${props => props.bpxl_right && css` text-align: right; `}
  }
`;

export default Alignment;
