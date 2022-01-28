import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    } 
`

export const Container = styled.span`
    right: -35px;
    position: absolute;

    animation: ${rotate} .5s infinite linear;

    svg {
        font-size: 1.5rem;
        color: #f94e65;
    }
`