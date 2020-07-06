import { ColorsStatusOptions } from "../../../styles/themes/colors";

export interface Props {
  label: STATUS_DOMAIN;
}

export enum STATUS_DOMAIN {
  error = "Fora de Área",
  warn = "Verificando",
  success = "Publicado",
}

export interface StyledProps {
  variant: ColorsStatusOptions;
}

export interface DomainObjectWillBeReceivedFromAPI {
  type: STATUS_DOMAIN;
}
