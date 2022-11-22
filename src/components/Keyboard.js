import React, { useEffect, useState } from 'react'
import keyboardLetters from '../keyboard.json'

export default function Keyboard({ usedKeys }) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        setLetters(keyboardLetters.letters)
    }, [])

    return (
        <div className="keypad">
            {letters && letters.map(k => {
                const color = usedKeys[k.key]
                return (
                    <div key={k.key} className={color}>{k.key}</div>
                )
            })}
        </div>
    )
}