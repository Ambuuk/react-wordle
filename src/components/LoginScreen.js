import React, { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function LoginScreen() {
    const [name, setName] = useState("")

    const { login } = useAppContext()

    const onClick = () => {
        login(name)
    }

    return (
        <div>
            <input value={name} className='loginInput' placeholder='Нэрээ оруул' onChange={(e) => {
                setName(e.target.value)
            }} />
            <button disabled={!name} className='btn loginButton' onClick={onClick}>Нэвтрэх</button>
        </div>
    )
}
