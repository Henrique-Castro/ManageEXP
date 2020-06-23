export default {
    robotoLightItalic: 'Roboto Light Italic',
    robotoRegular: 'Roboto Regular',
    robotoItalic: 'Roboto Italic',
    robotoBold: 'Roboto Bold',
    robotoBlack: 'Roboto Black',
};

export interface FontsProps {
    robotoLightItalic: string,
    robotoRegular: string,
    robotoItalic: string,
    robotoBold: string, 
    robotoBlack: string,
};

export type TextOptions = keyof FontsProps;