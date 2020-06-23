export default {
    size: {
        xxs: 8,
        xs: 10,
        s: 12,
        p: 14,
        xp: 16,
        xxp: 18,
        m: 24,
        g: 42,
        xg: 48,
        xxg: 54,
        gg: 64,
        xxgg: 40,
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
