import styled from "styled-components";

export const Container = styled.div`
    padding: 14rem 8rem 5rem;

    strong {
        color: ${props=>props.theme["green-200"]};
    }
`

export const MainHeader = styled.div`
    margin: 0 0 10rem;
`

export const TextToHeader = styled.section`
    color: ${props=>props.theme.white};
    padding: 0 33rem 0 0;

    h1 {
        font-size: 3rem;
        margin: 0 0 1rem;
        text-align: center;
    }
    p {
        font-size: 1.4rem;
        letter-spacing: 1px;
        text-align: left;

    }
`
export const SkillSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    justify-content: center;

`

export const BoxToSkills = styled.section`
    font-size: 5rem;
    border: 1px solid ${props=>props.theme["green-600"]};
    padding: 2rem 3rem;
    border-radius: 8px;
    color: ${props=>props.theme.white};
    transition: transform 0.4s, border 0.4s;

    display: flex;
    align-items: center;

    &:hover{
        transform: scale(1.07);
        border: 1px solid ${props=>props.theme["green-200"]};
        box-shadow: 0 0 10px 1px ${props=>props.theme["green-200"]};
    }
`
export const TittleSkill = styled.div`
    font-size: 4rem;
    color: ${props=>props.theme.white};
    text-align: center;
    margin: 0 0 4rem;
`