import React,{useContext,useState,useEffect} from 'react';
import {InputBase,IconButton,Popper,CircularProgress,Grid} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GlobalContex } from "../GlobalState";
// import suggestSearch from "../../apis/SuggestSearch";
// import AutoSearchResult from "./AutoSearchResult";
import youtubeSearch from "../../apis/youtubeSearch";

// let ytValue;

function SearchBox() {

    const {searchState,setSearchResult,setSearchState} = useContext(GlobalContex);

    const [searchQuery,setSearchQuery] = useState("");
    // const [autoSearchData,setAutoSearch] = useState("");
    const [ytSearchQuery,setYtSearchQuery] = useState(null);
    // const [ytSearchData,setYtSearch] = useState([]);
    const [isPoperOpen,setPopper] = useState(true);

    // **get back the selected search data**
    // const onSearchSelect = result =>{
    //     setYtSearchQuery(result);
    //     setSearchQuery(result);
    //     //when user selects then search on youtube
    //     setSearchState("searching");
    // }

    // const userSearched = () =>{
    //     setYtSearchQuery(searchQuery);
    // }
    const onTyped = e =>{
        setSearchQuery(e.target.value);
        //getAutocomplete();
    }

    // **get autoComplete data from api**
    // const getAutocomplete = async ()=>{
    //     const res = await suggestSearch.get("",{
    //         params:{
    //             q: searchQuery
    //         }
    //     })
    //     // extract data
    //     const searchSuggestions = [];
    //     res.data.split('[').forEach((ele, index) => {
    //     if (!ele.split('"')[1] || index === 1) return;
    //         searchSuggestions.push(ele.split('"')[1]);
    //         setAutoSearch(searchSuggestions);
    //     });
    //     // console.log( autoSearchData)
    // }
    

    const onSearchSubmit = e =>{
        e.preventDefault();
        e.target.lastChild.lastChild.blur()
        setSearchState("searching");
        setYtSearchQuery(searchQuery);
    }

    // get youtube search result from api
    useEffect(()=>{
        const searchYt = async data =>{
            const res = await youtubeSearch.get("/search",{
                params:{
                    q:data
                }
            })
            setSearchResult(res.data.items);
            setSearchState("completed");
        }
        // only search if there is any value
        if(ytSearchQuery && ytSearchQuery !== ''){
            searchYt(ytSearchQuery);
        }
    },[ytSearchQuery,setSearchResult,setSearchState]);

    // show loading icon while we fetch the results from api
    const popperResult = () =>{
        switch(searchState){
            case "searching":
                return (
                    <Grid style={{ height:"100vh"}} container justify="center" alignItems="center">
                        <CircularProgress />
                    </Grid>
                );
            // case "clicked":
            //     return (
            //         <AutoSearchResult results={autoSearchData} onSearchSelect={onSearchSelect} />
            //     );
            case "completed":
                setPopper(false);
                break;
            default:
                break;
        }
    }
    
    return (
        <div>
            <IconButton onClick={()=>setSearchState("home")} color="inherit" aria-label="Menu">
                <ArrowBackIcon />
            </IconButton>
            <form onSubmit={e => onSearchSubmit(e)} style={{ width: "100%" }}>
                <InputBase fullWidth placeholder="Search..." autoFocus style={{ color:"#fff",paddingLeft:"16px"}} value={searchQuery} onChange={onTyped} onClick={()=>{
                    setSearchState("clicked");
                    setPopper(true);
                }}/>
            </form>
            <Popper style={{ width:"100%",height:"100%",background:"#fff"}} open={isPoperOpen} placement="bottom"
            anchorEl={document.getElementById("navbar")}>
               {popperResult}
            </Popper>
        </div>
    )
}

export default SearchBox
