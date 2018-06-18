import React from 'react';
import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Heading = styled.h3`
  color: ${theme.GRAY_900};

  ${p => p.size1 && css`
    font-size: ${theme.FONTSIZE_700};
    letter-spacing: -.2px;
  `}

  ${p => p.size2 && css`
    font-size: ${theme.FONTSIZE_800};
    letter-spacing: -.025em;
  `}

  ${p => p.size3 && css`
    font-size: ${theme.FONTSIZE_900};
    letter-spacing: -.025em;
  `}

  ${p => p.size4 && css`
    font-size: ${theme.FONTSIZE_1000};
    letter-spacing: -.025em;
  `}

  ${p => p.size5 && css`
    font-size: ${theme.FONTSIZE_1100};
    letter-spacing: -.025em;
  `}

  ${p => p.thin && css`
    font-weight: 400;
  `}
`;

export default Heading;
