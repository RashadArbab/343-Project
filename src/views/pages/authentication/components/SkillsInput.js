import { Divider, Grid, Stack, Typography, useMediaQuery, Slider, TextField, Box } from '@mui/material';
import { useState } from 'react';
const SkillsInput = (props) => {
    const yearsClimbingValid = (value) => {
        if (isNaN(value)) {
            props.setInputErr(true);
            setYearsError(true);
        } else {
            setYearsError(false);
            if (!frequencyError) {
                props.setInputErr(false);
            }
        }
    };

    const [yearsError, setYearsError] = useState(false);

    const frequencyValid = (value) => {
        if (isNaN(value)) {
            setFrequencyError(true);
            props.setInputErr(true);
        } else {
            setFrequencyError(false);
            if (!yearsError) {
                props.setInputErr(false);
            }
        }
    };

    const [frequencyError, setFrequencyError] = useState(false);

    return (
        <div>
            <Typography id="non-linear-slider" gutterBottom>
                Indoor Climbing Level
            </Typography>
            <Slider aria-label="Indoor Climbing Level" defaultValue={3} valueLabelDisplay="auto" step={1} marks min={1} max={10} />
            <Typography id="non-linear-slider" gutterBottom>
                Outdoor Climbing Level
            </Typography>
            <Slider aria-label="Indoor Climbing Level" defaultValue={3} valueLabelDisplay="auto" step={1} marks min={1} max={10} />

            <Divider />

            <Typography id="non-linear-slider" gutterBottom>
                Years Climbing
            </Typography>
            <TextField
                error={yearsError}
                id="filled-error-helper-text"
                defaultValue="1"
                helperText="Please enter a number"
                variant="filled"
                style={{ width: '100%' }}
                onChange={(e) => yearsClimbingValid(e.target.value)}
            />

            <Typography id="non-linear-slider" gutterBottom>
                Climbing Frequency Per Month
            </Typography>
            <TextField
                error={frequencyError}
                id="filled-error-helper-text"
                defaultValue="1"
                helperText="Please enter a number"
                variant="filled"
                style={{ width: '100%' }}
                onChange={(e) => frequencyValid(e.target.value)}
            />
            <Typography id="non-linear-slider" gutterBottom>
                Available Gear To Share
            </Typography>
            <TextField id="filled-error-helper-text" defaultValue="" variant="filled" style={{ width: '100%' }} />
        </div>
    );
};
export default SkillsInput;
