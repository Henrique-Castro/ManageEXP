export default {
    robotoLightItalic: 'Roboto Light Italic',
    robotoMedium: 'Roboto Medium',
    robotoMediumItalic: 'Roboto Medium Italic',
    robotoBold: 'Roboto Bold',
    robotoBlack: 'Roboto Black',
};

export interface FontsProps {
    robotoLightItalic: string,
    robotoMedium: string,
    robotoMediumItalic: string,
    robotoBold: string, 
    robotoBlack: string,
};

export type TextOptions = keyof FontsProps;