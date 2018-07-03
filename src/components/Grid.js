import styled, { css } from 'styled-components';
import * as theme from './../theme/';

const Grid = styled.div`
  display: grid;
  grid-gap: ${theme.SPACING_700};

  ${props => props.cols1 && css`
    grid-template-columns: repeat(1, [col] 1fr);
  `}
  ${props => props.cols2 && css`
    grid-template-columns: repeat(2, [col] 1fr);
  `}
  ${props => props.cols3 && css`
    grid-template-columns: repeat(3, [col] 1fr);
  `}
  ${props => props.cols4 && css`
    grid-template-columns: repeat(4, [col] 1fr);
  `}
  ${props => props.cols5 && css`
    grid-template-columns: repeat(5, [col] 1fr);
  `}
  ${props => props.cols6 && css`
    grid-template-columns: repeat(6, [col] 1fr);
  `}
  ${props => props.cols7 && css`
    grid-template-columns: repeat(7, [col] 1fr);
  `}
  ${props => props.cols8 && css`
    grid-template-columns: repeat(8, [col] 1fr);
  `}
  ${props => props.cols9 && css`
    grid-template-columns: repeat(9, [col] 1fr);
  `}
  ${props => props.cols10 && css`
    grid-template-columns: repeat(10, [col] 1fr);
  `}
  ${props => props.cols11 && css`
    grid-template-columns: repeat(11, [col] 1fr);
  `}
  ${props => props.cols12 && css`
    grid-template-columns: repeat(12, [col] 1fr);
  `}
`;

export default Grid;
