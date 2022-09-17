import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', 'sans-serif';
    }
    body {
        background: linear-gradient(126deg, rgba(0,11,7,1) 0%, rgba(1,47,30,1) 100%);
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props=>props.theme["green-200"]};
        
    }
`