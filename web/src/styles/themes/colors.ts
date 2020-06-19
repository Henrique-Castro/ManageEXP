export default {
    main: '#FFFFFF',
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
    tertiary: '#FFFFFF',
    quaternary: '#FFFFFF',
    quinary: '#FFFFFF',
    senary: '#FFFFFF',
}

export interface ColorsPropsBackground {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
}

export interface ColorsPropsText {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    disabled: string;
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