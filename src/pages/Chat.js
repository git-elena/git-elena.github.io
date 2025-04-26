import React from 'react'
import ChatForm from '../components/ChatForm.tsx'


const Chat = () => {
  return (
    <div className="page-chat h-screen">
      <div className='chat-page page mt-5 pt-3 center h-full'>
        <ChatForm />
      </div>
      {/* <HomeContact /> */}
    </div>
  )
}

export default Chat
