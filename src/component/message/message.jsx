import React, {useEffect, useState} from 'react';
import {
    Avatar,
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
    Chip
} from "@mui/material";
import Grow from '@mui/material/Grow';
import './message.css'
import Chat from "../chat/chat.jsx";
import axios from "axios";

const API_URL_CONVERSATION = "http://localhost:8080/api/conversation/createConversation";
const API_URL_USER = "http://localhost:8080/api/auth/getFriends";

const Message = () => {
    const [isActive, setIsActive] = useState(false);
    const [conversationId, setConversationId] = useState(-1);

    useEffect(() => {
        getFriendList(2)
    }, []);

    // DB'ye burada işleyeceğiz.
    const createConversation = (friendId, starterId) => {
        axios.post(API_URL_CONVERSATION + `?starterId=${starterId}&friendId=${friendId}`, {})
            .then((response) => {
                setConversationId(response.id);
            }).catch((err) => {
            console.log(err)
        })
        setIsActive(!isActive);
    }

    const getFriendList = (userId) => {
        axios.get(API_URL_USER + `?userId=${userId}`, {})
            .then((response) => {
                console.log(response)
            }).catch((err) => {
            console.log("Arkadaş listesi bulunamadı.")
        })
    }

    const addFriend = () =>{
        axios.post("http://localhost:8080/api/auth/addFriend" + "?userId=2&friendId=4", {})
            .then((response) => {
                console.log("arkadaş eklediniz.")
            }).catch((err) => {
            console.log("arkadaş ekleyemediniz.")
        })
    }


    // DB'den arkadaş listesini fetchliyeceğiz.

    const [friendList, setfriendList] = useState([
        {
            friendId: 1,
            firstName: "Mahmut",
            lastName: "Kiraz",
            photo: "...jpg",
        },

    ]);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh"
        }}
        >
            <Grid container spacing={3} sx={{
                width: 1400,
                height: 900,
                backgroundColor: "#EDF7F6",
                borderRadius: 10,
                padding: "20px",
                opacity: 0.86
            }}
            >
                <Grid item md={5}>
                    <Grid>
                        <Typography variant="h4" component="h2" className="text-center">
                            My Contacts
                        </Typography>
                        {/*Buraya mapleyerek friend list fetchleyeceğiz.*/}
                        <Paper square={false} elevation={1}>
                                {friendList.map((friend, index) => (
                                        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}} key={index}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar alt="random1"
                                                            src="https://picsum.photos/seed/picsum/200/300"
                                                            onClick={createConversation}
                                                            style={{cursor: "pointer"}}/>
                                                </ListItemAvatar>
                                                <ListItemText primary={friend.firstName} secondary="Jan 9, 2014"/>
                                            </ListItem>
                                            <Divider variant="inset" component="li"/>
                                        </List>
                                ))}

                        </Paper>
                    </Grid>
                </Grid>
                {isActive ? (
                        <Grid item md={7}>
                            <Grow
                                in={isActive}
                                style={{transformOrigin: '0 0 0'}}
                                {...(isActive ? {timeout: 1000} : {})}>
                                <Grid>
                                    <Chat/>
                                </Grid>
                            </Grow>
                        </Grid>
                    ) :
                    <Chip label="Start messaging by click your contacts!" color="primary" variant="outlined" style={{
                        display: "flex",
                        textAlign: "center",
                        marginTop: "100px",
                        marginLeft: "200px",
                        height: "100px",
                        width: "300px"
                    }}/>
                }
            </Grid>
       </Box>


    );
};

export default Message;