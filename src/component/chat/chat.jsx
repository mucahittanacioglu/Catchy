import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            // Create a new message object with a unique ID (you can use a library like uuid)
            const message = {
                id: messages.length + 1,
                text: newMessage,
                timestamp: new Date().toLocaleTimeString(),
            };

            // Add the new message to the list of messages
            setMessages([...messages, message]);

            // Clear the input field
            setNewMessage('');
        }
    };

    return (
        <div>
            <List>
                {messages.map((message) => (
                    <ListItem key={message.id}>
                        <ListItemText
                            primary={message.text}
                            secondary={message.timestamp}
                        />
                    </ListItem>
                ))}
            </List>
            <div>
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default Chat;