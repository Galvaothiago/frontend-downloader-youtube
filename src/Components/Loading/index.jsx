import { ContainerLoading } from './styles'

import { AiOutlineLoading } from 'react-icons/ai'

export function Loading({ content }) {
    return (
        <ContainerLoading>
            <p>{content}</p>
            <AiOutlineLoading />
        </ContainerLoading>
    )
}