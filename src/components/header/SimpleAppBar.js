import React,{useContext} from 'react'
import {GlobalContex} from '../GlobalState';
import { makeStyles,AppBar,Toolbar,IconButton,Typography,useScrollTrigger, Slide} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SearchBox from './SearchBox';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      textAlign:"center",
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
  }));

  function HideOnScroll (props) {
      const {children} = props;
      const trigger = useScrollTrigger();
      return (
          <Slide appear={false} direction="down" in={!trigger}>
              {children}
          </Slide>
      )
  }
   function SimpleAppBar(props) {
    const classes = useStyles();
    const {searchState,setSearchState} = useContext(GlobalContex);

    const toggleSearch = () =>{
        if(searchState === "home"){
            return(
                <>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                Ylight Music
                </Typography>
                
                <IconButton color="inherit" aria-level="Search" onClick={()=> setSearchState("clicked")}>
                    <SearchIcon />
                </IconButton>
                </>
            )
        }else{
            return <SearchBox />
        }
    }

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="sticky" id="navbar">
                    <Toolbar>
                    {toggleSearch()}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    )
}

// export default withStyles(styles)(SimpleAppBar);
export default SimpleAppBar;
 