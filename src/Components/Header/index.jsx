import { Input } from '../Input/index.jsx'
import { HeaderContainer } from './styles.js' 
export function Header({ onGetInfo, searching }) {
    return (
        <HeaderContainer>
                <Input searching={searching} onGetInfo={onGetInfo} />
        </HeaderContainer>
    )
}