import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const GridColumn = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-top: ${theme.SPACING_600};
  padding-left: ${theme.SPACING_600};
  width: 100%;

  ${props => props.stretch && css` align-self: stretch; `}
  ${props => props.center && css` align-self: center; `}
  ${props => props.start && css` align-self: flex-start; `}
  ${props => props.end && css` align-self: flex-end; `}
  ${props => props.baseline && css` align-self: baseline; `}

  ${props => props.column_1 && css` max-width: 8.3333333333%; flex-basis: 8.3333333333%; `}
  ${props => props.column_2 && css` max-width: 16.6666666666%; flex-basis: 16.6666666666%; `}
  ${props => props.column_3 && css` max-width: 25%; flex-basis: 25%; `}
  ${props => props.column_4 && css` max-width: 33.3333333333%; flex-basis: 33.3333333333%; `}
  ${props => props.column_5 && css` max-width: 41.6666666666%; flex-basis: 41.6666666666%; `}
  ${props => props.column_6 && css` max-width: 50%; flex-basis: 50%; `}
  ${props => props.column_7 && css` max-width: 58.3333333333%; flex-basis: 58.3333333333%; `}
  ${props => props.column_8 && css` max-width: 66.6666666666%; flex-basis: 66.6666666666%; `}
  ${props => props.column_9 && css` max-width: 75%; flex-basis: 75%; `}
  ${props => props.column_10 && css` max-width: 83.3333333333%; flex-basis: 83.3333333333%; `}
  ${props => props.column_11 && css` max-width: 91.6666666666%; flex-basis: 91.6666666666%; `}
  ${props => props.column_12 && css` max-width: 100%; flex-basis: 100%; `}

  @media screen and (min-width: ${theme.BREAKPOINT_S}) {
    ${props => props.bps_column_1 && css` max-width: 8.3333333333%; flex-basis: 8.3333333333%; `}
    ${props => props.bps_column_2 && css` max-width: 16.6666666666%; flex-basis: 16.6666666666%; `}
    ${props => props.bps_column_3 && css` max-width: 25%; flex-basis: 25%; `}
    ${props => props.bps_column_4 && css` max-width: 33.3333333333%; flex-basis: 33.3333333333%; `}
    ${props => props.bps_column_5 && css` max-width: 41.6666666666%; flex-basis: 41.6666666666%; `}
    ${props => props.bps_column_6 && css` max-width: 50%; flex-basis: 50%; `}
    ${props => props.bps_column_7 && css` max-width: 58.3333333333%; flex-basis: 58.3333333333%; `}
    ${props => props.bps_column_8 && css` max-width: 66.6666666666%; flex-basis: 66.6666666666%; `}
    ${props => props.bps_column_9 && css` max-width: 75%; flex-basis: 75%; `}
    ${props => props.bps_column_10 && css` max-width: 83.3333333333%; flex-basis: 83.3333333333%; `}
    ${props => props.bps_column_11 && css` max-width: 91.6666666666%; flex-basis: 91.6666666666%; `}
    ${props => props.bps_column_12 && css` max-width: 100%; flex-basis: 100%; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_M}) {
    ${props => props.bpm_column_1 && css` max-width: 8.3333333333%; flex-basis: 8.3333333333%; `}
    ${props => props.bpm_column_2 && css` max-width: 16.6666666666%; flex-basis: 16.6666666666%; `}
    ${props => props.bpm_column_3 && css` max-width: 25%; flex-basis: 25%; `}
    ${props => props.bpm_column_4 && css` max-width: 33.3333333333%; flex-basis: 33.3333333333%; `}
    ${props => props.bpm_column_5 && css` max-width: 41.6666666666%; flex-basis: 41.6666666666%; `}
    ${props => props.bpm_column_6 && css` max-width: 50%; flex-basis: 50%; `}
    ${props => props.bpm_column_7 && css` max-width: 58.3333333333%; flex-basis: 58.3333333333%; `}
    ${props => props.bpm_column_8 && css` max-width: 66.6666666666%; flex-basis: 66.6666666666%; `}
    ${props => props.bpm_column_9 && css` max-width: 75%; flex-basis: 75%; `}
    ${props => props.bpm_column_10 && css` max-width: 83.3333333333%; flex-basis: 83.3333333333%; `}
    ${props => props.bpm_column_11 && css` max-width: 91.6666666666%; flex-basis: 91.6666666666%; `}
    ${props => props.bpm_column_12 && css` max-width: 100%; flex-basis: 100%; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_L}) {
    ${props => props.bpl_column_1 && css` max-width: 8.3333333333%; flex-basis: 8.3333333333%; `}
    ${props => props.bpl_column_2 && css` max-width: 16.6666666666%; flex-basis: 16.6666666666%; `}
    ${props => props.bpl_column_3 && css` max-width: 25%; flex-basis: 25%; `}
    ${props => props.bpl_column_4 && css` max-width: 33.3333333333%; flex-basis: 33.3333333333%; `}
    ${props => props.bpl_column_5 && css` max-width: 41.6666666666%; flex-basis: 41.6666666666%; `}
    ${props => props.bpl_column_6 && css` max-width: 50%; flex-basis: 50%; `}
    ${props => props.bpl_column_7 && css` max-width: 58.3333333333%; flex-basis: 58.3333333333%; `}
    ${props => props.bpl_column_8 && css` max-width: 66.6666666666%; flex-basis: 66.6666666666%; `}
    ${props => props.bpl_column_9 && css` max-width: 75%; flex-basis: 75%; `}
    ${props => props.bpl_column_10 && css` max-width: 83.3333333333%; flex-basis: 83.3333333333%; `}
    ${props => props.bpl_column_11 && css` max-width: 91.6666666666%; flex-basis: 91.6666666666%; `}
    ${props => props.bpl_column_12 && css` max-width: 100%; flex-basis: 100%; `}
  }

  @media screen and (min-width: ${theme.BREAKPOINT_XL}) {
    ${props => props.bpxl_column_1 && css` max-width: 8.3333333333%; flex-basis: 8.3333333333%; `}
    ${props => props.bpxl_column_2 && css` max-width: 16.6666666666%; flex-basis: 16.6666666666%; `}
    ${props => props.bpxl_column_3 && css` max-width: 25%; flex-basis: 25%; `}
    ${props => props.bpxl_column_4 && css` max-width: 33.3333333333%; flex-basis: 33.3333333333%; `}
    ${props => props.bpxl_column_5 && css` max-width: 41.6666666666%; flex-basis: 41.6666666666%; `}
    ${props => props.bpxl_column_6 && css` max-width: 50%; flex-basis: 50%; `}
    ${props => props.bpxl_column_7 && css` max-width: 58.3333333333%; flex-basis: 58.3333333333%; `}
    ${props => props.bpxl_column_8 && css` max-width: 66.6666666666%; flex-basis: 66.6666666666%; `}
    ${props => props.bpxl_column_9 && css` max-width: 75%; flex-basis: 75%; `}
    ${props => props.bpxl_column_10 && css` max-width: 83.3333333333%; flex-basis: 83.3333333333%; `}
    ${props => props.bpxl_column_11 && css` max-width: 91.6666666666%; flex-basis: 91.6666666666%; `}
    ${props => props.bpxl_column_12 && css` max-width: 100%; flex-basis: 100%; `}
  }
`;

export default GridColumn;
