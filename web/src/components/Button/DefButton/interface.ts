import { MouseEvent } from 'react'

import { ColorsButtonOptions } from '../../../styles/themes/colors';

export type Props = {
  text: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant: ColorsButtonOptions;
};

export type StyledProps = {
  variant: ColorsButtonOptions;
};
 