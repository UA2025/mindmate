import React, { useState } from 'react';
import axios from 'axios';
import './styles/Chatbot.css';
import Sidebar from './Components/Sidebar';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        try {
            const newMessage = { text: message, fromUser: true };
            setMessages(prevMessages => [...prevMessages, newMessage]);
    
            const res = await axios.post('http://localhost:5000/chatbot', { message });
    
            setMessages(prevMessages => [...prevMessages, { text: res.data.response, fromUser: false }]);
            
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    
    
    return (
        <>
            <Sidebar />
            <div className="chat-container">
                <h1>AI Assistant</h1>
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.fromUser ? 'sent' : 'received'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
