import React,{useContext} from 'react';
import {List,ListItem,ListItemText, ListItemAvatar, Avatar, Typography, Divider} from "@material-ui/core";
import { GlobalContex } from '../GlobalState';
const Entities = require("html-entities").XmlEntities;

const entities = new Entities();

function SearchResult({videos}) {
    let renderResults = "<div>Loading</div>";
    const {currentVideoId,setCurrentVideoId} =useContext(GlobalContex);

    const handleClick = id => {
        setCurrentVideoId(id)
    }
    renderResults = videos.map(video =>{
        const {snippet} = video;
        return(
            <div key={video.id.videoId}>
                <ListItem alignItems="flex-start" button onClick={()=>handleClick(video.id.videoId)}>
                    <ListItemAvatar>
                        <Avatar style={{ width:"60px", height:"60px"}}
                        alt={video.snippet.title} src={video.snippet.thumbnails.default.url} />
                    </ListItemAvatar>
                    <ListItemText primary={video.snippet.title} secondary={
                        <Typography component="span" variant="body2" color="textPrimary">
                            {video.snippet.channelTitle}
                        </Typography>
                    } />
                </ListItem>
                <Divider />
            </div>
        )
    })
    return (
        <List>
            {renderResults}
        </List>
    )
}

export default SearchResult
