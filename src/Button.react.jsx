import React from 'react';
import styled from 'styled-components';

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
  margin-top: 24px;
  margin-right: 24px;
  font-weight: 600;
  outline: none;

  font-size: ${(props) => props.small ? '12px' : '14px'};
  height: ${(props) => props.small ? '32px' : '40px'};
  min-width: ${(props) => props.small ? '32px' : '40px'};
  line-height: ${(props) => props.small ? '32px' : '40px'};
  padding: ${(props) => props.small ? '0 8px' : '0 16px'};
  background-color:
    ${(props) =>
      props.negative ? 'hsl(348, 100%, 97%)' :
      props.positive ? 'hsl(138, 100%, 97%)' :
      props.primary ? 'hsl(200, 100%, 97%)' :
      'hsl(200, 50%, 99%)'
    };
  color: ${(props) =>
    props.negative ? 'hsl(348, 70%, 60%)' :
    props.positive ? 'hsl(138, 60%, 40%)' :
    props.primary ? 'hsl(200, 70%, 50%)' :
    'hsl(200, 30%, 10%)'
  };
  box-shadow:
    ${(props) =>
      props.positive ? '0 0 0 1px hsl(138, 50%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1)' :
      props.negative ? '0 0 0 1px hsl(348, 70%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1)'  :
      props.primary ? '0 0 0 1px hsl(200, 80%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1)' :
      '0 0 0 1px hsl(200, 20%, 80%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1)'
    };
  letter-spacing: .15px;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      ${(props) =>
        props.positive ? '0 0 0 1px hsl(138, 50%, 50%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1)' :
        props.negative ? '0 0 0 1px hsl(348, 70%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1)' :
        props.primary ? '0 0 0 1px hsl(200, 80%, 60%), 0 7px 14px 0 hsla(200, 30%, 10%, .05), 0 3px 6px 0 hsla(200, 30%, 10%, .1)' :
        '0 0 0 1px hsl(200, 30%, 70%), 0 3px 6px 0 hsla(200, 30%, 10%, .05), 0 1px 3px 0 hsla(200, 30%, 10%, .1)'
      };
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      ${(props) =>
        props.positive ? '0 0 0 1px hsl(138, 50%, 50%)' :
        props.negative ? '0 0 0 1px hsl(348, 70%, 60%)' :
        props.primary ? '0 0 0 1px hsl(200, 80%, 60%)' :
        '0 0 0 1px hsl(200, 30%, 70%)'
      };
  }
`;

export default Button;
