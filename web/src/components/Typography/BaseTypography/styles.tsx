import styled from 'styled-components';

import { PropsBaseTypography } from './interface';

export const BaseTypography = styled.p<PropsBaseTypography>`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.primary};

  ${({ textDecoration }) =>
    textDecoration ? { 'text-decoration': textDecoration } : ''};

  ${({ align }) => (align ? { textAlign: align } : 'left')};

  ${({ lineHeight, theme }) =>
    lineHeight && { 'line-height': theme.units.spacing[lineHeight] }};

  ${({ fontFamily, theme }) =>
    fontFamily && { 'font-family': theme.fonts[fontFamily] }};
  
  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fonts.size[fontSize] : theme.fonts.size.m}px;

  ${({ margingBottom, theme }) =>
    margingBottom && { 'margin-bottom': theme.units.spacing[margingBottom] }};

  ${({ margingLeft, theme }) =>
    margingLeft && { 'margin-left': theme.units.spacing[margingLeft] }};

  ${({ margingRight, theme }) =>
    margingRight && { 'margin-right': theme.units.spacing[margingRight] }};
`;
