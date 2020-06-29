import styled from 'styled-components';

export const Nav = styled.div` 
    height: 100vh;
    display: flex;
    flex-direction: column ;
    justify-content: space-between;
    align-items: center;
    padding: 20px 28px ;
    background-color: ${({ theme }) => theme.colors.background.primary};
    position: fixed;
    left: 0;
    top: 0;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            cursor: pointer;
            margin-bottom: 16px;
        };
    };

    .copy {
        color: ${({ theme }) => theme.colors.text.white};
        font-size: 16px;
    };
`;