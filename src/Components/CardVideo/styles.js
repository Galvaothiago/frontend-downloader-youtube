import styled,{ keyframes } from 'styled-components'

const initialTransform = keyframes`
  from {
    transform:  translateY(-5rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const CardContainer = styled.div`
    max-width: 54rem;
    width: 100%;
    height: 18rem;

    position: relative;

    animation: ${initialTransform} .5s linear;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;

    background: #fdfffc;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;

        max-width: 30rem;
        width: 100%;

        height: 26rem;

        position: relative;
        animation: ${initialTransform} .5s linear;

        img {
            width: 200px;
            height: 18rem;
        }

        h2 {
            margin-top: 2rem;
        }
    }

    img {
        flex: .3;
        max-width: 22rem;
        height: 16rem;

        border-radius: 5px;
    }

    > div {
        flex: .7;
        width: 100%;
        height: 100%;

        padding: 0 1rem;

        > div {
            h2 {
                font-size: 1.3rem;
                font-weight: 300;
                }

            > div {
                width: 100%;
                height: 3.5rem;

                margin-top: 2rem;
                padding: .3rem;

                background: #f2f4f3;
                display: flex;
                align-items: center;
                justify-content: space-around;

                div {
                    display: flex;
                    align-items: center;
                    gap: .3rem;

                    svg {
                        font-size: 1.1rem;
                        color: black;
                    }
    
                    p {
                        font-weight: 300;
                        font-size: 1rem;
                    
                        border-radius: 10px;
    
                        /* padding: .9rem; */
                    }

                    span {
                        font-size: 1.1rem;
                        font-weight: 700;
                        border-radius: 10px;
    
                        /* padding: .9rem; */
                    }
                }


            }

        }

        > footer {
            width: 100%;
            height: 7rem;

            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: .5rem;

            button {
                    width: 8rem;
                    height: 2.5rem;

                    background-image: linear-gradient( #f71735, #f94e65);
                    color: #fff;
                    font-size: 1rem;
                    border: none;

                    border-radius: 3px;
                    cursor: pointer;
                    animation: all .3s;

                    &:hover {
                        filter: brightness(.9);
                    }
                }
    
        }
    }
`