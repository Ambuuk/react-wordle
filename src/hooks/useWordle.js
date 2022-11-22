import { useState } from 'react'

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((k) => {
            return { key: k.toUpperCase(), color: 'grey' }
        })

        formattedGuess.forEach((k, i) => {
            if (solutionArray[i] === k.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((k, i) => {
            if (solutionArray.includes(k.key) && k.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                // Ene hud shalgalt ym shg bna
                solutionArray[solutionArray.indexOf(k.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setUsedKeys(prevUsedKeys => {
            formattedGuess.forEach(l => {
                const currentColor = prevUsedKeys[l.key]
                if (l.color === 'green') {
                    prevUsedKeys[l.key] = 'green'
                    return
                }
                if (l.color === 'yellow' && currentColor !== 'green') {
                    prevUsedKeys[l.key] = 'yellow'
                    return
                }
                if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
                    prevUsedKeys[l.key] = 'grey'
                    return
                }
            })

            return prevUsedKeys
        })

        setCurrentGuess('')
    }

    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            if (turn > 5) {
                console.log("you lost")
                return
            }

            if (history.includes(currentGuess)) {
                console.log("already")
                return
            }

            if (currentGuess.length !== 5) {
                console.log("5 urttai hiigeech")
                return
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
        }

        if (key === 'Backspace') {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }
        if (/^[а-я,А-Я,ү,Ү,ө,Ө,ё,Ё]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key.toUpperCase())
            }
        }
    }

    return { turn, currentGuess, guesses, isCorrect, handleKeyup, usedKeys }
}

export default useWordle