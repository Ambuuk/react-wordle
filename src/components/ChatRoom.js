import React, { useEffect, useState } from 'react'
import { socket } from '../App'
import { useAppContext } from '../context/AppContext'

export default function ChatRoom() {

    const [message, setMessage] = useState("")
    const [rcvMessage, setRcvMessage] = useState([])
    const [room, setRoom] = useState("")
    const { name } = useAppContext()

    const joinRoom = () => {
        socket.emit('join-room', room, name)
    }

    const sendMessage = () => {
        socket.emit('send-message', message, room)
        setRcvMessage((prevMsg) => {
            return [...prevMsg, message]
        })
    }

    useEffect(() => {
        socket.on("receive-message", (message, id) => {
            setRcvMessage((prevMsg) => {
                return [...prevMsg, message]
            })
        })
        return () => { }
    }, [socket])

    return (
        <div>
            <div className="message-container">
                {rcvMessage.map((k, i) => (
                    <div key={i} className="message-row">{k}</div>
                ))}
            </div>
            <input placeholder='Мессеж' onChange={(e) => {
                setMessage(e.target.value)
            }} />
            <button onClick={sendMessage}>ИЛГЭЭХ</button>
            <br></br><input placeholder='Өрөөний код...' onChange={(e) => {
                setRoom(e.target.value)
            }} />
            <button onClick={joinRoom}>ХОЛБОГДОХ</button>
        </div>
    )
}
