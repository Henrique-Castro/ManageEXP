import styled from 'styled-components';

export const ContainerBox = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;

    .content {
        z-index: 2;
        margin-left:100px ;
        background-color: ${({ theme }) => theme.colors.background.secondary};
        width: 100%;
        min-height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 16px 32px;
        box-shadow: -5px 0px 12px rgba(0, 0, 0, 0.25)
    };
`;
