import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Section = styled.section`
    font-size: 16px;

    ${props => props.small && css`
        padding: 16px 0;
    `}

    ${props => props.medium && css`
        padding: 40px 0;
    `}

    ${props => props.large && css`
        padding: 96px 0;
    `}

    ${props => props.h90 && css`
        height: 90%;
    `}

  ${props => props.pearl && css` background-color: hsl(204, 43%, 99%); `}
  ${props => props.snow && css` background-color: hsl(204, 26%, 96%); `}
  ${props => props.lead && css` background-color: hsl(200, 30%, 10%); `}

  ${props => props.red && css` background-color: hsl(0, 92%, 61%); `}
  ${props => props.pink && css` background-color: hsl(332, 94%, 55%); `}
  ${props => props.purple && css` background-color: hsl(288, 64%, 42%); `}
  ${props => props.indigo && css` background-color: hsl(226, 56%, 48%); `}
  ${props => props.blue && css` background-color: hsl(204, 95%, 50%); `}
  ${props => props.teal && css` background-color: hsl(172, 100%, 35%); `}
  ${props => props.green && css` background-color: hsl(132, 52%, 53%); `}
  ${props => props.lime && css` background-color: hsl(68, 74%, 50%); `}
  ${props => props.yellow && css` background-color: hsl(54, 98%, 50%); `}
  ${props => props.amber && css` background-color: hsl(46, 100%, 57%); `}
  ${props => props.orange && css` background-color: hsl(36, 100%, 50%); `}
  ${props => props.crimson && css` background-color: hsl(18, 100%, 60%); `}
  ${props => props.lavender && css` background-color: hsl(255, 74%, 60%); `}
  ${props => props.violet && css` background-color: hsl(264, 52%, 45%); `}
`;

export default Section;
