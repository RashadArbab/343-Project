import Slider from './MySlider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import GearAvailable from './GearAvailable';
import YearsClimbing from './YearsClimbing';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} placement="right-start" arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black
    }
}));

const ConditonalRender = (props) => {
    console.log(props);
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
    const display1 = () => {
        return (
            <div>
                <Slider label="Indoor Climbing Level" />
                <Slider label="Outdoor Climbing Level" />
            </div>
        );
    };
    const display2 = () => {
        return (
            <div>
                <YearsClimbing />
                <GearAvailable />
            </div>
        );
    };

    const display3 = () => {
        return (
            <div>
                <TextField id="outlined-textarea" label="Bio" placeholder="Placeholder" multiline sx={{ width: '100%' }} />
            </div>
        );
    };

    return (
        <div>
            {props.stp == 0 ? display1() : null}
            {props.stp == 1 ? display2() : null}
            {props.stp == 2 ? display3() : null}
        </div>
    );
};
export default ConditonalRender;
