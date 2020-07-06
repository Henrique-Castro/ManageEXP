import { ColorsStatusOptions } from "../../../styles/themes/colors";

export type STATUS_CERTIFICATE = 
 | 'sucsses'
 | 'error'
 | 'warn'

export interface StyledProps {
  variant: ColorsStatusOptions;
}


