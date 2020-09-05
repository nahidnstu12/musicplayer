import React,{useState,createContext} from 'react';

export const GlobalContex = createContext();

function GlobalState(props) {

    const [searchState,setSearchState] = useState("home");
    const [searchResult,setSearchResult] = useState(null);
    const [currentVideoId,setCurrentVideoId] = useState(null);

    return (
        <GlobalContex.Provider 
        value={{ searchState,setSearchState,searchResult,setSearchResult,currentVideoId,setCurrentVideoId}}>

            {props.children}

        </GlobalContex.Provider>
    )
}

export default GlobalState
