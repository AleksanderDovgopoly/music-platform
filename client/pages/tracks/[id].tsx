import React from "react";
import MainLayouts from "../../layouts/MainLayouts";
import {ITrack} from "../../types/track";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";

const TrackPage: React.FC = () => {
    const track: ITrack = {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some song text', listens: 0, audio: 'http://localhost:5000/audio/309d8386-0968-4ca9-a81f-1560245b9190.mp3', picture: 'http://localhost:5000/image/6e608f6f-5a6b-4854-8d7a-6adaf97a4452.jpg', comments: []};
    const router = useRouter();

    return (
        <MainLayouts>
            <Button
                variant={"outlined"}
                style={{fontSize: 20}}
                onClick={() => router.push('/tracks')}
            >
                To Track-list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: 30}}>
                    <h1>Track Name - {track.name}</h1>
                    <h1>Artist - {track.artist}</h1>
                    <h1>Listens - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Text track</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField label="Your name" fullWidth />
                <TextField label="Comment" fullWidth multiline rows={4} />
                <Button>Send</Button>
            </Grid>
            <div>
                {
                    track.comments.map(comment =>
                        <div key={comment._id}>
                            <div>Author - {comment.username}</div>
                            <div>Comment - {comment.text}</div>
                        </div>
                    )
                }
            </div>
        </MainLayouts>
    )
}

export default TrackPage