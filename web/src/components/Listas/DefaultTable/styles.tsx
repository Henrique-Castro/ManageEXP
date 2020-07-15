import styled from 'styled-components';

export const DefaultTable = styled.table`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    border-radius: 12px; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);  
`;
