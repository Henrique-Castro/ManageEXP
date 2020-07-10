import styled from 'styled-components';

interface Props {
    rows: number;
};

export const TableHeader = styled.tr<Props>`
    width: 100%;

    > th {
        color: ${({theme}) => theme.colors.text.quinary};
        font-size: ${({theme}) => theme.fonts.size.xp};
        text-align: center;
        padding-top: 20px;
        padding-bottom: 12px;
        width: ${({ rows }) => `${100 / rows}%`};
    };

    > th:first-child{
        text-align: left;
        padding-left: 20px;
    };
`;
