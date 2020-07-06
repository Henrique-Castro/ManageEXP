import styled from 'styled-components';

import { ColorsStatusOptions } from '../../../styles/themes/colors';

interface Props {
    variant: ColorsStatusOptions;
    value: string;
}

export const Container = styled.span<Props>`
    font-size: ${({ theme }) => theme.fonts.size.xxp};
    color: ${({ variant, theme }) => theme.colors.status[variant]};
`;
