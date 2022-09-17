import styled from "styled-components";

export const Container = styled.div`

    padding: 9rem 8rem 6rem;
    display:flex;
    flex-direction: column;
    align-items: center;

    strong {
        color: ${props=>props.theme["green-200"]};
    }

`

export const TextHeader = styled.section`
    font-size: 2rem;
    letter-spacing: 1px;
    color: ${props=>props.theme.white};
`

export const SectionToProjects = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: center;

    margin: 4rem 0 0;
`

export const BoxToProjects = styled.div`
    border: solid 1px ${props=>props.theme["green-400"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    transition: transform 0.4s, border 0.4s, box-shadow 0.6s;

    width: 29%;

    color: ${props=>props.theme.white};

    &:hover{
        transform: scale(1.07);
        border: 1px solid ${props=>props.theme["green-200"]};
        box-shadow: 0 0 10px 1px ${props=>props.theme["green-200"]};
    }

    img {
        width: 100%;
    }

    h5 {
        font-size: 1.2rem;
        margin: 0.5rem 0;
    }

    p{
        text-align: center;
    }

    a {
        margin: 1rem 0 0;
        padding: 0.8rem 1rem;
        border-radius: 8px;
        display:flex;
        gap: 0.4rem;
        align-items: center;
        bottom: 0;

        text-decoration: none;
        font-weight: bold;
        letter-spacing: 1px;

        color:${props=>props.theme.white};
        background: ${props=>props.theme["green-600"]};

        transition: box-shadow 0.6s, background-color 0.4s, color 0.4s;
    }

    a:hover {
        box-shadow: 0 0 10px 1px ${props=>props.theme["green-600"]};
        background: transparent;
        color: ${props=>props.theme["green-200"]};
    }

`
