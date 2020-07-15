import styled from 'styled-components';

import { StyledProps } from './interface';

export const DefaultBtn = styled.button<StyledProps>`
    width: 300px;
    height: auto;
    padding: 16px 0;
    border-radius: 8px;
    background-color: ${({ theme, variant }) => theme?.colors?.button[variant]?.backgroundColor};
    color: ${({ theme, variant }) => theme?.colors?.button[variant]?.textColor};
    cursor: pointer;
    font-size: ${({ theme }) => theme?.fonts?.size?.xp}px;
    font-family : ${({ theme }) => theme?.fonts?.robotoBold};
    border: none;

`;
