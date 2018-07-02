import { css } from 'styled-components';

export const leading = ({ leading }) => css`${leading ? `leading: ${leading};` : ''}`
