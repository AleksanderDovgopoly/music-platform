import MainLayouts from "../../layouts/MainLayouts";
import StepWrapper from "../../components/StepWrapper";
import {Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import FileUpload from "../../components/FileUpload";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [audio, setAudio] = useState(null);
    const [picture, setPicture] = useState(null);


    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prevState => prevState + 1)
        }
    }
    const back = () => {
        setActiveStep(prevState => prevState - 1)
    }

    return (
        <MainLayouts>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction={"column"} style={{padding: 20}}>
                        <TextField
                            style={{marginTop: 10}}
                            label={"Track Name"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Author Name"}
                        />
                        <TextField
                            style={{marginTop: 10}}
                            label={"Track Text"}
                            multiline
                            rows={3}
                        />
                    </Grid>
                }
                {activeStep === 1 &&
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button>Upload Image</Button>
                    </FileUpload>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button>Upload Audio</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent="space-between">
                <Button disabled={activeStep === 0} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayouts>
    )
}

export default Create