import {useRouter} from "next/router";
import MainLayouts from "../../layouts/MainLayouts";
import {Button, Card, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";


const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some song text', listens: 0, audio: 'http://localhost:5000/audio/309d8386-0968-4ca9-a81f-1560245b9190.mp3', picture: 'http://localhost:5000/image/6e608f6f-5a6b-4854-8d7a-6adaf97a4452.jpg', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Some song text', listens: 0, audio: 'http://localhost:5000/audio/309d8386-0968-4ca9-a81f-1560245b9190.mp3', picture: 'http://localhost:5000/image/6e608f6f-5a6b-4854-8d7a-6adaf97a4452.jpg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Some song text', listens: 0, audio: 'http://localhost:5000/audio/309d8386-0968-4ca9-a81f-1560245b9190.mp3', picture: 'http://localhost:5000/image/6e608f6f-5a6b-4854-8d7a-6adaf97a4452.jpg', comments: []}
    ]

    return (
        <MainLayouts>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Track List</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Upload
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayouts>
    )
}

export default Index