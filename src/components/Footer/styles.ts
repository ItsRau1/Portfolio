import styled from "styled-components";

export const FooterBox = styled.footer`
display: flex;
justify-content: space-between;
padding: 1rem 4rem;

background: ${props=>props.theme["grey-green"]};
backdrop-filter: blur(10px);
box-shadow: 2px 0 5px rgba(245, 245, 245, 0.05);

@media (max-width: 768px) {
       padding: 1rem 2rem;
       gap: 2rem; 
    }

    p {
        display: flex;
        align-items: center;

        background: ${props=>props.theme.white};
        border-radius: 99999rem;

        color:${props=>props.theme["grey-green"]};
        font-weight: 700;
        letter-spacing: 1px;

        cursor: default;

        @media (max-width: 768px) {
            font-size: 0.8rem;
            text-align: center;
    }

    }

    p::after{
        content: '●';
        color: ${props=>props.theme["grey-500"]};
        font-size: 0.5rem;
        margin: 0 0.4rem 0 0.5rem;
    }
    p::before{
        content: '●';
        color: ${props=>props.theme["grey-500"]};
        font-size: 0.5rem;
        margin: 0 0.5rem 0 0.4rem;
    }

    div{
        display:flex;
        gap: 1rem
    }

    a{
        text-decoration: none;
        background: ${props=>props.theme.white};
        border-radius: 50%;
        padding: 0.2rem;
        font-size: 1.2rem;

        color: ${props=>props.theme["grey-green"]};
        
        display: flex;
        align-items: center;

        transition: background-color 0.2s;
    }

    a:hover{
        background: ${props=>props.theme["grey-500"]};
    }

`