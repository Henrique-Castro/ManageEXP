import { TextProps } from 'react-native';

import { ColorsTextOptions } from '../../styles/themes/colors';

import { TextOptions, TextUnits } from '../../styles/themes/fonts';

import { UnitsSpacingOptions } from '../../styles/themes/units';

export interface PropsBaseTitle extends TextProps {
  text: string | number | null;
  color?: ColorsTextOptions;
  testID?: string;
  align?: 'center' | 'left' | 'right';
  weight?: 'bold' | 'normal';
  lineHeight?: UnitsSpacingOptions;
  numberOfLines?: number;
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  fontSize?: TextUnits;
  fontFamily?: TextOptions;
}

export interface PropsStyledBaseTitle {
  color?: ColorsTextOptions;
  align?: 'center' | 'left' | 'right';
  weight?: 'bold' | 'normal';
  marginLeft?: UnitsSpacingOptions;
  marginRight?: UnitsSpacingOptions;
  lineHeight?: UnitsSpacingOptions;
  fontSize?: TextUnits;
  fontFamily?: TextOptions;
}

export interface PropsSkeleton {
  width?: number;
  height?: number;
}