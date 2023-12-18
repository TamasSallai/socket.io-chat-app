import './ChatForm.css'

const ChatForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <input type="text" placeholder="Write a message..." />
      <button>Send</button>
    </form>
  )
}

export default ChatForm
