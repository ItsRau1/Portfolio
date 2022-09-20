import styled from "styled-components";

export const Container = styled.div`

    padding: 12rem 8rem 6rem;
    display:flex;
    flex-direction: column;
    align-items: center;

    strong {
        color: ${props=>props.theme["green-200"]};
    }
    @media (max-width: 768px) {
        padding: 12rem 2rem 0;
        overflow: hidden;
    }

`

export const TitleText = styled.section`
        color:${props=>props.theme.white};
        font-size: 2rem;
        letter-spacing: 1px;
        font-weight: 700;
        margin: 9rem 0 0;

        @media (max-width: 768px) {
            margin: 6rem 0 0;
            text-align: center;
        }
`

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;

    margin: 4rem 0 0;
    width: 50%;

    @media (max-width: 768px) {
            margin: 3rem 0 2rem;
            width: 100%;
        }
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        input{
            border: none;
            border-radius:4px;
            padding: 1rem 1.5rem;
            color: ${props=>props.theme.white};
            letter-spacing: 1px;
            font-weight: 700;
            background: ${props=>props.theme["grey-900"]};
            width: 100%;
        }

        input::placeholder{
            color: ${props=>props.theme["grey-500"]};
        }

        button{
            color: ${props=>props.theme.white};
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 1px;
            background: ${props=>props.theme["green-400"]};
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 8px;
            margin: 2rem 0 0;
            transition: background-color 0.4s, color 0.4s;
            cursor: pointer;
        }
        button:hover{
            background: ${props=>props.theme["green-600"]};
            color: ${props=>props.theme["grey-500"]};
        }
    }
`
export const DownloadSection = styled.section`
    color:${props=>props.theme.white};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-size: 2.5rem;
        letter-spacing: 1px;
    }
    a {
        text-decoration: none;
            color: ${props=>props.theme.white};
            font-weight: 600;
            font-size: 1.1rem;
            letter-spacing: 1px;
            background: ${props=>props.theme["green-400"]};
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 999rem;
            transition: background-color 0.4s, color 0.4s;
            cursor: pointer;

        &:hover{
            background: ${props=>props.theme["green-600"]};
            color: ${props=>props.theme["grey-500"]};
        }
    }
`