import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorsProps;
        units: UnitsProps;
        fonts: FontsProps;
    }
};
