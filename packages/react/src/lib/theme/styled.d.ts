import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius?: string;
        baseSpace: string;

        colors: {
            primary: {
                100: string;
                200: string;
                300: string;
                400: string;
            };
            secondary: {
                100: string;
                200: string;
                300: string;
                400: string;
            };
            danger: {
                100: string;
                200: string;
                300: string;
                400: string;
            };

            warning: {
                100: string;
                200: string;
                300: string;
                400: string;
            };

            success: {
                100: string;
                200: string;
                300: string;
                400: string;
            };

            info: {
                100: string;
                200: string;
                300: string;
                400: string;
            };

            neutral: {
                25: string;
                50: string;
                100: string;
                200: string;
                300: string;
                400: string;
            };
        };

        spacing: {
            1?: string;
            2?: string;
            4?: string;
            7?: string;
            8?: string;
            12?: string;
            16?: string;
            20?: string;
            24?: string;
            30?: string;
            32?: string;
            40?: string;
            48?: string;
            56?: string;
            64?: string;
            72?: string;
            96: string;
            128: string;
            256: string;
            512: string;
        };

        layout?: {
            columns?: number;
            column?: number;
            columnGap?: string;
            rowGap?: string;
            fluidWidth?: string;
            fixedWidth?: string;
            largeBp?: string;
            mediumBp?: string;
            smallBp?: string;
        };

        elevation?: {
            soft: {
                low: string;
                medium: string;
                high: string;
            };
            medium: {
                low: string;
                medium: string;
                high: string;
            };
        };

        typography: {
            family: {
                base: string;
                heading: string;
                monospace: string;
            };

            fontSize: {
                hHero: string;
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                base: string;
                label: string;
                subLabel: string;
                helper: string;
            };

            lineHeight: {
                h0: string;
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
                base: string;
                label: string;
                subLabel: string;
                helper: string;
            };

            fontWeight: {
                regular: string;
                medium: string;
                bold: string;
            };
        };

        animation: {
            base: string;
        };
    }
}
