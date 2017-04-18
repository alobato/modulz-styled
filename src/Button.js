import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all .15s ease;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  font-weight: 600;
  outline: none;
  letter-spacing: .15px;

  font-size: 12px;
  height: 32px;
  min-width: 32px;
  line-height: 32px;
  padding: 0 8px;

  background-color: hsl(200, 50%, 99%);
  color: hsl(200, 30%, 10%);
  box-shadow: 0 0 0 1px hsl(200, 20%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 0 1px hsl(200, 30%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 1px hsl(200, 30%, 70%);
  }

  ${p => p.small && css`
    font-size: 10px;
    height: 24px;
    min-width: 24px;
    line-height: 24px;
    padding: 0 8px;
  `}

  ${p => p.primary && css`
    background-color: hsl(200, 100%, 97%);
    color: hsl(200, 70%, 50%);
    box-shadow: 0 0 0 1px hsl(200, 80%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(200, 80%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(200, 80%, 60%);
    }
  `}

  ${p => p.positive && css`
    background-color: hsl(138, 100%, 97%);
    color: hsl(138, 60%, 40%);
    box-shadow: 0 0 0 1px hsl(138, 50%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(138, 50%, 50%);
    }
  `}

  ${p => p.negative && css`
    background-color: hsl(348, 100%, 97%);
    color: hsl(348, 70%, 60%);
    box-shadow: 0 0 0 1px hsl(348, 70%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1);

    &:hover {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1);
    }

    &:active {
      box-shadow: 0 0 0 1px hsl(348, 70%, 60%);
    }
  `}
`;

export default Button;
