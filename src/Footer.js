import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Grid, Slider } from "@mui/material"
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

function Footer() {
  return (
    <div className="footer">
        <div className="footer_left">
            <img
            className="footer_albumLogo"
            src=""
            alt="Album Cover"></img>
            <div className="footer_songInfo">
                <h4>No song playing</h4>
                <p> </p>
            </div>
        </div>
        <div className="footer_center">
            <ShuffleIcon className="footer_green"></ShuffleIcon>
            <SkipPreviousIcon className="footer_icon"></SkipPreviousIcon>
            <PlayCircleOutlineIcon fontSize="large" className="footer_icon"></PlayCircleOutlineIcon>
            <SkipNextIcon className="footer_icon"></SkipNextIcon>
            <RepeatIcon className="footer_green"></RepeatIcon>
        </div>
        <dive className="footer_right">
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon></PlaylistPlayIcon>
                </Grid>
                <Grid item>
                    <VolumeDownIcon></VolumeDownIcon>
                </Grid>
                <Grid item xs>
                    <Slider aria-labelledby="continuous-sli"></Slider>
                </Grid>
            </Grid>
        </dive>
    </div>
  )
}

export default Footer