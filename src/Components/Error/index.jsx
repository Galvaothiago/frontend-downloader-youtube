import { ContainerError } from "./styles";
import { CgSmileSad } from 'react-icons/cg'
export function Error({ message }) {

    return (
        <ContainerError>
            <p>{message}</p>
            <CgSmileSad />
        </ContainerError>
    )
}