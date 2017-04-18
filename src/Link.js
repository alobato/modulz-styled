import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Link = styled.a`
  font-size: 16px;
  color: hsl(204, 95%, 50%);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
