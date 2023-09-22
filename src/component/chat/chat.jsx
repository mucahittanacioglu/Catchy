import React, {useEffect, useRef, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Avatar, Divider, Pagination} from "@mui/material";
import './chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(10);
    const messagesContainerRef = useRef(null);
    const messageHeightLimit = 650;

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

            setNewMessage('');
        }
    };

    const displayMessages = () => {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return messages.slice(startIndex, endIndex);
    };

    const calculateMessagesHeight = () => {
        if (messagesContainerRef.current) {
            return messagesContainerRef.current.clientHeight;
        }
        return 0;
    };

    useEffect(() => {
        if (calculateMessagesHeight() > messageHeightLimit) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [messages])

    return (
        <div>
            <div ref={messagesContainerRef} style={{ maxHeight: `${messageHeightLimit}px`, overflowY: 'auto'}}>
                <List>
                    {displayMessages().map((message) => (
                        <>
                        <ListItem key={message.id} className="chatBg">
                            <ListItemText
                                primary={message.text}
                                secondary={message.timestamp}
                            />
                            <span>
                                <Avatar alt="random1" src="https://picsum.photos/seed/picsum/200/300"/>
                            </span>
                        </ListItem>
                        <Divider/>
                        </>
                    ))}
                </List>
            </div>
            <div>
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    sx={{marginTop:"10px"}}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSendMessage}
                    className="sendButton"
                    sx={{marginTop: "10px", width:"150px"}}
                >
                    Send
                </Button>
                <Pagination
                    count={Math.ceil(messages.length / rowsPerPage)} // Calculate the total number of pages
                    page={page}
                    onChange={(event, newPage) => setPage(newPage)} // Handle page change
                    variant="outlined"
                    shape="rounded"
                    className="d-flex justify-content-center "
                />
            </div>
        </div>
    );
};

export default Chat;