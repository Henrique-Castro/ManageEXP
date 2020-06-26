import { DefaultTheme } from 'styled-components';

import { ReactNode } from 'react';

import { ColorsBackgroundOptions } from '../../styles/themes/colors';

import { UnitsSpacingOptions } from '../../styles/themes/units';

export type GridProps =
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse';

export type GridAlign =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';

export type FlexWrapProps =
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'initial'
    | 'inherit';

export type DisplayProps =
    | 'none'
    | 'inline'
    | 'block'
    | 'list-item'
    | 'inline-block'
    | 'inline-table'
    | 'table'
    | 'table-cell'
    | 'table-column'
    | 'table-column-group'
    | 'table-footer-group'
    | 'table-header-group'
    | 'table-row'
    | 'table-row-group'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'run-in'
    | 'inherit';

export type OverflowProps =
    | 'visible'
    | 'hidden'
    | 'scroll'
    | 'auto';

export interface GridAlignProps {
    flexDirection: GridProps;
    theme?: DefaultTheme;
};

export interface CustomGridProps {
    children?: ReactNode;

    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;

    display?: DisplayProps;

    position?: 'absolute' | 'relative';
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;

    flexDirection?: GridProps;
    flexWrap?: FlexWrapProps;
    alignItems?: GridAlign;
    justifyContent?: GridAlign;

    padding?: Array<UnitsSpacingOptions>;
    marging?: Array<UnitsSpacingOptions>;

    marginTop?: UnitsSpacingOptions | 'auto';
    marginBottom?: UnitsSpacingOptions | 'auto';
    marginLeft?: UnitsSpacingOptions | 'auto';
    marginRight?: UnitsSpacingOptions | 'auto';

    paddingTop?: UnitsSpacingOptions;
    paddingBottom?: UnitsSpacingOptions;
    paddingLeft?: UnitsSpacingOptions;
    paddingRight?: UnitsSpacingOptions;

    backgroundColor?: ColorsBackgroundOptions;
    opacity?: number;

    zIndex?: number;
    overflow?: OverflowProps;
    overflowX?: OverflowProps;
    overflowY?: OverflowProps;
};

export interface CustomProps extends Partial<GridAlignProps> {
    width?: number | string;
    height?: number | string;

    position?: 'absolute' | 'relative';
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    
    padding?: Array<UnitsSpacingOptions>;
    margin?: Array<UnitsSpacingOptions>;

    marginTop?: UnitsSpacingOptions | 'auto';
    marginBottom?: UnitsSpacingOptions | 'auto';
    marginLeft?: UnitsSpacingOptions | 'auto';
    marginRight?: UnitsSpacingOptions | 'auto';

    paddingTop?: UnitsSpacingOptions;
    paddingBottom?: UnitsSpacingOptions;
    paddingLeft?: UnitsSpacingOptions;
    paddingRight?: UnitsSpacingOptions;

    flexWrap?: FlexWrapProps;
    opacity?: number;
};
