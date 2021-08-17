import styled from 'styled-components'

export const InputContainer = styled.form`
    max-width: 47rem;
    width: 100%;

    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


    input {
        width: 83%;
        height: 100%;

        border: 2px solid #011627;
        border-radius: 25px;
        outline: transparent;

        font-size: 1.2rem;
    
        padding: 1rem 1.5rem;

        &::placeholder {
            font-size: 1.2rem;
        }
    }

    button {
        width: 15%;
        height: 100%;

        background-image: linear-gradient( #f71735, #f94e65) ;
        border: none;
        border-radius: 20px;

        color: #fff;
        font-weight: 700;
        font-size: .79rem;
        cursor: pointer;

    }
`