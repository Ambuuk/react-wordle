import React from 'react'

export default function Row({ guess, currentGuess }) {

    if (guess) {
        return (
            <div className="row past">
                {guess.map((k, i) => (
                    <div key={i} className={k.color}>{k.key}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')
        return (
            <div className="row current">
                {letters.map((k, i) => (
                    <div key={i} className="filled">{k}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return (
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
