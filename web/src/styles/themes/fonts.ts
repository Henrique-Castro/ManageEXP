export default {
    robotoMedium: 'Roboto Medium',
    robotoBold: 'Roboto Bold',
    robotoBlack: 'Roboto Black',
};

export interface FontsProps {
    robotoMedium: string,
    robotoBold: string, 
    robotoBlack: string,
};

export type TextOptions = keyof FontsProps;