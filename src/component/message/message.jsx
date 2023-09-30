import React from 'react';
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
    Typography
} from "@mui/material";
import './message.css'
import Chat from "../chat/chat.jsx";

const Message = () => {


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
                            Members
                        </Typography>
                        <Paper square={false} elevation={1}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random1" src="https://picsum.photos/seed/picsum/200/300"/>
                                    </ListItemAvatar>
                                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random2" src="https://picsum.photos/200/300"/>
                                    </ListItemAvatar>
                                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random3" src="https://picsum.photos/200/300">
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random4" src="https://picsum.photos/200/300">
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar alt="random5" src="https://picsum.photos/200/300">
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item md={7}>
                    <Grid>
                        <Chat/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    );
};

export default Message;