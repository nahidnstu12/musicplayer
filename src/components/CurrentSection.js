import React,{useContext} from 'react'
import HomePage from './HomePage';
import {GlobalContex} from './GlobalState';
import SearchResult from './header/SearchResult';

function CurrentSection() {
    const {searchState,searchResult} = useContext(GlobalContex);

    if(searchState === "home"){
        return( <HomePage /> )
    }
    else if(searchState === "completed"){
        return (<SearchResult videos = {searchResult} />)
    }else{
    return (
        <div></div>
    )
    }
}

export default CurrentSection
