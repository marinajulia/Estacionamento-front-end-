import styled from "styled-components";

export const Container = styled.header`
    background: var(--grey);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    height: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    button{
        font-size: 1rem;
        color: #fff;;
        background: var(--blue);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        margin-bottom: 20px;
        margin-left: 20px;
        &:hover{
            filter: brightness(0.9);
        }
    }
`