import React,{useState,useContext} from 'react'
import {SwipeableDrawer,Avatar,Divider,Button,List,ListItem,ListItemIcon,ListItemText,withStyles} from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import FeedbackIcon from '@material-ui/icons/Feedback'
import InfoIcon from '@material-ui/icons/Info'
import gIcon from '../images/google.svg'
import { GlobalContex } from './GlobalState'


function SwipeMenu() {
    const largeAvatar = {
        width: "50px",
        height: "50px",
        margin: "25px 0",
        background: "#e91e63"
    }
    const openPrivacy = ()=>{
        window.open('./privacy')
    }
    const {menuOpen,setMenuOpen} = useContext(GlobalContex)

    return (
        <SwipeableDrawer open={menuOpen} onClose={()=>setMenuOpen(false)} onOpen={()=>setMenuOpen(true)}>
            <div style={{width:"300px"}}>
                <div style={{ padding:"15px"}}>
                    <Avatar style={{ largeAvatar}} >
                        <AccountCircleIcon fontSize="large"/>
                        <Button variant="outlined" color="primary">
                            <img src={gIcon} height="25px" alt="test sign"/>Sign In
                        </Button>
                    </Avatar>
                </div>
                <Divider />
                <List component="nav" className={"pinkLists"}>
                    <ListItem button>
                        <ListItemIcon>
                            <FeedbackIcon />
                        </ListItemIcon>
                        <ListItemText primary="Feedback" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Privacy & Policy" />
                    </ListItem>
                </List>
            </div>
        </SwipeableDrawer>
    )
}

export default SwipeMenu
