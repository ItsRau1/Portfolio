import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    gap: 4rem;
    padding: 1rem 7rem;
    position: fixed;
    width: 100vw;
    transition: background-color 0.6s, box-shadow 0.6s, backdrop-filter 0.6s;
    z-index: 9999;
    
    &.navbarColorChange {
        background: #1a2e21a9;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 5px rgba(245, 245, 245, 0.05);

    }


    a {
        text-decoration: none;
        font-weight: bold;
        color: ${props=>props.theme.white};


        :focus{
        box-shadow: none;
        outline: none;
    }
    }
    a::after {
        content: '';
        display: block;
        width: 0;
        height: 4px;
        background: ${props=>props.theme["green-200"]};
        transition: width 0.4s;
        border-radius: 4px;
    }

    a:hover::after {
        width: 100%;
    }
`
export const BoxToOut = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const TextAutoWriting = styled.div`
    margin: 3rem 0 0;

    font-size: 3rem;
    font-weight: 600;
    color: ${props=>props.theme["green-200"]};
`