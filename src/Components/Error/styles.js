import styled from 'styled-components'

export const ContainerError = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    max-width: 54rem;
    width: 100%;
    height: 18rem;

    background: #fdfffc;

    p {
        font-size: 1.5rem;
        border-right: 2px solid black;
        padding-right: 1rem;
    }

    svg {
        font-size: 1.8rem;
    }

`