import React, { useEffect, useState } from 'react'
import { socket } from '../App'

export default function Scoreboard() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        socket.on("user-connected", (users) => {
            setPlayers(users)
        })
        return () => { }
    }, [])

    return (
        <div>
            <div className="score">
                {players.map((k, i) => (
                    <div key={i} className="player-row">{k.name === "1" ? "ME" : k.name}</div>
                ))}
            </div>
        </div >
    )
}
