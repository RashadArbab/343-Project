import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ConditonalRender from './ConditionalRender';
import Slider from './MySlider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const steps = [
    {
        label: 'Select Climbing Level',
        description: `Please indicate on a scale from 1-10 the level of climbing you rate yourself as. We recommend in the range of 1-3 for beginners, 4-6 for intermediate, and 7-10 for experienced climbers. This allows other users to see your level and can be updated at anytime.`
    },
    {
        label: 'Add Experience',
        description: `Please enter your experience with climbing and available gear to share. Enter the number of years you've been climbing and either how often you climb or would like to climb. This helps you match with fellow climbers in your level and helps other climbers see how much experience you have.`
    },
    {
        label: 'Add Climber Bio',
        description: `Please provide interesting details about yourself! We recommend listing some of your favourite climbing moments, some hard problems you've faced, and the trips you've been on! If you're a new climber, perhaps list out what goals you expect to accomplish as a beginner!`
    }
];

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

export default function VerticalLinearStepper(props) {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep == 2) {
            props.setInputErr(false);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if (activeStep != 2) {
            props.setInputErr(true);
        }
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const useStyles = makeStyles(() => ({
        root: {
            '& .MuiStepIcon-active': { color: 'secondary.light' },
            '& .MuiStepIcon-completed': { color: 'secondary' },
            '& .Mui-disabled .MuiStepIcon-root': { color: 'grey.700' }
        }
    }));

    const c = useStyles();

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Stepper className="c.root" activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step color="secondary" key={step.label}>
                        <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container columns={16}>
                                    <Grid item xs={15}>
                                        <Typography>{step.label}</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <HtmlTooltip
                                            title={
                                                <React.Fragment>
                                                    <Typography sx={{ mb: 1 }} fontSize={18} color="inherit">
                                                        {step.label}
                                                    </Typography>
                                                    <Typography color="inherit">{step.description}</Typography>
                                                </React.Fragment>
                                            }
                                        >
                                            <InfoOutlinedIcon />
                                        </HtmlTooltip>
                                    </Grid>
                                </Grid>
                            </Box>
                        </StepLabel>
                        <StepContent>
                            <ConditonalRender stp={activeStep} setInputErr={props.setInputErr} />
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button variant="contained" color="secondary" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
