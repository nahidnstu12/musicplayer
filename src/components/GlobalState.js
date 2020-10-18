import React,{useState,createContext} from 'react';

export const GlobalContex = createContext();

function GlobalState(props) {

    const [searchState,setSearchState] = useState("home");
    const [searchResult,setSearchResult] = useState(null);
    const [currentVideoSnippet,setCurrentVideoSnippet] = useState({});
    const [menuOpen,setMenuOpen] = useState(true)

    return (
        <GlobalContex.Provider 
        value={{ searchState,setSearchState,
        searchResult,setSearchResult,
        currentVideoSnippet,setCurrentVideoSnippet,
        menuOpen,setMenuOpen}}>
            {props.children}
        </GlobalContex.Provider>
    )
}

export default GlobalState
