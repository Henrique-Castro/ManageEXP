import styled from "styled-components";

import { StyledProps } from "./interface";
import { ColorsStatusOptions } from "../../../styles/themes/colors";

const transformToRgba = (variant: ColorsStatusOptions) => {
  if (variant === "success") {
    return "rgba(11,234,11, 0.2)";
  };
  if (variant === "warn") {
    return "rgba(228, 220, 0, 0.2)";
  };
  if (variant === "error") {
    return "rgba(234, 15, 11, 0.2)";
  };
};

export const Container = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  width: 120px;
  background-color: ${({ variant }) => transformToRgba(variant)};
`;

export const Text = styled.p<StyledProps>`
  color: ${({ theme, variant }) => theme.colors.status[variant]};
`;
