import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import { ErrorSharp } from '@mui/icons-material';
import { fontWeight } from '@mui/system';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);
    const navigate = useNavigate();
    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signInFunc = (errors) => {
        if (Object.keys(errors).length === 0) {
            navigate('/pages/skills-competency');
        }
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[200],
                                borderColor: theme.palette.grey[200]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img
                                    src={Google}
                                    alt="google"
                                    width={`${customization.fontSizeSmall}`}
                                    height={`${customization.fontSizeSmall}`}
                                    style={{ marginRight: matchDownSM ? 8 : 16 }}
                                />
                            </Box>
                            <Typography sx={{ fontSize: `${customization.fontSize}px`, fontFamily: `${customization.fontFamily}` }}>
                                Sign in with Google
                            </Typography>
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1, backgroundColor: `${theme.palette.grey[500]}!important` }} orientation="horizontal" />

                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[50]} !important`,
                                color: `${theme.palette.grey[500]}!important`,
                                fontWeight: 500,
                                fontSize: `${customization.fontSize}px`,
                                fontFamily: `${customization.fontFamily}`,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>

                        <Divider sx={{ flexGrow: 1, backgroundColor: `${theme.palette.grey[500]}!important` }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontSize: `${customization.fontSize}px`, fontFamily: `${customization.fontFamily}` }}>
                            Sign in with Email address
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik
                initialValues={{
                    email: 'email343@email.com',
                    password: '123456',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form false onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel
                                htmlFor="outlined-adornment-email-login"
                                sx={{ fontSize: `${customization.fontSize - 10}px`, fontWeight: `${customization.fontWeight}` }}
                            >
                                Email Address / Username
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email Address / Username"
                                inputProps={{}}
                                sx={{ fontSize: `${customization.fontSize}px` }}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel
                                sx={{ fontSize: `${customization.fontSize - 10}px`, fontWeight: `${customization.fontWeight}` }}
                                htmlFor="outlined-adornment-password-login"
                            >
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                sx={{ fontSize: `${customization.fontSize}px`, fontWeight: `${customization.fontWeight}` }}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        sx={{
                                            fontSize: `${customization.fontSizeSmall}px`,
                                            fontWeight: `${customization.fontWeight}`,
                                            fontFamily: `${customization.fontFamily}`,
                                            color: '#004569',
                                            '&.Mui-checked': {
                                                color: '#00669a'
                                            }
                                        }}
                                    />
                                }
                                label={
                                    <Typography
                                        sx={{
                                            color: 'grey.700',
                                            fontSize: `${customization.fontSizeSmall}px`,
                                            fontWeight: `${customization.fontWeight}`,
                                            fontFamily: `${customization.fontFamily}`
                                        }}
                                    >
                                        Remember Me
                                    </Typography>
                                }
                            />
                            <Typography
                                // variant="subtitle1"
                                color="secondary"
                                sx={{
                                    fontSize: `${customization.fontSizeSmall}px`,
                                    fontWeight: `${customization.fontWeight}`,
                                    fontFamily: `${customization.fontFamily}`,
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Forgot Password?
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    onClick={() => {
                                        signInFunc(errors);
                                    }}
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    sx={{
                                        fontSize: `${customization.fontSize}px`,
                                        fontWeight: `${customization.fontWeight}`,
                                        fontFamily: `${customization.fontFamily}`
                                    }}
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
