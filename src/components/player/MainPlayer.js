import React,{useEffect,useContext,useState,useRef} from 'react'
import {GlobalContex} from '../GlobalState';
import {Grid} from "@material-ui/core"
import {useSwipeable,Swipeable} from 'react-swipeable'
import Youtube from "react-youtube";
import PlayPauseButton from "./PlayPauseButton";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import MusicArt from "./MusicArt";
import TimelineController from "./TimelineController";
import VolumeController from "./VolumeController";
import getAudioLink from "../../apis/getAudioLink";

function MainPlayer() {
    const {currentVideoSnippet,setCurrentVideoSnippet} = useContext(GlobalContex)
    // const [player,setPlayer] = useState(null);
    const [audioState,setAudioState] = useState(null)
    const [currentTime,setCurrentTime] = useState(0)
    const [playerState,setPlayerState] = useState(null)
    const [minimized, setMinimized] = useState(true)

    const body = document.querySelector("body")
    const audioPlayer = useRef()
    const player = audioPlayer.current;

    useEffect(()=>{
        const getAudio = async data => {
            audioPlayer.current.src=""

            setPlayerState("maximized")
            setAudioState("loading")
            const res = await getAudioLink.get('/song',{
                params:{id:data}
            })
            audioPlayer.current.src = res.data
            audioPlayer.current.load()
        }
        if(currentVideoSnippet.id){
            getAudio(currentVideoSnippet.id)
        }
    },[currentVideoSnippet.id])

    useEffect(()=> {},[playerState])



    const opts = {
        height:"100%",
        width:"100%",
        playerBars:{
            autoplay:1
        }
    }
    const playerStyle = {
        position:"fixed",
        top:0,
        right:0,
        height:"100vh",
        width:"100%",
        opacity: ".5",
        paddingTop:"50px",
        display:"none",
        background:"#fff",
        zIndex:"1220",
        display:"inline block",
        overflow:"hidden",
        transition:"all .3s ease"
    }
    // const onReady = e => {
    //     setPlayer(e.target)
    // // e.target.loadVideoById("M7lc1UVf-VE")
    // }
    if(playerState === 'minimized'){
        playerStyle.height = "100px"
        playerStyle.background = "#e91e63"
        playerStyle.top = "calc(100vh-148px)"
        body.style.overflow="auto"
    }
    if(playerState === 'maximized'){
        body.style.overflow="hidden"
    }
    const expandPlayer = ()=>{
        if(playerState == 'minimized'){
            setPlayerState("maximized")
            setMinimized(true)
        }
    }
    const timeUpdate = () =>{
        setCurrentTime(audioPlayer.current.currentTime)
    }
    const swipeHandler = useSwipeable({
        onSwipedDown: e => {
            setPlayerState("minimized")
            console.log("player swipped down")
        }
    })
    const returnMaximizedPlayer = () =>{
        if(playerState === 'maximized'){
            return (
                <>
                    <VolumeController player ={player} setPlayerState={setPlayerState} />
                    <MusicArt data= {currentVideoSnippet} />
                    <TimelineController currentTime = {currentTime} player={player} />
                    <Grid container direction="row" justify="space-evenly" alignItems="center" >
                        <PreviousButton />
                        <PlayPauseButton player={player} audioState={audioState} />
                        <NextButton />
                    </Grid>
                </>
            )
        }
    }
    const returnMinimizedPlayer = () =>{
        if(playerState === 'minimized'){
            return (
                <>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" >
                        <PreviousButton />
                        <PlayPauseButton player={player} audioState={audioState} />
                        <NextButton />
                    </Grid>
                    <TimelineController currentTime = {currentTime} player={player} minimized={minimized}/>
                </>
            )
        }
    }
    if(currentVideoSnippet.id){
    return (
        <div style={playerStyle} onClick={expandPlayer} {...swipeHandler} >
            {/* <Youtube opts={opts} onReady={onReady} /> */}
            {returnMaximizedPlayer()}
            {returnMinimizedPlayer()}
            <audio src="" onTimeUpdate={timeUpdate} onLoadStart={()=> setAudioState("loading")} onPlay={()=>setAudioState("playing")} onPause={()=>setAudioState("paused")} autoPlay ref={audioPlayer}  />
        </div>
    )
    }else{
        return <div>No Music  </div>
    }
}

export default MainPlayer
