import { createGlobalStyle } from 'styled-components';

import RobotoLightItalic from '../assets/fonts/Roboto-LightItalic.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoItalic from '../assets/fonts/Roboto-Italic.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoBlack from '../assets/fonts/Roboto-Black.ttf';

export default createGlobalStyle`

    @font-face {
        font-family: 'Roboto Light Italic';
        font-style: normal;
        font-weight: 300;
        src: url(${RobotoLightItalic});
    };

    @font-face {
        font-family: 'Roboto Regular';
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoRegular});
    };

    @font-face {
        font-family: 'Roboto Italic';
        font-style: normal;
        font-weight: 400;
        src: url(${RobotoItalic});
    };

    @font-face {
        font-family: 'Roboto Bold';
        font-style: normal;
        font-weight: 700;
        src: url(${RobotoBold});
    }

    @font-face {
        font-family: 'Roboto Black';
        font-style: normal;
        font-weight: 900;
        src: url(${RobotoBlack});
    }

    :root { font-size: 16px };

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    };

    html,
    body {
        font-family: ${({ theme }) => theme.fonts.robotoBlack}, Arial, Helvetica, sans-serif;
        background-color: ${({ theme }) => theme.colors.background.secondary};
        -webkit-font-smoothing: antialiased;
    };

    ul { list-style: none };

    a { text-decoration: none };

`;