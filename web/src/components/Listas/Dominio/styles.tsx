import styled from 'styled-components';

export const DomainRow = styled.tr`
  padding: 32px 20px;
  cursor: pointer;
  transition: all .5s;

  > td {
    padding-bottom: 16px;
    padding-top: 16px;
  };

  > td + td {
    text-align: center;
  };

  > td:last-child{
    display: flex;
    justify-content: center;
  };

  .dominio, .dataAtualizacao {
    color: ${({ theme }) => theme.colors.text.quaternary};
    font-size: ${({ theme }) => theme.fonts.size.xp}px;
  };

  .dominio {
      padding-left: 20px;
  };

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  };
`;
