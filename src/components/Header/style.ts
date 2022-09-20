import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
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

    button {
        display: none;
        position: absolute;
        right: 1rem;
        top: 1rem;
        border: none;
        color: ${props=>props.theme["green-200"]};
        background: transparent;
        font-size: 2rem;
        line-height: 0;
    }

    ul {
        list-style-type: none;
        display: flex;
        gap: 4rem;
    }

    @media screen and (max-width: 500px){

    padding: 2rem 1rem;
    justify-content: center;



    ul{
        flex-direction: column;
        height: auto;
        gap: 0;
        width: 100%;
    }
    li:nth-child(1){
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        margin-top: 50px;
    }
    li{
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.555);
        text-align: center;
        margin-right: 0px;
        padding: 20px 0;
    }
    a{
        width: 100%;  
    }
    button{
        display: block;
    }
}
`
export const BoxToOut = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`