export default {
    // Primary palette
    primary: '#227ABA',
    secondary: '#2B3254',
    tertiary: '#F47F38',
    quaternary: '#191919',
    quinary: '#B3B3B3',
    white: '#FFFFFF',

    // Background palette
    primaryBackground: '#F0F1F2',
    secondaryBackground: '#FDFDFE',

    // Secondary palette
    success: '#0AD60A',
    danger: '#D60E0A',
    warning: '#D6D60A',
}

export interface ColorsPropsBackground {
    primary: string;
    secondary: string;
    tertiary: string;
}

export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    white: string;
}

export type ButtonColorsScheme = {
    borderColor?: string;
    backgroundColor?: string;
    textColor?: string;
}

export interface ColorsPropsButton {
    def: ButtonColorsScheme;
}

export interface ColorsProps {
    background: ColorsPropsBackground;
    text: ColorsPropsText;
    button: ColorsPropsButton;
}

// General export for components
export type ColorsBackgroundOptions = keyof ColorsPropsBackground;

export type ColorsTextOptions = keyof ColorsPropsText;

export type ColorsButtonOptions = keyof ColorsPropsButton;