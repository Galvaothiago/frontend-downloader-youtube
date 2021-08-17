import styled, { keyframes } from 'styled-components'


const floatEffect = keyframes`
  0% {
    transform:  translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(0px);

  }
`

export const ContainerEmpty = styled.div`
    max-width: 54rem;
    width: 100%;
    height: 12rem;
    padding: .5rem;

    cursor: none;

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        p {
            font-size: 1.4rem;
            color: gray;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: 2px;
            line-height: 30px;

            font-weight: 300;
        }

        
        svg {
            height: 100px;
            width: 100px;
            filter: opacity(.6);
            animation: ${floatEffect} 2s infinite ease-in-out;
    
        }
        
      
    }
`