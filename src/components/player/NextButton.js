import React from 'react'
import {IconButton } from "@material-ui/core"
import SkipNextIcon from "@material-ui/icons/SkipNext"

function NextButton() {
    return (
        <IconButton color="primary" aria-label="Next">
            <SkipNextIcon fontSize="large"/>
        </IconButton>
    )
}

export default NextButton
