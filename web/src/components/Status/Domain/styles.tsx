import styled from "styled-components";

import { StyledProps } from "./interface";
import { ColorsStatusOptions } from "../../../styles/themes/colors";

const transformToRgba = (variant: ColorsStatusOptions) => {
  if (variant === "publish") {
    return "rgba(11,234,11, 0.2)";
  }
  if (variant === "verify") {
    return "rgba(228, 220, 0, 0.2)";
  }
  if (variant === "outofarea") {
    return "rgba(234, 15, 11, 0.2)";
  }
};

export const Container = styled.div<StyledProps>`
  padding: 8px 12px;
  width: auto;
  background-color: ${({ variant }) => transformToRgba(variant)};
`;

export const Text = styled.p<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.status[variant]};
`;
