import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3)
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
        }
    }
}));

const yearOptions = ['0 - 1 Year', '2 - 3 Years', '4 - 6 Years', '6+ Years'];
const freqOptions = ['Never', 'Couple of times a year', 'Every month', 'Every week'];

export default function YearsClimbing() {
    const [years, setYears] = React.useState([]);
    const [freq, setFreq] = React.useState('');
    const handleChangeYears = (event) => {
        setYears(event.target.value);
    };
    const handleChangeFreq = (event) => {
        setFreq(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ marginTop: '10px', width: '48%', marginRight: '1%' }}>
                <InputLabel id="years-label">Years Climbing</InputLabel>
                <Select
                    id="years"
                    labelId="years-label"
                    value={years}
                    onChange={handleChangeYears}
                    input={<OutlinedInput label="Years Climbing" />}
                >
                    {yearOptions.map((name) => (
                        <MenuItem key={name} value={name}>
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{ width: '49%', marginTop: '10px', marginLeft: '2%' }}>
                <InputLabel id="freq-label">Climbing Frequency</InputLabel>
                <Select
                    id="freq"
                    labelId="freq-label"
                    value={freq}
                    onChange={handleChangeFreq}
                    input={<OutlinedInput label="Climbing Frequency" />}
                >
                    {freqOptions.map((name) => (
                        <MenuItem key={name} value={name}>
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
