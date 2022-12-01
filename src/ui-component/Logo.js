// material-ui
import { useTheme } from '@mui/material/styles';

import logo from '../assets/images/icons/mountain-logo.png';

const Logo = () => {
    const theme = useTheme();

    return <img src={logo} alt="Berry" width="100" />;
};

export default Logo;
