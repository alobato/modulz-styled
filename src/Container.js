import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 70%;

  ${props => props.small && css`
    width: 60%;
  `}

  ${props => props.large && css`
    width: 90%;
  `}
`;

export default Container;
