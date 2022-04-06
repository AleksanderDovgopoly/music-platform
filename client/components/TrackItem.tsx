import React from "react";
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import styles from "../styles/TrackItem.module.scss";
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
import axios from "axios";


interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();
    const {playTrack, pauseTrack, setActiveTrack} = useActions();

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    const deleteTrack = async (e) => {
        e.stopPropagation()
        await axios.delete('http://localhost:5000/tracks/' + track._id)
        router.push('/tracks')
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {
                    !active
                        ? <PlayArrow/>
                        : <Pause/>
                }
            </IconButton>
            <img src={'http://localhost:5000/' + track.picture} width={70} height={70}/>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <IconButton onClick={deleteTrack} style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    )
}

export default TrackItem