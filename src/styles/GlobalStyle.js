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

        --fontSize-navigation: 1.8rem;
        --fontSize-dropdown: 1.4rem;

        --fontWeight-navigation: 600;
        --fontWeight-navigation: 600;

        --margin-section-bottom: 10rem;


        --side-panel-border-radius: 0.5rem;

        /* --home-page--buttons--border-radius: 1rem; */
        --home-page--buttons--border-radius: 9999px;

        //--------------------------------------------------------------
        //--------------------------------------------------------------
        //-------------------------market-filters-----------------------
        //--------------------------------------------------------------
        //--------------------------------------------------------------
        --market-filters--border--color-enabled: #cbced8;
        --market-filters--border--color-disabled: #cbced8;
        
        --market-filters--outerWrapper-radius: 0.4rem;
        --market-itemsWrapper-header-elements-border-radius: 0.9rem;
        
        
        --market-filters--button-dropdown--bgColor-hover: #f2f2f2;
        --market-filters--button-dropdown--border-radius: 0.6rem;
        
        //----------------------button-action
        //bgColor
        --market-filters--button-action--bgColor-enabled: var(--color-none);
        --market-filters--button-action--bgColor-disabled: #e6e6e6;//e6e6e6
        --market-filters--button-action--bgColor-active: #2081e2;
        --market-filters--button-action--bgColor-hover: #2081e2;
        //color
        --market-filters--button-action--color-active: #2081e2;
        --market-filters--button-action--color-hover: var(--color-white);
        --market-filters--button-action--color-disabled: #5e5e5e;
        //border
        --market-filters--button-action--border-radius: 1rem;

        //----------------------button-toggle
        //bgColor
        --market-filters--button-toggle--bgColor-enabled:  var(--color-none);
        --market-filters--button-toggle--bgColor-disabled:  #b9dcff;
        --market-filters--button-toggle--bgColor-active:  #2081e2;//
        --market-filters--button-toggle--bgColor-hover:  #b9dcff;
        //color
        --market-filters--button-toggle--color: var(--color-black);
        --market-filters--button-toggle--color-active: var(--color-white);
        //border
        --market-filters--button-toggle--border-radius: 1rem;

        
        //----------------------button-collection
        //bgColor
        --market-filters--collection--button--bgColor-enabled:  var(--color-none);
        --market-filters--collection--button--bgColor-hover:  #f2f2f2;
        //color
        --market-filters--collection--button--color: var(--color-black);
        --market-filters--collection--button--color-active:  var(--color-white);
        //border
        --market-filters--collection--button--border-radius: 1rem;
        

        //----------------------filter-Price
        //---currency--bgColor
        --market-filters--price--currency-select--bgColor: var(--color-white);
        //---currency--border
        --market-filters--price--currency-select--border-color: var(--color-border);
        --market-filters--price--currency-select--border-color-focus: var(--button-color-blue);
        --market-filters--price--currency-select--border-color-hover: var(--button-color-blue);
        //---currency-rad
        --market-filters--price--currency-select--border-radius: 1rem;
        
        //---price--placeholder
        --market-filters--price--input-price--placeholder-color:  var(--color-black);
        //---price--border-color
        --market-filters--price--input-price--border-color: var(--color-border);
        --market-filters--price--input-price--border-color-focus: var(--button-color-blue);
        --market-filters--price--input-price--border-color-hover: var(--button-color-blue);
        //---price--border-rad
        --market-filters--price--input-price--border-radius: 1rem;



        


        //-------------------------------
        //-------------------------------
        //-------------------------------

        

        --test-g: #008000;
        --test-y: #ffff00;
        --test-r: #ff0000;
        --test-t: #ff00b3;


        /* --test-g: #fff;
        --test-y: #fff;
        --test-r: #fff; 
        --test-t: #fff;*/
        //#FF0000
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --color-white: #fff;
        --color-black: #000;
        --color-grey10: #f2f2f2;
        --color-grey15: #eaeaea;
        --color-grey20: #e1e1e1;
        --color-grey40: #9e9e9e;
        --color-grey50: #777;
        --color-grey70: #505050;
        --color-green: #008000;
        --color-red-pale: #f67d7d;
        --color-red-bright: #ff0000;
        --color-blue: #2081e2;
        --color-blue-light: #b9dcff;//1890ff
        --color-pageMain-headings: #585858;
        --color-border: #cbced8;
        --color-border-light: #e6e7eb;
        --color-border-focus: #ff0000;
        --color-border-disabled: #ddd;
        --color-text: #555;
        --color-text-disabled: #ccc;
        --color-none: rgba(0,0,0,0);

        //----------- action button
        --action-button--background--active:#2081e2;
        --action-button--background--hover:#014cec;
        --action-button--background--disabled:#e5e5e5;

        --action-button--color--active: var(--color-white);
        --action-button--color--disabled: #909090;

        --action-button--border-radius: 1rem;
        //--------------------------------

        --button-color-blue: #2081e2;//1890ff
        --button-color-blue-light: #b9dcff;//1890ff
        --button-disabled: #7c7c7c;
        --button-black: #000;

        --background-search: #f5f5f5;
        --background-search-focused: #e5e5e5;

        /* --marketplace-button-background: #e4e6eb; */
        --marketplace-button-background: #e4e6eb;
        --marketplace-button-grey-light: #f2f2f2;
        --marketplace-background: #fff;

        --fb-button-secondary-hover: #e4e6e9;
        --fb-button-secondary-active: #d8d9dc;

        /* --marketplace-button-background: #fff;
        --marketplace-background: #e4e6eb; */
        
        --background-dark-color: #10121A;
        --background-dark-grey: #e4e4e4;
        --color-button-dark-inactive: #9b9b9b;
        --color-button-dark-hover: #000;
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
        --border-color: #cbced8;
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

    .slick-slider-fadeee .slick-track {
        -webkit-transform: none!important;
        -moz-transform: none!important;
        -ms-transform: none!important;
        -o-transform: none!important;
        transform: none!important;

        /* opacity: 0.511; */
    }

    @keyframes fade-out {
        0%   {opacity: 1;}
        100% {opacity: 0;}
    }
    @keyframes fade-in {
        0%   {opacity: 0;}
        100% {opacity: 1;}
    }

    .slick-item--fade-in { 
        animation: fade-in 1s;
        /* animation-name: fade-in; */
        /* animation-duration: 2s; */
        opacity: 1;

        /* .auction-item {
        } */
    }

    .slick-item--fade-out { 
        animation: fade-out 1s;
        /* animation-name: fade-out; */
        /* animation-duration: 1s; */
        opacity: 0; // ,<<<<<<--- has to be here because after transtion ends, opacity is set ot 1

        /* .auction-item {
            opacity: 0;
            animation-name: fade-out;
            animation-duration: 0.2s;
        } */
    }
`;

export default GlobalStyle;
