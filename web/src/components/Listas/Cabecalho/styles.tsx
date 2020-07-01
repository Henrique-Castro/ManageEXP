import styled from 'styled-components';

export const TableHeader = styled.tr`
    width: 100%;

    th {
        color: ${({theme}) => theme.colors.text.quinary};
        font-size: ${({theme}) => theme.fonts.size.xp};
        text-align: left;
        padding-top: 20px;
        padding-bottom: 12px;
    };

    th:first-child{
        padding-left: 20px;
    }
`;
