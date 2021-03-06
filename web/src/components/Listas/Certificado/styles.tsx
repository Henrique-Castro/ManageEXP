import styled from 'styled-components';

export const CertificateRow = styled.tr`
    padding: 32px 20px;
    cursor: pointer;
    transition: all .5s;

    td {
        padding-bottom: 16px;
        padding-top: 16px;
    };

    td + td {
        text-align: center;
    };

    .certificado, .dataAtualizacao {
        color: ${({ theme }) => theme.colors.text.quaternary};
        font-size: ${({ theme }) => theme.fonts.size.xp}px;
    };

    .certificado {
        padding-left: 20px;
    };

    &:hover {
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    };
`;
