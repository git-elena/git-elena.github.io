import React from 'react';
import ChatForm from '../components/ChatForm.tsx';

const Chat = () => {
  return (
    <div className="page-chat h-screen w-full">
      <div className='chat-page page mt-5 pt-3 center h-full'>
        <div style={{ marginTop: '5em' }}>
          <h1 className="text-2xl font-bold mb-4">Chat Form</h1>
        </div>
        <ChatForm />
      </div>
      {/* <HomeContact /> */}
    </div>
  );
};

export default Chat;
