import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    body{
        font-family: "Inter", serif;
        padding: 32px 24px;

        @media screen and (width>=1124px){
            padding: 32px 180px;
        }

        background-color: #161A1E;
    }

`;
