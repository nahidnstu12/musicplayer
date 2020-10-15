import React,{useEffect,useContext,useState,useRef} from 'react'
import {GlobalContex} from '../GlobalState';
import Youtube from "react-youtube";

function MainPlayer() {
    const {currentVideoSnippet,setCurrentVideoSnippet} = useContext(GlobalContex);
    const [player,setPlayer] = useState(null);

    useEffect(()=>{
        if(currentVideoSnippet != null){
            // player.loadVideoById(currentVideoId)
            // playerStyle.display = "none";
        }
    },[currentVideoSnippet])

    const opts = {
        height:"100%",
        width:"100%",
        playerBars:{
            autoplay:1
        }
    }
    const playerStyle = {
        position:"absolute",
        top:0,
        right:0,
        height:"100%",
        width:"100%",
        opacity: ".5",
        paddingTop:"50px",
        display:"none"
    }
    const onReady = e => {
        setPlayer(e.target)
    // e.target.loadVideoById("M7lc1UVf-VE")
}
    return (
        <div style={playerStyle}>
            <Youtube opts={opts} onReady={onReady} />
        </div>
    )
}

export default MainPlayer
