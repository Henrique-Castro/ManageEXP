import 'styled-components';
import { DefaultTheme } from 'styled-components';

import colors, { ColorsProps } from './colors';

import fonts, { FontsProps } from './fonts';

import units, { UnitsProps } from './units';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorsProps;
        units: UnitsProps;
        fonts: FontsProps;
    }
}

export const LightTheme: DefaultTheme = {
    colors: {
        background: {
            primary: colors.primary,
            secondary: colors.primaryBackground,
            tertiary: colors.secondaryBackground,
        },
        text: {
            primary: colors.primary,
            secondary: colors.secondary,
            tertiary: colors.tertiary,
            quaternary: colors.quaternary,
            quinary: colors.quinary,
            white: colors.white,
        },
        button: {
            def: {
                backgroundColor: colors.primary,
                textColor: colors.white,
            },
        },
    },
    units: {
        spacing: {
            none: units.spacing.none,
            ultraSmall: units.spacing.ultraSmall,
            xxxxSmall: units.spacing.xxxxSmall,
            xxxSmall: units.spacing.xxxSmall,
            xxSmall: units.spacing.xxSmall,
            xSmall: units.spacing.xSmall,
            small: units.spacing.small,
            medium: units.spacing.medium,
            large: units.spacing.large,
            xLarge: units.spacing.xLarge,
            xxLarge: units.spacing.xxLarge,
            xxxLarge: units.spacing.xxxLarge,
            xxxxLarge: units.spacing.xxxxLarge,
            ultraLarge: units.spacing.ultraLarge,
        },
        borderRadius: {
            xxSmall: units.borderRadius.xxSmall,
            xSmall: units.borderRadius.xSmall,
            small: units.borderRadius.small,
            medium: units.borderRadius.medium,
            large: units.borderRadius.large,
        },
        button: {
            fontSmall: units.button.fontSmall,
            fontMedium: units.button.fontMedium,
            fontLarge: units.button.fontLarge,
            height: units.button.height,
        },
        input: {
            fontSmall: units.input.fontSmall,
            fontMedium: units.input.fontMedium,
            height: units.input.height,
        },
    },
    fonts: {
        robotoLightItalic: fonts.robotoLightItalic,
        robotoMedium: fonts.robotoMedium,
        robotoMediumItalic: fonts.robotoMediumItalic,
        robotoBold: fonts.robotoBold,
        robotoBlack: fonts.robotoBlack,
    },
};
