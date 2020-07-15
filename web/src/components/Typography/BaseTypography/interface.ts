import { ColorsTextOptions } from '../../../styles/themes/colors';

import { TextOptions, TextUnits } from '../../../styles/themes/fonts';

import { UnitsSpacingOptions } from '../../../styles/themes/units';

export type TextAlign =
    'inherit'
    | 'left'
    | 'center'
    | 'right'
    | 'justify';

export interface PropsBaseTypography {
    text: string | number | null;
    as?: React.ElementType | keyof JSX.IntrinsicElements;

    color?: ColorsTextOptions;
    textDecoration?: 'underline' | 'overline' | 'line-through';

    align?: TextAlign;
    lineHeight?: number;

    fontFamily?: TextOptions;
    fontSize?: TextUnits;

    margingBottom?: UnitsSpacingOptions;
    margingRight?: UnitsSpacingOptions;
    margingLeft?: UnitsSpacingOptions;
};
