import React, {useState} from "react";
import {GetServerSideProps} from "next";
import axios from "axios";
import {useRouter} from "next/router";
import {Button, Grid, TextField} from "@mui/material";
import MainLayouts from "../../layouts/MainLayouts";
import {useInput} from "../../hooks/useInput";
import {ITrack} from "../../types/track";

const TrackPage = ({serverTrack}) => {
    const router = useRouter();
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const username = useInput('')
    const text = useInput('')

    const addComment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id
            })
            setTrack({...track, comments: [...track.comments, response.data]})
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <MainLayouts title={"Music platform - " + track.artist + " - " + track.name}>
            <Button
                variant={"outlined"}
                style={{fontSize: 20}}
                onClick={() => router.push('/tracks')}
            >
                To Track-list
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
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
                <TextField
                    {...username}
                    label="Your name"
                    fullWidth
                />
                <TextField
                    {...text}
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={addComment}>Send</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const response = await axios.get('http://localhost:5000/tracks/' + params.id)

    return {
        props: {
            serverTrack: response.data
        }
    }
}