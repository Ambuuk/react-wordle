import io from 'socket.io-client'
import GameScreen from './components/GameScreen'
import LoginScreen from './components/LoginScreen'
import { Route, Routes } from 'react-router-dom'

export const socket = io.connect("http://localhost:3001")
function App() {
console.log("Test")
  return (
    <div className="App">
      <h1>Үгдэл</h1>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/game" element={<GameScreen />} />
      </Routes>
    </div>

  )
}

export default App