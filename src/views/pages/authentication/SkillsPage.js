import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Button, Tooltip } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useState } from 'react';
// project imports
import AuthWrapper1 from './AuthWrapper1';
import AuthCardWrapper from './AuthCardWrapper';
import AuthLogin from './auth-forms/AuthLogin';
import Logo from 'ui-component/Logo';

import SkillsInput from './components/SkillsInput';
import MyStepper from './components/MyStepper';
import Avatar from '@mui/material/Avatar';
// assets
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import IconButton from '@mui/material/IconButton';
// ================================|| AUTH3 - LOGIN ||================================ //

const Skills = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [inputErr, setInputErr] = useState(true);
    const navigate = useNavigate();
    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 1 }}>
                                        <Tooltip arrow title="Add Profile Picture">
                                            <IconButton
                                                height={70}
                                                width={70}
                                                color="secondary"
                                                aria-label="upload picture"
                                                component="label"
                                            >
                                                <input hidden accept="image/*" type="file" />
                                                <Avatar sx={{ height: 70, width: 70 }}>
                                                    <PersonAddAlt1Icon sx={{ height: 50, width: 50 }} />
                                                </Avatar>
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Profile
                                                    </Typography>
                                                    <Typography fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                                                        Please fill in your climber profile
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MyStepper setInputErr={setInputErr} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider sx={{ backgroundColor: `${theme.palette.grey[500]}!important` }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            {/* <Typography
                                                component={Link}
                                                to="/pages/register/register3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                {inputErr ? 'inputError' : 'no Input error'}
                                            </Typography> */}
                                            <AnimateButton>
                                                <Button
                                                    disabled={inputErr}
                                                    fullWidth
                                                    size="large"
                                                    type="submit"
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => {
                                                        navigate('/');
                                                    }}
                                                >
                                                    Complete Profile
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Skills;
