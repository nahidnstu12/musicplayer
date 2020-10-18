import React,{useContext} from 'react'
import {Button,Grid, Typography} from '@material-ui/core';
import {GlobalContex} from './GlobalState'
import bgImg from "../images/music-bg.svg";
import gIcon from "../images/google.svg";

const bgStyle = {
    background:`url('${bgImg}') no-repeat`,
    backgroundPositionX:'50%',
    marginTop: "50px",
    width: "100vw",
    height: "55vh"
    
}
const craftedStyle = {
    fontFamily: "Vibur, cursive",
    fontSize: "24px",
    width: "100%",
    textAlign: "center",
    letterSpacing: 0,
    marginTop: "40px"
  };
function HomePage() {
    const {isSearchOpen} = useContext(GlobalContex);
    const showLogin = {
        display: isSearchOpen ? "none":"block"
    }
    return (
        <div style={showLogin}>
            <div style={bgStyle} />
            <Grid container justify="center">
                <Button variant="outlined" color="primary">
                    <img src={gIcon} height="25px" style={{ marginRight:"px"}} alt="Home"/>Sign In to Personalize
                </Button>
            </Grid>
            <Typography variant="h5" color="primary" style={{ padding:"10px"}}>
            Listen to unilimited songs without any ads for free only on Ylight Music
            </Typography>
            <Typography variant="body1" color="primary" style={craftedStyle}>
                HandCrafted by Nahid
            </Typography>
            
        </div>
    )
}

export default HomePage
