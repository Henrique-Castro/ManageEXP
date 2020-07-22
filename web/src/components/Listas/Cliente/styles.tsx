import styled, { css } from "styled-components";

import { Phone, Mail } from "../../../styles/icons";

export const ClientRow = styled.tr`
  padding: 32px 20px;
  cursor: pointer;
  transition: all 0.5s;

  > td {
    padding-bottom: 16px;
    padding-top: 16px;
  }

  > td:first-child,
  > td:nth-child(3) {
    font-size: 20px;
  }

  > td + td {
    text-align: center;
  }

  > td:nth-child(2),
  > td:last-child {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: auto 0;
    overflow: hidden;
  }

  > .company {
    padding-left: 20px;
  }

  &:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const CompanyManager = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-family: ${({ theme }) => theme.fonts.robotoBlack};
    color: ${({ theme }) => theme.colors.text.quaternary};
    font-size: 20px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    font-family: ${({ theme }) => theme.fonts.robotoBold};
    color: ${({ theme }) => theme.colors.text.quinary};
    font-size: 16px;
  }
`;

export const DomainLink = styled.span`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 30%;
  height: 100%;

  > svg {
    cursor: pointer;
    outline: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const iconsCSS = css`
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.icons.primary};
`;

export const PhoneIcon = styled(Phone)`
  ${iconsCSS}
`;
export const EmailIcon = styled(Mail)`
  ${iconsCSS}
`;
