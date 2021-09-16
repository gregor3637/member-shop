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

        //#FF0000
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #10121A;
        --background-dark-grey: #e4e4e4;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --border-color: #cbced8;
        --white-color: #FFF;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;

        --line: 1px solid var(--border-color);
        --border-primary: 1px solid var(--primary-color);
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
        --white-color: #151515;
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
        font-family: var(--font-primary), sans-serif;
    }

    html {
        background-color: orange;
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px

        @media only screen and (max-width: $bp-largest) {
            /* font-size: 50%; */
        }
    }
        
    body {
        font-family:  var(--font-primary);
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
        font-weight: 300;
        line-height: 1.6;
    }
`;

export default GlobalStyle;
