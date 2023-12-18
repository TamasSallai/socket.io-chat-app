import Sidebar from './Sidebar/Sidebar'
import Chat from './Chat/Chat'
import './ChatLayout.css'

const ChatLayout = () => {
  return (
    <div className="chat-layout">
      <Sidebar />
      <Chat />
    </div>
  )
}

export default ChatLayout
