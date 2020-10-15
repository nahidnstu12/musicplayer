import React,{useContext} from 'react';
import {List,ListItem,ListItemText, ListItemAvatar, Avatar, Typography, Divider} from "@material-ui/core";
import { GlobalContex } from '../GlobalState';
const Entities = require("html-entities").XmlEntities;

const entities = new Entities();

function SearchResult({videos}) {
    let renderResults = "<div>Loading</div>";
    const {currentVideoSnippet,setCurrentVideoSnippet} =useContext(GlobalContex);

    const handleClick = video => {
        // set all the info of current clicked video in this object
        setCurrentVideoSnippet({
            id: video.id.videoId,
            title: entities.decode(video.snippet.title),
            channelTitle: entities.decode(video.snippet.channelTitle),
            maxThumbnail: `https://img.youtube.com/vi/${video.id.videoId}/maxresdefault.jpg`,
            hqThumbnail:  `https://img.youtube.com/vi/${video.id.videoId}/hqdefault.jpg`
        })
    }
    renderResults = videos.map(video =>{
        const {snippet} = video;
        return(
            <div key={video.id.videoId}>
                <ListItem alignItems="flex-start" button onClick={()=>handleClick(video)}>
                    <ListItemAvatar>
                        <Avatar style={{ width:"60px", height:"60px"}}
                        alt={video.snippet.title} src={video.snippet.thumbnails.high.url} />
                    </ListItemAvatar>
                    <ListItemText style={{ marginLeft:"10px"}} primary={video.snippet.title} secondary={
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
