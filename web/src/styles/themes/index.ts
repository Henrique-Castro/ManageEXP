import 'styled-components';
import { DefaultTheme } from 'styled-components';

import colors from './colors';

import fonts from './fonts';

import units from './units';

export const LightTheme: DefaultTheme = {
    colors: {
        background: {
            primary: colors.primary,
            secondary: colors.primaryBackground,
            tertiary: colors.secondaryBackground,
            quaternary: colors.senary,
        },
        text: {
            primary: colors.primary,
            secondary: colors.secondary,
            tertiary: colors.tertiary,
            quaternary: colors.quaternary,
            quinary: colors.quinary,
            senary: colors.septenary,
            white: colors.white,
        },
        button: {
            def: {
                backgroundColor: colors.primary,
                textColor: colors.white,
            },
            logout: {
                backgroundColor: colors.error,
                textColor: colors.white,
            },
        },
        status: {
            error: colors.error,
            success: colors.success,
            warn: colors.warn,
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
        size: {
            xxs: fonts.size.xxs,
            xs: fonts.size.xs,
            s: fonts.size.s,
            p: fonts.size.p,
            xp: fonts.size.xp,
            xxp: fonts.size.xxp,
            m: fonts.size.m,
            g: fonts.size.g,
            xg: fonts.size.xg,
            xxg: fonts.size.xxg,
            gg: fonts.size.gg,
            xxgg: fonts.size.xxgg,
        },
        robotoLightItalic: fonts.robotoLightItalic,
        robotoRegular: fonts.robotoRegular,
        robotoItalic: fonts.robotoItalic,
        robotoBold: fonts.robotoBold,
        robotoBlack: fonts.robotoBlack,
    },
};
