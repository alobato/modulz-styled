import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'
import * as palette from './Palette.js';

const Spacing = styled.div`
  ${p => p.m1 && css` margin: ${palette.SPACING_100}; `}
  ${p => p.mt1 && css` margin-top: ${palette.SPACING_100}; `}
  ${p => p.mr1 && css` margin-right: ${palette.SPACING_100}; `}
  ${p => p.mb1 && css` margin-bottom: ${palette.SPACING_100}; `}
  ${p => p.ml1 && css` margin-left: ${palette.SPACING_100}; `}

  ${p => p.m2 && css` margin: ${palette.SPACING_200}; `}
  ${p => p.mt2 && css` margin-top: ${palette.SPACING_200}; `}
  ${p => p.mr2 && css` margin-right: ${palette.SPACING_200}; `}
  ${p => p.mb2 && css` margin-bottom: ${palette.SPACING_200}; `}
  ${p => p.ml2 && css` margin-left: ${palette.SPACING_200}; `}

  ${p => p.m3 && css` margin: ${palette.SPACING_300}; `}
  ${p => p.mt3 && css` margin-top: ${palette.SPACING_300}; `}
  ${p => p.mr3 && css` margin-right: ${palette.SPACING_300}; `}
  ${p => p.mb3 && css` margin-bottom: ${palette.SPACING_300}; `}
  ${p => p.ml3 && css` margin-left: ${palette.SPACING_300}; `}

  ${p => p.m4 && css` margin: ${palette.SPACING_400}; `}
  ${p => p.mt4 && css` margin-top: ${palette.SPACING_400}; `}
  ${p => p.mr4 && css` margin-right: ${palette.SPACING_400}; `}
  ${p => p.mb4 && css` margin-bottom: ${palette.SPACING_400}; `}
  ${p => p.ml4 && css` margin-left: ${palette.SPACING_400}; `}

  ${p => p.m5 && css` margin: ${palette.SPACING_500}; `}
  ${p => p.mt5 && css` margin-top: ${palette.SPACING_500}; `}
  ${p => p.mr5 && css` margin-right: ${palette.SPACING_500}; `}
  ${p => p.mb5 && css` margin-bottom: ${palette.SPACING_500}; `}
  ${p => p.ml5 && css` margin-left: ${palette.SPACING_500}; `}

  ${p => p.m6 && css` margin: ${palette.SPACING_600}; `}
  ${p => p.mt6 && css` margin-top: ${palette.SPACING_600}; `}
  ${p => p.mr6 && css` margin-right: ${palette.SPACING_600}; `}
  ${p => p.mb6 && css` margin-bottom: ${palette.SPACING_600}; `}
  ${p => p.ml6 && css` margin-left: ${palette.SPACING_600}; `}

  ${p => p.m7 && css` margin: ${palette.SPACING_700}; `}
  ${p => p.mt7 && css` margin-top: ${palette.SPACING_700}; `}
  ${p => p.mr7 && css` margin-right: ${palette.SPACING_700}; `}
  ${p => p.mb7 && css` margin-bottom: ${palette.SPACING_700}; `}
  ${p => p.ml7 && css` margin-left: ${palette.SPACING_700}; `}

  ${p => p.m8 && css` margin: ${palette.SPACING_800}; `}
  ${p => p.mt8 && css` margin-top: ${palette.SPACING_800}; `}
  ${p => p.mr8 && css` margin-right: ${palette.SPACING_800}; `}
  ${p => p.mb8 && css` margin-bottom: ${palette.SPACING_800}; `}
  ${p => p.ml8 && css` margin-left: ${palette.SPACING_800}; `}

  ${p => p.m9 && css` margin: ${palette.SPACING_900}; `}
  ${p => p.mt9 && css` margin-top: ${palette.SPACING_900}; `}
  ${p => p.mr9 && css` margin-right: ${palette.SPACING_900}; `}
  ${p => p.mb9 && css` margin-bottom: ${palette.SPACING_900}; `}
  ${p => p.ml9 && css` margin-left: ${palette.SPACING_900}; `}

  ${p => p.p1 && css` padding: ${palette.SPACING_100}; `}
  ${p => p.pt1 && css` padding-top: ${palette.SPACING_100}; `}
  ${p => p.pr1 && css` padding-right: ${palette.SPACING_100}; `}
  ${p => p.pb1 && css` padding-bottom: ${palette.SPACING_100}; `}
  ${p => p.pl1 && css` padding-left: ${palette.SPACING_100}; `}

  ${p => p.p2 && css` padding: ${palette.SPACING_200}; `}
  ${p => p.pt2 && css` padding-top: ${palette.SPACING_200}; `}
  ${p => p.pr2 && css` padding-right: ${palette.SPACING_200}; `}
  ${p => p.pb2 && css` padding-bottom: ${palette.SPACING_200}; `}
  ${p => p.pl2 && css` padding-left: ${palette.SPACING_200}; `}

  ${p => p.p3 && css` padding: ${palette.SPACING_300}; `}
  ${p => p.pt3 && css` padding-top: ${palette.SPACING_300}; `}
  ${p => p.pr3 && css` padding-right: ${palette.SPACING_300}; `}
  ${p => p.pb3 && css` padding-bottom: ${palette.SPACING_300}; `}
  ${p => p.pl3 && css` padding-left: ${palette.SPACING_300}; `}

  ${p => p.p4 && css` padding: ${palette.SPACING_400}; `}
  ${p => p.pt4 && css` padding-top: ${palette.SPACING_400}; `}
  ${p => p.pr4 && css` padding-right: ${palette.SPACING_400}; `}
  ${p => p.pb4 && css` padding-bottom: ${palette.SPACING_400}; `}
  ${p => p.pl4 && css` padding-left: ${palette.SPACING_400}; `}

  ${p => p.p5 && css` padding: ${palette.SPACING_500}; `}
  ${p => p.pt5 && css` padding-top: ${palette.SPACING_500}; `}
  ${p => p.pr5 && css` padding-right: ${palette.SPACING_500}; `}
  ${p => p.pb5 && css` padding-bottom: ${palette.SPACING_500}; `}
  ${p => p.pl5 && css` padding-left: ${palette.SPACING_500}; `}

  ${p => p.p6 && css` padding: ${palette.SPACING_600}; `}
  ${p => p.pt6 && css` padding-top: ${palette.SPACING_600}; `}
  ${p => p.pr6 && css` padding-right: ${palette.SPACING_600}; `}
  ${p => p.pb6 && css` padding-bottom: ${palette.SPACING_600}; `}
  ${p => p.pl6 && css` padding-left: ${palette.SPACING_600}; `}

  ${p => p.m7 && css` padding: ${palette.SPACING_700}; `}
  ${p => p.mt7 && css` padding-top: ${palette.SPACING_700}; `}
  ${p => p.mr7 && css` padding-right: ${palette.SPACING_700}; `}
  ${p => p.mb7 && css` padding-bottom: ${palette.SPACING_700}; `}
  ${p => p.ml7 && css` padding-left: ${palette.SPACING_700}; `}

  ${p => p.m8 && css` padding: ${palette.SPACING_800}; `}
  ${p => p.mt8 && css` padding-top: ${palette.SPACING_800}; `}
  ${p => p.mr8 && css` padding-right: ${palette.SPACING_800}; `}
  ${p => p.mb8 && css` padding-bottom: ${palette.SPACING_800}; `}
  ${p => p.ml8 && css` padding-left: ${palette.SPACING_800}; `}

  ${p => p.m9 && css` padding: ${palette.SPACING_900}; `}
  ${p => p.mt9 && css` padding-top: ${palette.SPACING_900}; `}
  ${p => p.mr9 && css` padding-right: ${palette.SPACING_900}; `}
  ${p => p.mb9 && css` padding-bottom: ${palette.SPACING_900}; `}
  ${p => p.ml9 && css` padding-left: ${palette.SPACING_900}; `}
`;

export default Spacing;
