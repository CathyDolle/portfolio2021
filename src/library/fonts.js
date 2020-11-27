import { css } from '@emotion/react';
import SaolDisplay from '../assets/fonts/SaolDisplay-SemiboldItalic.woff';

export const fontFace = css`
  @font-face {
    font-family: 'Saol Display';
    src: url('${SaolDisplay}') format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
  }
`;