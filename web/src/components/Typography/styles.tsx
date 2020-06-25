import styled from 'styled-components';

import { PropsStyledBaseTitle } from './interface';

export const BaseTitle = styled.p<PropsStyledBaseTitle>`
  color: ${({ theme, color }) =>
    color ? theme.colors.text[color] : theme.colors.text.primary};

  font-size: ${({ theme, fontSize }) =>
    fontSize ? theme.fonts.size[fontSize] : theme.fonts.size.m}px;

  ${({ lineHeight, theme }) =>
    lineHeight && { 'line-height': theme.units.spacing[lineHeight] }};

  ${({ fontFamily, theme }) =>
    fontFamily
      ? { 'font-family': theme.fonts[fontFamily] }
      : { 'font-family': theme.fonts.hansief }};

  ${({ marginLeft, theme }) =>
    marginLeft && { 'margin-left': theme.units.spacing[marginLeft] }};

  ${({ marginRight, theme }) =>
    marginRight && { 'margin-right': theme.units.spacing[marginRight] }};
`;