import styles from "../styles/Player.module.scss"
import IconButton from "@mui/material/IconButton";
import React, {useEffect} from "react";
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {ITrack} from "../types/track";
import {Grid} from "@mui/material";
import TrackProgress from "./TrackProgress";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

let audio;

const Player = () => {
    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'Some song text',
        listens: 0,
        audio: 'http://localhost:5000/audio/309d8386-0968-4ca9-a81f-1560245b9190.mp3',
        picture: 'http://localhost:5000/image/6e608f6f-5a6b-4854-8d7a-6adaf97a4452.jpg',
        comments: []
    };
    const {pause, active, duration, currentTime, volume} = useTypedSelector(state => state.player);
    const {playTrack, pauseTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions();

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = track.audio
            audio.volume = volume / 100
        }
    }, [])

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolume}/>
        </div>
    )
}

export default Player