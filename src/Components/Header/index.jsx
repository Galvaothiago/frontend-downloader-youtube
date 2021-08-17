import { Input } from '../Input/index.jsx'
import { HeaderContainer } from './styles.js' 
export function Header({ onGetInfo }) {
    return (
        <HeaderContainer>
                <Input onGetInfo={onGetInfo} />
        </HeaderContainer>
    )
}