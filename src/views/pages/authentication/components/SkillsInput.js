import { Divider, Grid, Stack, Typography, useMediaQuery, TextField, Box } from '@mui/material';
import { useState } from 'react';

import Slider from './MySlider';
import Stepper from './MyStepper';

const SkillsInput = (props) => {
    return (
        <div>
            <Stepper setInputErr={props.setInputErr} />
        </div>
    );
};
export default SkillsInput;
