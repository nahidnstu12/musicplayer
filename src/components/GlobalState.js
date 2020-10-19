import React,{useState,createContext,useEffect} from 'react';

export const GlobalContex = createContext();
// test data
const video = {
    id:"Ys7-6_t7OEQ",
    title:"Justin Bieber - Beauty And A Beat ft. Nicki Minaj (Official Music Video)",
    channelTitle:"JustinBieberVEVO",
    maxThumbnail:"https://img.youtube.com/vi/Ys7-6_t7OEQ/maxresdefault.jpg",
    hqThumbnail: "https://img.youtube.com/vi/Ys7-6_t7OEQ/hqdefault.jpg"
}
function GlobalState(props) {

    const [searchState,setSearchState] = useState("home");
    const [searchResult,setSearchResult] = useState(null);
    const [currentVideoSnippet,setCurrentVideoSnippet] = useState({});
    const [menuOpen,setMenuOpen] = useState(false)
    // test
    useEffect(()=>{
        setCurrentVideoSnippet(video)
    },[currentVideoSnippet])

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
//id
// 
// title
// "Justin Bieber - Beauty And A Beat ft. Nicki Minaj (Official Music Video)"
// channelTitle
// "JustinBieberVEVO"
// maxThumbnail
// "https://img.youtube.com/vi/Ys7-6_t7OEQ/maxresdefault.jpg"
// hqThumbnail
// "https://img.youtube.com/vi/Ys7-6_t7OEQ/hqdefault.jpg"