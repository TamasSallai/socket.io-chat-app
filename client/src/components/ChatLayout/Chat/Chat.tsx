import ChatHeader from './ChatHeader/ChatHeader'
import ChatForm from './ChatForm/ChatForm'
import Messages from './Messages/Messages'
import './Chat.css'

const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />

      <Messages />

      <ChatForm />
    </div>
  )
}

export default Chat
