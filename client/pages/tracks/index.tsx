import {useRouter} from "next/router";
import MainLayouts from "../../layouts/MainLayouts";
import {Button, Card, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import TrackList from "../../components/TrackList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks, searchTracks} from "../../store/actions-creators/track";
import React, {useState} from "react";
import {useDispatch} from "react-redux";


const Index = () => {
    const router = useRouter();
    const {tracks, error} = useTypedSelector(state => state.tracks)
    const [query, setQuery] = useState<string>('')
    const [timer, setTimer] = useState(null)
    const dispatch = useDispatch() as NextThunkDispatch

    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }

        setTimer(
            setTimeout(async () => {
                await dispatch(await searchTracks(e.target.value))
            }, 500)
        )
    }

    if (error) {
        return <MainLayouts>
            <h1>{error}</h1>
        </MainLayouts>
    }

    return (
        <MainLayouts title="Track list - Music platform">
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
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayouts>
    )
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
            await store.dispatch(fetchTracks());
        }
)