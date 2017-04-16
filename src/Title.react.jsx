import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size:
    ${(props) =>
      props.small ? '26px' :
      props.medium ? '52px' :
      '40px'
    };
  letter-spacing: -.5px;
`;

export default Title;
