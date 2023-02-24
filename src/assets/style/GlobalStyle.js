import { createGlobalStyle } from 'styled-components'
import { colors } from '../../utils/variables';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font: inherit;
      vertical-align: baseline;
      margin-block-start: 0;
      margin-block-end: 0;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {display: block;}
  body {line-height: 1.5;}
  ol, ul, li {list-style: none;}
  blockquote, q {quotes: none;}
  blockquote:before, blockquote:after, q:before, q:after {content: '';content: none;}
  table {border-collapse: collapse; border-spacing: 0;}
  a:link, a:visited {text-decoration: none}
  html, body {overflow: hidden;}
  html {
      overflow-y: scroll;
      scroll-behavior: smooth;
      font-size: 62.5%;
  }
  * {box-sizing: border-box;}
  body {
    color: ${colors.neutral_100};
    background-color: ${colors.white};
    padding: 0 !important;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
}

`;
export default GlobalStyle;