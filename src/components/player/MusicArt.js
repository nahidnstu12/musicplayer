import React from 'react'
import {Avatar,Grid,Typography} from '@material-ui/core'
import circleSvg from '../../images/dottedCircle.svg'

function MusicArt({data}) {
    const bgStyle = {
        background:`url(${circleSvg} no-repeat)`,
        padding:"18px"
    }
    const ckImg = e => {
        if(e.target.naturalWidth < 400){
            e.target.src = data.hqThumbnail
        }
    }
    const likeSong = ()=>{
        console.log(data.id)
    }
    return (
        <Grid container direction="column" justify="center" alignItems="center" onDoubleClikCapture={likeSong}>
            <div style={bgStyle}>
                <Avatar className="searchThumb" style={{ width:"215px",height:"215px",boxShadow:"#0000008c 1px 3px 8px"}} alt="videoThumbnail" src={data.maxThumbnail} imgProps={{ onLoad: e => ckImg(e)}}>
                </Avatar>
            </div>
            <br/>
            <Typography color="primary" variant="h5">
                {data.title.slice(0,20)+'...'}
            </Typography>
            <Typography color="primary" variant="subtitle1">
                {data.channelTitle}
            </Typography>
        </Grid>
    )
}

export default MusicArt
  