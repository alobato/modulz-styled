import React from 'react';
import styled, { css } from 'styled-components';

const Alignment = styled.div`
  ${props => props.left && css` text-align: left; `}
  ${props => props.center && css` text-align: center; `}
  ${props => props.right && css` text-align: right; `}
`;

export default Alignment;
