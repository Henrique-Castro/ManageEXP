export default {
    // Primary palette
    primary: '#227ABA',
    secondary: '#2B3254',
    tertiary: '#F47F38',
    quaternary: '#191919',
    quinary: '#B3B3B3',
    senary: '#EFF0FF',
    septenary: '#3A506B',
    white: '#FFFFFF',

    // Background palette
    primaryBackground: '#F0F1F2',
    secondaryBackground: '#FDFDFE',

    // Secondary palette
    publish: "#0BEA0B",
    outofarea: "#EA0F0B",
    verify: "#E4DB00",
};

export interface ColorsPropsBackground {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
};

export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    senary: string;
    white: string;
};

export type ButtonColorsScheme = {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
};

export interface ColorsPropsButton {
    def: ButtonColorsScheme;
    logout: ButtonColorsScheme
};

export interface ColorsPropsStatus {
  publish: string;
  outofarea: string;
  verify: string;
};

export interface ColorsProps {
    background: ColorsPropsBackground;
    text: ColorsPropsText;
    button: ColorsPropsButton;
};

// General export for components
export type ColorsBackgroundOptions = keyof ColorsPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsButtonOptions = keyof ColorsPropsButton;

export type ColorsStatusOptions = keyof ColorsPropsStatus;