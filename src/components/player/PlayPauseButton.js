import React from 'react'
import { IconButton, CircularProgress } from "@material-ui/core";
import  PauseCircleFilledIcon  from "@material-ui/icons/PauseCircleFilled";
import   PlayCircleFilledIcon  from "@material-ui/icons/PlayCircleFilled";
import   PauseIcon  from "@material-ui/icons/Pause";
import   PlayArrowIcon  from "@material-ui/icons/PlayArrow";

function PlayPauseButton({player,audioState,minimized}) {
    const togglePlayPause = e =>{
        if(audioState === 'playing'){
            player.pause()
        }
        else if(audioState === 'paused'){
            player.play()
        }
        e.stopPropagation()
    }
    const showPlayPause = () =>{
        if(audioState === 'playing'){
            if(minimized){
                return <PauseIcon style={{ fontSize:"4rem"}} />
            }
            return <PauseCircleFilledIcon style={{ fontSize:"4rem"}} color="primary" />
        }else if(audioState === "paused" || audioState === "loaded"){
            if(minimized){
                return <PlayArrowIcon style={{ fontSize:"4rem"}} />
            }
            return <PlayCircleFilledIcon style={{ fontSize:"4rem"}} color="primary" />
        }else if(audioState ===  "loading"){
            return <CircularProgress />
        }
    }
    return (
        <IconButton size="small" 
        color={minimized ? 'secondary':'primary'}
        aria-label='Pause'
        onClick={togglePlayPause}
        disableFocusRipple={true}
        disableRipple={true}
        >
        </IconButton>
    )
}

export default PlayPauseButton
