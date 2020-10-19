import React,{useState} from 'react'
import { IconButton, Grid,Slider } from "@material-ui/core/";
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function VolumeController({player,setPlayerState}) {
  const [volume, setVolume] = useState(100);
  const volumeChange = (e, newVal) => {
    setVolume(newVal);
    player.volume = newVal / 100;
    //
  };
  const minimizePlayer = () => {
    setPlayerState("minimized");
  };

    return (
        <Grid container justify="space-between" direction="row" style={{ padding: " 0 10px", marginTop: "10px" }}>
            <Grid container spacing={1} style={{ maxWidth:"200px"}}>
                <Grid item>
                <VolumeUpIcon color="primary"/>
                </Grid>
                <Grid item xs={3}>
                    <Slider value={volume} onChange={volumeChange} />
                </Grid>
            </Grid>
            <IconButton size="small" color="primary" aria-label="Pause" onClick={minimizePlayer}>
                <ExpandMoreIcon color="primary" fontSize="large"/> 
            </IconButton>
        </Grid>
    )
}

export default VolumeController
