import React from "react";

import { Props, STATUS_DOMAIN } from "./interface";

import { Container, Text } from "./styles";
import { ColorsStatusOptions } from "../../../styles/themes/colors";

const Domain = ({ label }: Props) => {
  const statusColorVariant = (type: STATUS_DOMAIN) => {
    const colorScheme: {
      [key: string]: ColorsStatusOptions;
    } = {
      [STATUS_DOMAIN.verify]: "verify",
      [STATUS_DOMAIN.outofarea]: "outofarea",
      [STATUS_DOMAIN.publish]: "publish",
    };

    return colorScheme[type];
  };

  const variant = statusColorVariant(label.type);
  
  return (
    <Container variant={variant}>
      <Text variant={variant}>{label.type}</Text>
    </Container>
  );
};

export default Domain;
