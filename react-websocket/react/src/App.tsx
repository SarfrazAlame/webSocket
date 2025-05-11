import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestMessage, setLatestMessage] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log("Connected")
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Recieved message:', message.data)
      setLatestMessage(message.data)
    }

    setSocket(socket)
  }, [])

  if (!socket) {
    return <div>
      Connecting to socket server...
    </div>
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={() => {
        socket.send(message)
        setMessage("")
      }
      }>Send</button>
      {latestMessage}
    </div>
  )
}

export default App
