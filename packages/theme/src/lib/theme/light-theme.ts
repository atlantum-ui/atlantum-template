import { DefaultTheme } from 'styled-components';
import { colors, spacing, typography, elevation, layout } from './tokens';

export const lightTheme: DefaultTheme = {
    borderRadius: spacing[8],
    baseSpace: spacing[24],

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
        1: spacing[1],
        2: spacing[2],
        4: spacing[4],
        7: spacing[7],
        8: spacing[8],
        12: spacing[12],
        16: spacing[16],
        20: spacing[20],
        24: spacing[24],
        32: spacing[32],
        40: spacing[40],
        48: spacing[48],
        56: spacing[56],
        64: spacing[64],
        72: spacing[72],
        96: spacing[96],
        128: spacing[128],
        256: spacing[256],
        512: spacing[512],
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
            hHero: typography.size[56],
            h1: typography.size[48],
            h2: typography.size[40],
            h3: typography.size[32],
            h4: typography.size[24],
            h5: typography.size[20],
            h6: typography.size[18],
            base: typography.size[16],
            label: typography.size[14],
            subLabel: typography.size[10],
            helper: typography.size[8],
        },

        lineHeight: {
            h0: typography.lineHeight[64],
            h1: typography.lineHeight[56],
            h2: typography.lineHeight[48],
            h3: typography.lineHeight[40],
            h4: typography.lineHeight[32],
            h5: typography.lineHeight[24],
            h6: typography.lineHeight[24],
            base: typography.lineHeight[24],
            label: typography.lineHeight[20],
            subLabel: typography.lineHeight[16],
            helper: typography.lineHeight[12],
        },

        fontWeight: {
            regular: typography.fontWeight.regular,
            medium: typography.fontWeight.medium,
            bold: typography.fontWeight.bold,
        },
    },

    animation: {
        base: `0.2s ease-in-out`,
    },
};
