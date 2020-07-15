export default {
    size: {
        xxs: 4,
        xs: 8,
        s: 12,
        p: 16,
        xp: 20,
        xxp: 24,
        m: 28,
        g: 32,
        xg: 36,
        xxg: 40,
        gg: 44,
        xxgg: 48,
    },
    robotoLightItalic: 'Roboto Light Italic',
    robotoRegular: 'Roboto Regular',
    robotoItalic: 'Roboto Italic',
    robotoBold: 'Roboto Bold',
    robotoBlack: 'Roboto Black',
};

export interface FontsPropsSize {
    xxs: number;
    xs: number;
    s: number;
    p: number;
    xp: number;
    xxp: number;
    m: number;
    xm: number;
    xxm: number;
    g: number;
    xg: number;
    xxg: number;
    gg: number;
    xxgg: number;
};

export interface FontsProps {
    size: FontsPropsSize;
    robotoLightItalic: string,
    robotoRegular: string,
    robotoItalic: string,
    robotoBold: string,
    robotoBlack: string,
};

export type TextOptions = keyof FontsProps;

export type TextUnits = keyof FontsPropsSize;
