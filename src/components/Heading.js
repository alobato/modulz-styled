import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Heading = styled.h3`
  color: ${theme.GRAY_900};

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_400};
    letter-spacing: -.001em;
    margin-left: -.05em;
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_500};
    letter-spacing: -.005em;
    margin-left: -.06em;
  `}

  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_600};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}

  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_700};
    letter-spacing: -.028em;
    margin-left: -.085em;
  `}

  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.038em;
    margin-left: -.088em;
  `}

  ${p => p.size6 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.042em;
    margin-left: -.09em;
  `}
`;

export default Heading;
