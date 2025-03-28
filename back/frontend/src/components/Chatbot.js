import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message) return;

        const userMessage = { user: "You", text: message };
        setChat([...chat, userMessage]);

        try {
            const response = await axios.post("http://127.0.0.1:8000/chatbot/", { message });
            const botMessage = { user: "AI Therapist", text: response.data.response };
            setChat([...chat, userMessage, botMessage]);
        } catch (error) {
            console.error("Error:", error);
        }

        setMessage("");
    };

    return (
        <div>
            <h2>AI Therapist Chatbot</h2>
            <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll" }}>
                {chat.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;


const fetchPastSessions = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/sessions/${sessionId}`);
        setChat(response.data.sessions);
    } catch (error) {
        console.error("Error fetching past sessions:", error);
    }
};

// Call this function when the page loads
useEffect(() => {
    fetchPastSessions();
}, []);
