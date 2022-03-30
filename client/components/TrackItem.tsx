import React from "react";
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@material-ui/icons";
import styles from "../styles/TrackItem.module.scss";
import {useRouter} from "next/router";


interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter();

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton>
                {
                    !active
                        ? <PlayArrow/>
                        : <Pause/>
                }
            </IconButton>
            <img src={track.picture} width={70} height={70}/>
            <Grid container direction="column" >
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{marginLeft: 'auto'}}>
                <Delete/>
            </IconButton>
        </Card>
    )
}

export default TrackItem