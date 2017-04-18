import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Heading = styled.h3`
  font-size: 40px;
  color: hsl(200, 30%, 10%);
  letter-spacing: -1px;
  line-height: 1.1;
  font-weight: 700;

  ${p => p.small && css`
    font-size: 28px;
    letter-spacing: -.2px;
  `}

  ${p => p.thin && css`
    font-size: 28px;
    font-weight: 300;
    letter-spacing: .2px;
    line-height: 1.5;
  `}

  ${p => p.large && css`
    font-size: 80px;
    letter-spacing: -4px;
  `}

  ${props => props.steel && css` color: hsl(204, 18%, 51%); `}

  ${props => props.red && css` color: hsl(0, 92%, 61%); `}
  ${props => props.pink && css` color: hsl(332, 94%, 55%); `}
  ${props => props.purple && css` color: hsl(288, 64%, 42%); `}
  ${props => props.indigo && css` color: hsl(226, 56%, 48%); `}
  ${props => props.blue && css` color: hsl(204, 95%, 50%); `}
  ${props => props.teal && css` color: hsl(172, 100%, 35%); `}
  ${props => props.green && css` color: hsl(132, 52%, 53%); `}
  ${props => props.lime && css` color: hsl(68, 74%, 50%); `}
  ${props => props.yellow && css` color: hsl(54, 98%, 50%); `}
  ${props => props.amber && css` color: hsl(46, 100%, 57%); `}
  ${props => props.orange && css` color: hsl(36, 100%, 50%); `}
  ${props => props.crimson && css` color: hsl(18, 100%, 60%); `}
  ${props => props.lavender && css` color: hsl(255, 74%, 60%); `}
  ${props => props.violet && css` color: hsl(264, 52%, 45%); `}
`;

export default Heading;
