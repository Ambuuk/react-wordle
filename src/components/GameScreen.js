import React, { useEffect, useState } from 'react'
import ChatRoom from './ChatRoom'
import Scoreboard from './Scoreboard'
import Wordle from './Wordle'
import dictionary from '../dictionary.json'
import { useAppContext } from '../context/AppContext'

export default function GameScreen() {
  const { name } = useAppContext()
  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const randomSolution = dictionary.solutions[Math.floor(Math.random() * dictionary.solutions.length)]
    setSolution(randomSolution)
  }, [setSolution])

  return (
    <div>
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div className="chatRoom">
          <ChatRoom />
        </div>
        <div className="gameScreen">
          {solution && <Wordle solution={solution} />}
        </div>
        <div className="scoreboard">
          <Scoreboard />
        </div>
      </div>
    </div>
  )
}
