import styled from "styled-components";

import { Eye } from '../../styles/icons'

export const Container = styled.div`
    width: 380px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .title {
        width: 100%;
    }

    > form {
        width: 300px;

        display: flex;
        flex-direction: column;
        align-items: center;

        > .inputContainer {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
        
            > label {
                font-size: 12px;
                color: ${({ theme }) => theme.colors.text.secondary};
                margin-bottom: 4px;
            };
            
            input {
                height: 30px;
                width: 100%;
                margin-bottom: 12px;

                background: transparent;

                border: none;
                border-bottom: 1px solid ${({ theme }) => theme.colors.text.primary};

                font-family: ${({ theme }) => theme.fonts.robotoBold};
                font-size: 16px;
                color: ${({ theme }) => theme.colors.text.quaternary};

                ::placeholder,
                ::-webkit-input-placeholder {
                    font-family: ${({ theme }) => theme.fonts.robotoBold};
                    font-size: 16px;
                    color: ${({ theme }) => theme.colors.text.quinary};
                }
            }
        }
    }
`;

export const EyeIcon = styled(Eye)`
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
`;
