import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography, elevation, layout } from './tokens';

export const lightTheme: DefaultTheme = {
    borderRadius: spacing.s8,
    baseSpace: spacing.s24,

    colors: {
        primary: {
            100: colors.blue[50],
            200: colors.blue[500],
            300: colors.blue[600],
            400: colors.blue[700],
        },
        secondary: {
            100: colors.yellow[50],
            200: colors.yellow[500],
            300: colors.yellow[600],
            400: colors.yellow[700],
        },

        neutral: {
            25: colors.white,
            50: colors.greyBlue[50],
            100: colors.greyBlue[100],
            200: colors.greyBlue[200],
            300: colors.greyBlue[500],
            400: colors.greyBlue[700],
        },

        danger: {
            100: colors.red[50],
            200: colors.red[500],
            300: colors.red[600],
            400: colors.red[700],
        },

        warning: {
            100: colors.orange[50],
            200: colors.orange[500],
            300: colors.orange[600],
            400: colors.orange[700],
        },

        success: {
            100: colors.green[50],
            200: colors.green[500],
            300: colors.green[600],
            400: colors.green[700],
        },

        info: {
            100: colors.cyan[50],
            200: colors.cyan[500],
            300: colors.cyan[600],
            400: colors.cyan[700],
        },
    },

    spacing: {
        1: spacing.s1,
        2: spacing.s2,
        4: spacing.s4,
        7: spacing.s7,
        8: spacing.s8,
        10: spacing.s10,
        12: spacing.s12,
        16: spacing.s16,
        20: spacing.s20,
        22: spacing.s22,
        24: spacing.s24,
        30: spacing.s30,
        32: spacing.s32,
        36: spacing.s36,
        40: spacing.s40,
        48: spacing.s48,
        64: spacing.s64,
        72: spacing.s72,
    },

    layout: {
        columns: layout.columns,
        column: layout.column,
        columnGap: layout.columnGap,
        rowGap: layout.rowGap,
        fluidWidth: layout.fluidWidth,
        fixedWidth: layout.fixedWidth,
        largeBp: layout.largeBp,
        mediumBp: layout.mediumBp,
        smallBp: layout.smallBp,
    },

    elevation: {
        soft: {
            low: elevation.lightTheme.soft.low,
            medium: elevation.lightTheme.soft.medium,
            high: elevation.lightTheme.soft.high,
        },
        medium: {
            low: elevation.lightTheme.soft.low,
            medium: elevation.lightTheme.soft.medium,
            high: elevation.lightTheme.soft.high,
        },
    },

    typography: {
        family: {
            base: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            heading: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
            monospace: `'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
        },
        fontSize: {
            hHero: typography.size.h0,
            h1: typography.size.h1,
            h2: typography.size.h2,
            h3: typography.size.h3,
            h4: typography.size.h4,
            h5: typography.size.h5,
            h6: typography.size.h6,
            base: typography.size.base,
            label: typography.size.label,
            subLabel: typography.size.subLabel,
            helper: typography.size.helper,
        },

        lineHeight: {
            h0: typography.lineHeight.h0,
            h1: typography.lineHeight.h1,
            h2: typography.lineHeight.h2,
            h3: typography.lineHeight.h3,
            h4: typography.lineHeight.h4,
            h5: typography.lineHeight.h5,
            h6: typography.lineHeight.h6,
            base: typography.lineHeight.base,
            label: typography.lineHeight.label,
            subLabel: typography.lineHeight.subLabel,
            helper: typography.lineHeight.helper,
        },

        fontWeight: {
            regular: typography.fontWeight.regular,
            semiBold: typography.fontWeight.semiBold,
            bold: typography.fontWeight.bold,
        },
    },

    animation: {
        base: `0.2s ease-in-out`,
    },
};
