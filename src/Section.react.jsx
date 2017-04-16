import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding:
    ${(props) =>
      props.small ? '16px 0' :
      props.large ? '96px 0' :
      '40px 0'
    };
  height: ${(props) => props.h90 ? '90%' : 'auto'};
  background-color:
    ${(props) =>
      props.snow ? 'hsl(204, 26%, 96%)' :
      props.red ? 'hsl(0, 92%, 61%)' :
      props.pink ? 'hsl(332, 94%, 55%)' :
      props.purple ? 'hsl(288, 64%, 42%)' :
      props.indigo ? 'hsl(226, 56%, 48%)' :
      props.blue ? 'hsl(204, 95%, 50%)' :
      props.teal ? 'hsl(172, 100%, 35%)' :
      props.green ? 'hsl(132, 52%, 53%)' :
      props.lime ? 'hsl(68, 74%, 50%)' :
      props.yellow ? 'hsl(54, 98%, 50%)' :
      props.amber ? 'hsl(46, 100%, 57%)' :
      props.orange ? 'hsl(36, 100%, 50%)' :
      props.crimson ? 'hsl(18, 100%, 60%)' :
      props.lavender ? 'hsl(255, 74%, 60%)' :
      props.violet ? 'hsl(264, 52%, 45%)' :
      ''
    };
`;

export default Section;
