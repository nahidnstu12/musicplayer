import React from 'react';
import {List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function AutoSearchResult({results,onSearchSelect}) {
    let renderResult = [];
    if(results){
        renderResult = results.map((result,ind)=>(
            <ListItem key={ind} onClick={()=>onSearchSelect(result)} button>
                <ListItemIcon style={{ paddingLeft:"16px",marginRight:"9px"}}>
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={result} />
            </ListItem>           
        ))
    }
    return (
        <List style={{ marginTop:"12px" }}>
            {renderResult}
        </List>
    )
}

export default AutoSearchResult
