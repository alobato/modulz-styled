import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${palette.SPACING_600};
  margin-left: -${palette.SPACING_600};

  ${props => props.stretch && css` align-items: stretch; `}
  ${props => props.vcenter && css` align-items: center; `}
  ${props => props.vflexEnd && css` align-items: flex-end; `}

  ${props => props.hcenter && css` justify-content: center; `}
  ${props => props.hflexEnd && css` justify-content: flexEnd; `}
  ${props => props.around && css` justify-content: space-around; `}
  ${props => props.between && css` justify-content: space-between; `}

  & > .grid-column {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding-top: ${palette.SPACING_600};
    padding-left: ${palette.SPACING_600};
    width: 100%;
  }

  & > .grid-column--1              { max-width: 8.3333333333%; flex-basis: 8.3333333333%; }
  & > .grid-column--2              { max-width: 16.6666666666%; flex-basis: 16.6666666666%; }
  & > .grid-column--3              { max-width: 25%; flex-basis: 25%; }
  & > .grid-column--4              { max-width: 33.3333333333%; flex-basis: 33.3333333333%; }
  & > .grid-column--5              { max-width: 41.6666666666%; flex-basis: 41.6666666666%; }
  & > .grid-column--6              { max-width: 50%; flex-basis: 50%; }
  & > .grid-column--7              { max-width: 58.3333333333%; flex-basis: 58.3333333333%; }
  & > .grid-column--8              { max-width: 66.6666666666%; flex-basis: 66.6666666666%; }
  & > .grid-column--9              { max-width: 75%; flex-basis: 75%; }
  & > .grid-column--10            { max-width: 83.3333333333%; flex-basis: 83.3333333333%; }
  & > .grid-column--11            { max-width: 91.6666666666%; flex-basis: 91.6666666666%; }
  & > .grid-column--12            { max-width: 100%; flex-basis: 100%; }

  @media screen and (min-width: ${palette.BREAKPOINT_S}) {
    .bps-grid-column--1      { max-width: 8.3333333333%; flex-basis: 8.3333333333%; }
    .bps-grid-column--2      { max-width: 16.6666666666%; flex-basis: 16.6666666666%; }
    .bps-grid-column--3      { max-width: 25%; flex-basis: 25%; }
    .bps-grid-column--4      { max-width: 33.3333333333%; flex-basis: 33.3333333333%; }
    .bps-grid-column--5      { max-width: 41.6666666666%; flex-basis: 41.6666666666%; }
    .bps-grid-column--6      { max-width: 50%; flex-basis: 50%; }
    .bps-grid-column--7      { max-width: 58.3333333333%; flex-basis: 58.3333333333%; }
    .bps-grid-column--8      { max-width: 66.6666666666%; flex-basis: 66.6666666666%; }
    .bps-grid-column--9      { max-width: 75%; flex-basis: 75%; }
    .bps-grid-column--10     { max-width: 83.3333333333%; flex-basis: 83.3333333333%; }
    .bps-grid-column--11     { max-width: 91.6666666666%; flex-basis: 91.6666666666%; }
    .bps-grid-column--12     { max-width: 100%; flex-basis: 100%; }
  }

  @media screen and (min-width: ${palette.BREAKPOINT_M}) {
    .bpm-grid-column--1      { max-width: 8.3333333333%; flex-basis: 8.3333333333%; }
    .bpm-grid-column--2      { max-width: 16.6666666666%; flex-basis: 16.6666666666%; }
    .bpm-grid-column--3      { max-width: 25%; flex-basis: 25%; }
    .bpm-grid-column--4      { max-width: 33.3333333333%; flex-basis: 33.3333333333%; }
    .bpm-grid-column--5      { max-width: 41.6666666666%; flex-basis: 41.6666666666%; }
    .bpm-grid-column--6      { max-width: 50%; flex-basis: 50%; }
    .bpm-grid-column--7      { max-width: 58.3333333333%; flex-basis: 58.3333333333%; }
    .bpm-grid-column--8      { max-width: 66.6666666666%; flex-basis: 66.6666666666%; }
    .bpm-grid-column--9      { max-width: 75%; flex-basis: 75%; }
    .bpm-grid-column--10     { max-width: 83.3333333333%; flex-basis: 83.3333333333%; }
    .bpm-grid-column--11     { max-width: 91.6666666666%; flex-basis: 91.6666666666%; }
    .bpm-grid-column--12     { max-width: 100%; flex-basis: 100%; }
  }

  @media screen and (min-width: ${palette.BREAKPOINT_L}) {
    .bpl-grid-column--1      { max-width: 8.3333333333%; flex-basis: 8.3333333333%; }
    .bpl-grid-column--2      { max-width: 16.6666666666%; flex-basis: 16.6666666666%; }
    .bpl-grid-column--3      { max-width: 25%; flex-basis: 25%; }
    .bpl-grid-column--4      { max-width: 33.3333333333%; flex-basis: 33.3333333333%; }
    .bpl-grid-column--5      { max-width: 41.6666666666%; flex-basis: 41.6666666666%; }
    .bpl-grid-column--6      { max-width: 50%; flex-basis: 50%; }
    .bpl-grid-column--7      { max-width: 58.3333333333%; flex-basis: 58.3333333333%; }
    .bpl-grid-column--8      { max-width: 66.6666666666%; flex-basis: 66.6666666666%; }
    .bpl-grid-column--9      { max-width: 75%; flex-basis: 75%; }
    .bpl-grid-column--10     { max-width: 83.3333333333%; flex-basis: 83.3333333333%; }
    .bpl-grid-column--11     { max-width: 91.6666666666%; flex-basis: 91.6666666666%; }
    .bpl-grid-column--12     { max-width: 100%; flex-basis: 100%; }
  }

  @media screen and (min-width: ${palette.BREAKPOINT_XL}) {
    .bpxl-grid-column--1     { max-width: 8.3333333333%; flex-basis: 8.3333333333%; }
    .bpxl-grid-column--2     { max-width: 16.6666666666%; flex-basis: 16.6666666666%; }
    .bpxl-grid-column--3     { max-width: 25%; flex-basis: 25%; }
    .bpxl-grid-column--4     { max-width: 33.3333333333%; flex-basis: 33.3333333333%; }
    .bpxl-grid-column--5     { max-width: 41.6666666666%; flex-basis: 41.6666666666%; }
    .bpxl-grid-column--6     { max-width: 50%; flex-basis: 50%; }
    .bpxl-grid-column--7     { max-width: 58.3333333333%; flex-basis: 58.3333333333%; }
    .bpxl-grid-column--8     { max-width: 66.6666666666%; flex-basis: 66.6666666666%; }
    .bpxl-grid-column--9     { max-width: 75%; flex-basis: 75%; }
    .bpxl-grid-column--10    { max-width: 83.3333333333%; flex-basis: 83.3333333333%; }
    .bpxl-grid-column--11    { max-width: 91.6666666666%; flex-basis: 91.6666666666%; }
    .bpxl-grid-column--12    { max-width: 100%; flex-basis: 100%; }
  }
`;

export default Grid;
