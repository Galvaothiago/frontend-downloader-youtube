import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
`

export const ContainerLoading = styled.div`
    max-width: 54rem;
    width: 100%;
    height: 18rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    background: rgba(0, 0, 0, .8);
    position: absolute;
    pointer-events: none;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 27rem;
        width: 100%;
        height: 32rem;

        p {
            font-size: 1.2rem;
            text-align: center;
        }

        svg {
            font-size: 1.2rem; 
        }

    }

    

    p {
        color: #fff;
        font-size: 1.8rem;
        font-weight: 300;
    }

    svg {
        color: #ffff;
        font-size: 1.5rem;

        animation: ${rotate} .8s infinite ease;
    }
`