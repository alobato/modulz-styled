import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width:
    ${(props) =>
      props.small ? '50%' :
      props.large ? '80%' :
      '70%'
    };
`;

export default Container;
