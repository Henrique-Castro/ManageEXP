import styled from 'styled-components';

import { StyledProps } from './interface';

import { handleDays } from '../../../utils/daysFormat';

const severityVariant = (
    value?: string
): string => { 
    const days = handleDays(value);

    if (days && days > 0) {
        if (days <= 15) return 'error';
        if (days > 15 && days <= 45  ) return 'warn';
        return 'success';
    };

    return 'Incorrect value';
};

export const Container = styled.span<StyledProps>`
    font-size: ${({ theme }) => theme.fonts.size.xxp};

    color: ${({ theme, variant, data }) => theme.colors.status[severityVariant(data)] }
`;
