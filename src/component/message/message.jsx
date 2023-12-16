import React, {useState} from 'react';
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
const Message = () => {
    const [isActive, setIsActive] = useState(false);

    // DB'ye burada işleyeceğiz.
    const createConversation = () => {
        setIsActive(!isActive);
    }

    // DB'den arkadaş listesini fetchliyeceğiz.

    const [friendList, setfriendList] = useState([
        {
            id: 1,
            firstName: "Mahmut",
            lastName: "Kiraz",
            photo:"...jpg",
        },

    ]);

    return (
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
        }}
        >
            <Grid container  spacing={3} sx={{width: 1400,
                height: 900,
                backgroundColor: "#EDF7F6",
                borderRadius: 10,
                padding: "20px",
                opacity: 0.86}}
            >
                <Grid item md={5}>
                    <Grid>
                        <Typography variant="h4" component="h2" className="text-center">
                            My Contacts
                        </Typography>
                        {/*Buraya mapleyerek friend list fetchleyeceğiz.*/}
                        <Paper square={false} elevation={1}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random1" src="https://picsum.photos/seed/picsum/200/300" onClick={createConversation} style={{cursor:"pointer"}}/>
                                    </ListItemAvatar>
                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random2" src="https://picsum.photos/200/300" onClick={createConversation} style={{cursor:"pointer"}}/>
                                    </ListItemAvatar>
                                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random3" src="https://picsum.photos/200/300" onClick={createConversation} style={{cursor:"pointer"}}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" onClick={createConversation} style={{cursor:"pointer"}}/>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random4" src="https://picsum.photos/200/300" onClick={createConversation} style={{cursor:"pointer"}} >
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random5" src="https://picsum.photos/200/300" onClick={createConversation} style={{cursor:"pointer"}}>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                {isActive ? (
                        <Grid item md={7}>
                                            <Grow
                                                in={isActive}
                                                style={{ transformOrigin: '0 0 0' }}
                                                {...(isActive ? { timeout: 1000 } : {})}>
                                                <Grid>
                                                    <Chat/>
                                                </Grid>
                                            </Grow>
                        </Grid>
                ) :
                    <Chip label="Start messaging by click your contacts!" color="primary" variant="outlined" style={{
                        display:"flex",
                        textAlign: "center",
                        marginTop:"100px",
                        marginLeft:"200px",
                        height:"100px",
                        width:"300px"
                    }}/>
                }
            </Grid>
        </Box>


    );
};

export default Message;