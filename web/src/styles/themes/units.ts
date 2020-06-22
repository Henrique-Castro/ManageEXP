export default {
    spacing: {
        none: 0,
        ultraSmall: 2,
        xxxxSmall: 4,
        xxxSmall: 8,
        xxSmall: 12,
        xSmall: 16,
        small: 20,
        medium: 24,
        large: 28,
        xLarge: 32,
        xxLarge: 36,
        xxxLarge: 40,
        xxxxLarge: 44,
        ultraLarge: 48,
    },
    borderRadius: {
        xxSmall: 4,
        xSmall: 8,
        small: 12,
        medium: 16,
        large: 20,
    },
    button: {
        fontSmall: 12,
        fontMedium: 16,
        fontLarge: 20,
        height: 50,
    },
    input: {
        fontSmall: 12,
        fontMedium: 16,
        height: 45,
    },
};

export interface UnitPropsSpacing {
    none: number;
    ultraSmall: number;
    xxxxSmall: number;
    xxxSmall: number;
    xxSmall: number;
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
    xxLarge: number;
    xxxLarge: number;
    xxxxLarge: number;
    ultraLarge: number;
};

export interface UnitPropsBorder {
    xxSmall: number;
    xSmall: number;
    small: number;
    medium: number;
    large: number;
};

export interface UnitPropsButton {
    fontSmall: number;
    fontMedium: number;
    fontLarge: number;
    height: number;
};

export interface UnitPropsInput {
    fontSmall: number;
    fontMedium: number;
    height: number;
};

export type UnitsBorderRadiusOptions = keyof UnitPropsBorder;

export type UnitsSpacingOptions = keyof UnitPropsSpacing;

export type UnitsButtonOptions = keyof UnitPropsButton;

export type UnitsInputOptions = keyof UnitPropsInput;

export interface UnitsProps {
    spacing: UnitPropsSpacing;
    borderRadius: UnitPropsBorder;
    button: UnitPropsButton;
    input: UnitPropsInput;
};