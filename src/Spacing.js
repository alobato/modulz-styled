import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'

const Spacing = styled.div`
  ${p => p.m1 && css` margin: 4px; `}
  ${p => p.mt1 && css` margin-top: 4px; `}
  ${p => p.mr1 && css` margin-right: 4px; `}
  ${p => p.mb1 && css` margin-bottom: 4px; `}
  ${p => p.ml1 && css` margin-left: 4px; `}

  ${p => p.m2 && css` margin: 8px; `}
  ${p => p.mt2 && css` margin-top: 8px; `}
  ${p => p.mr2 && css` margin-right: 8px; `}
  ${p => p.mb2 && css` margin-bottom: 8px; `}
  ${p => p.ml2 && css` margin-left: 8px; `}

  ${p => p.m3 && css` margin: 16px; `}
  ${p => p.mt3 && css` margin-top: 16px; `}
  ${p => p.mr3 && css` margin-right: 16px; `}
  ${p => p.mb3 && css` margin-bottom: 16px; `}
  ${p => p.ml3 && css` margin-left: 16px; `}

  ${p => p.m4 && css` margin: 24px; `}
  ${p => p.mt4 && css` margin-top: 24px; `}
  ${p => p.mr4 && css` margin-right: 24px; `}
  ${p => p.mb4 && css` margin-bottom: 24px; `}
  ${p => p.ml4 && css` margin-left: 24px; `}

  ${p => p.m5 && css` margin: 32px; `}
  ${p => p.mt5 && css` margin-top: 32px; `}
  ${p => p.mr5 && css` margin-right: 32px; `}
  ${p => p.mb5 && css` margin-bottom: 32px; `}
  ${p => p.ml5 && css` margin-left: 32px; `}

  ${p => p.m6 && css` margin: 40px; `}
  ${p => p.mt6 && css` margin-top: 40px; `}
  ${p => p.mr6 && css` margin-right: 40px; `}
  ${p => p.mb6 && css` margin-bottom: 40px; `}
  ${p => p.ml6 && css` margin-left: 40px; `}

  ${p => p.m7 && css` margin: 64px; `}
  ${p => p.mt7 && css` margin-top: 64px; `}
  ${p => p.mr7 && css` margin-right: 64px; `}
  ${p => p.mb7 && css` margin-bottom: 64px; `}
  ${p => p.ml7 && css` margin-left: 64px; `}

  ${p => p.p1 && css` padding: 4px; `}
  ${p => p.pt1 && css` padding-top: 4px; `}
  ${p => p.pr1 && css` padding-right: 4px; `}
  ${p => p.pb1 && css` padding-bottom: 4px; `}
  ${p => p.pl1 && css` padding-left: 4px; `}

  ${p => p.p2 && css` padding: 8px; `}
  ${p => p.pt2 && css` padding-top: 8px; `}
  ${p => p.pr2 && css` padding-right: 8px; `}
  ${p => p.pb2 && css` padding-bottom: 8px; `}
  ${p => p.pl2 && css` padding-left: 8px; `}

  ${p => p.p3 && css` padding: 16px; `}
  ${p => p.pt3 && css` padding-top: 16px; `}
  ${p => p.pr3 && css` padding-right: 16px; `}
  ${p => p.pb3 && css` padding-bottom: 16px; `}
  ${p => p.pl3 && css` padding-left: 16px; `}

  ${p => p.p4 && css` padding: 24px; `}
  ${p => p.pt4 && css` padding-top: 24px; `}
  ${p => p.pr4 && css` padding-right: 24px; `}
  ${p => p.pb4 && css` padding-bottom: 24px; `}
  ${p => p.pl4 && css` padding-left: 24px; `}

  ${p => p.p5 && css` padding: 32px; `}
  ${p => p.pt5 && css` padding-top: 32px; `}
  ${p => p.pr5 && css` padding-right: 32px; `}
  ${p => p.pb5 && css` padding-bottom: 32px; `}
  ${p => p.pl5 && css` padding-left: 32px; `}

  ${p => p.p6 && css` padding: 40px; `}
  ${p => p.pt6 && css` padding-top: 40px; `}
  ${p => p.pr6 && css` padding-right: 40px; `}
  ${p => p.pb6 && css` padding-bottom: 40px; `}
  ${p => p.pl6 && css` padding-left: 40px; `}

  ${p => p.m7 && css` padding: 64px; `}
  ${p => p.mt7 && css` padding-top: 64px; `}
  ${p => p.mr7 && css` padding-right: 64px; `}
  ${p => p.mb7 && css` padding-bottom: 64px; `}
  ${p => p.ml7 && css` padding-left: 64px; `}
`;

export default Spacing;
