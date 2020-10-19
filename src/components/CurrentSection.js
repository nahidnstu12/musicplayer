import React,{useContext,useState} from 'react'
import HomePage from './HomePage';
import {GlobalContex} from './GlobalState';
import SearchResult from './header/SearchResult';
import SwipeableViews from 'react-swipeable-views'
import {Tabs,Tab,withStyles} from '@material-ui/core'
import HomeIcon from "@material-ui/icons/Home"
import FavoriteIcon from "@material-ui/icons/Favorite"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import HistoryIcon from "@material-ui/icons/History"

const CustomTab = withStyles({
    root:{
        background:"#e91e663",
        position:"fixed",
        bottom:"0",
        width:"100%",
        zIndex:"1300"
    },
    indicator:{
        display:"none"
    }
})(Tabs)
const CustomTabs = withStyles({
    root: {
        color: "#FFB2C1",
        "&:hover": {
          color: "#ffffffed",
          opacity: 1
        },
        "&$selected": {
          color: "#fff"
        },
        "&:focus": {
          color: "#FFFFFF"
        }
      },
      selected: {}
})(Tab)

function CurrentSection() {
    const {searchState,searchResult} = useContext(GlobalContex);
    const [value,setValue] = useState(0)

    function handleChange(evt,newValue){
        setValue(newValue)
    }
    function handleChangeIndex(ind){
        setValue(ind)
    }
    function checkUserSearched(){
        if(searchState === 'completed'){
            return <SearchResult videos={searchResult} />
        }
    }

    return (
        <div>
            {checkUserSearched()}
            <SwipeableViews index = {value} onChangeIndex={handleChangeIndex}>
                <div>
                    <HomePage />
                </div>
                <div>
                    This is not your home
                </div>
                <div>
                   History 
                </div>
            </SwipeableViews>
            <CustomTab value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="fullWidth">
                <CustomTabs icon={<HomeIcon />} aria-label="Home" />
                <CustomTabs icon={<FavoriteIcon />} aria-label="Favorite" />
                <CustomTabs icon={<HistoryIcon />} aria-label="History" />
            </CustomTab>
        </div>
    )
    
}

export default CurrentSection
