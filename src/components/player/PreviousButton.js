import React from 'react'
import {IconButton } from "@material-ui/core"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"

function PreviousButton() {
    return (
        <IconButton color="primary" aria-label="Next">
            <SkipPreviousIcon fontSize="large"/>
        </IconButton>
    )
}

export default PreviousButton
