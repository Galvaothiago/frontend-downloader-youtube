import { useState } from 'react'
import { LoadingSearch } from './LoadingSearch/index.jsx'
import { InputContainer } from './styles.js'

export function Input({ onGetInfo, searching }) {
    const [ input, setInput ] = useState('')

    const handleUrl = (e) => {
        e.preventDefault()
        if(!input) {
            return 
        }
        
        onGetInfo(input)
        setInput('')
    }

    return (
        <InputContainer onSubmit={e => handleUrl(e)}>
            <input onChange={e => setInput(e.target.value)} value={input} type="text" autoFocus placeholder="Insert your URL here"/>
            <button onClick={e => handleUrl(e)}>Search</button>
            { searching && <LoadingSearch /> }
        </InputContainer>
    )
}