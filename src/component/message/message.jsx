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
    Paper, TextField,
    Typography
} from "@mui/material";
import './message.css'

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
                backgroundColor: "blue",
                borderRadius: 10,
                padding: "20px"}}
            >
                <Grid item xs={5}>
                    <Grid>
                        <Typography variant="h4" component="h2" className="text-center text-white">
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
                <Grid item xs={7}>
                    <Grid>
                        <Paper elevation={1}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="random1" src="https://picsum.photos/200/300"/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Oui Oui"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid>
                        <TextField label="Message" variant="outlined" sx={{
                            marginTop:"10px",
                            width:"100%",
                            backgroundColor: "white"
                        }} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>


    );
};

export default Message;