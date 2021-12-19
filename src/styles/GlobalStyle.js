import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    .light-theme { 
        // RESPONSIVE BREAKPOINTS
        --bp-largest: 75em;   // 1200px
        --bp-large: 62.5em;   // 1000px
        --bp-medium: 50em;    // 800px;
        --bp-small: 37.5em;    // 600px;

        --font-primary: "Poppins";
        --font-countdownTimer: 'B612 Mono';
        --font-countdownTimerSecond: 'monospace';

        --fontSize-dropdown: 1.8rem;
        --fontSize-navigation: 1.8rem;

        --fontWeight-navigation: 600;
        --fontWeight-navigation: 600;

        --margin-section-bottom: 10rem;

        //#FF0000
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --color-white: #fff;
        --color-black: #000;
        --color-red-pale: #f67d7d;
        --color-red-bright: #ff0000;
        --color-pageMain-headings: #585858;
        --color-border: #cbced8;
        --color-border-light: #e6e7eb;
        --color-border-focus: #ff0000;
        --color-border-disabled: #ddd;
        --color-text: #555;
        --color-text-disabled: #ccc;
        --color-none: rgba(0,0,0,0);

        --button-color-blue: #2081e2;
        
        --border-color: #cbced8;
        --button-black: #000;
        --background-dark-color: #10121A;
        --background-dark-grey: #e4e4e4;
        --color-button-dark-inactive: #9b9b9b;
        --color-button-dark-hover: #000;
        --button-disabled: #7c7c7c;
        --color-link-blue: #2080df;
        --color-scrollbar: #808080;
        /* --background-light-color: #F1F1F1; */
        --background-light-color: #fffdd9;
        --background-light-color-2: rgba(3,127,255,.3);
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

        --line: 1px solid var(--border-color);
        --border-primary: 1px solid var(--primary-color);

        --anchorTag-color-link: #555;
        --anchorTag-color-hover: #000;

        --article-blue: #345d7c;

        --color-h6:  var(--border-color);

        --boxShadow-dropdown: rgba(0, 0, 0, 0.35) 0px 0px 15px;

        --marketplace-border-radius: 1.2rem;
        --marketplace-button-border-radius: 0.6rem;
    }
    .dark-theme{ 
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --border-color: #2e344e;
        --color-white: #151515;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }


    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* box-sizing: content-box; */
        font-family: var(--font-primary), sans-serif;
    }

    html {
        background-color: orange;
        /* box-sizing: content-box; */
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
        height:100%;

        @media only screen and (max-width: $bp-largest) {
            /* font-size: 50%; */
        }
    }

    #root {
        height: 100%;
        background-color: #555;
    }
        
    body {
        font-family:  var(--font-primary);
        background-color: var(--color-white);
        color: var(--font-light-color);
        font-weight: 300;
        line-height: 1.6;
        height:100%;
    }

`;

export default GlobalStyle;
