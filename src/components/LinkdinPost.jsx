import React, { useState } from 'react'
import Header from './Header'
import { Box, Typography, Divider, List, ListItem, Slider, ListItemIcon, ListItemText, IconButton, Drawer, } from '@mui/material';
import { Stepper, Step, StepLabel, } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline, Switch } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField, Avatar, FormControl, FormLabel, } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
    palette: {
        background: {
            default: '#F6F6F6',
        },
    },
});

const steps = ['Subreddit Scout', 'Create Post'];

const LinkdinPost = () => {

    const [selectedMenu, setSelectedMenu] = useState('LinkedInPostGenerator');

    // const handleMenuClick = (menuName) => {
    //     setSelectedMenu(menuName);
    // };

    //custome bnutton
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleButtonClick = () => {
        setIsBoxOpen(true);
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    };


    const [value, setValue] = useState(3);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setIsDrawerOpen(false);
    };

    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleToggle = () => {
        setIsContentVisible((prev) => !prev);
    };

    const [contentVisible, setContentVisible] = useState(false);

    const handleToggleContent = () => {
        setContentVisible((prev) => !prev);
    };

    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchChange = (event) => {
        setIsSwitchOn(event.target.checked);
    };

    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validTypes = ['image/png', 'image/jpeg', 'image/gif'];
            if (!validTypes.includes(file.type)) {
                setError('Only PNG, JPG, and GIF files are allowed.');
                setImagePreview('');
                return;
            }

            if (file.size > 10 * 1024 * 1024) {
                setError('File size exceeds the 10 MB limit.');
                setImagePreview('');
                return;
            }

            setError('');
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Header />

            {/* <Box
                sx={{
                    display: 'flex',
                    mt: '25px',
                    ml: '70px',
                    flexDirection: 'column',
                    height: "auto",
                    width: '300px',
                    backgroundColor: '#FFFFFF',
                    padding: 2,
                    position: 'relative',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                }}>

                <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                    LinkedIn generators
                </Typography>

                <Box
                    sx={{
                        borderRadius: '10px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}>

                    <MenuItem
                        onClick={() => handleMenuClick('LinkedInPostGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'LinkedInPostGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}>

                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        LinkedIn Post Generator
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuClick('LinkedInCarousalGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'LinkedInCarousalGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'LinkedInCarousalGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}
                    >
                        <ReceiptLongOutlinedIcon sx={{ mr: 1 }} />
                        LinkedIn Carousal Generator
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuClick('billing')}
                        sx={{
                            backgroundColor: selectedMenu === 'billing' ? '#000' : 'transparent',
                            color: selectedMenu === 'billing' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}
                    >
                        <RocketOutlinedIcon sx={{ mr: 1 }} />
                        LinkedIn Bio Maker
                    </MenuItem>

                    <Divider
                        sx={{
                            borderColor: '#E7E7E7',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                        }}
                    />

                    <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                        Social media generators
                    </Typography>

                    <MenuItem
                        onClick={() => handleMenuClick('FacebookPostGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'FacebookPostGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'FacebookPostGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}>

                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        Facebook Post Generator
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuClick('InstagramPostGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'InstagramPostGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'InstagramPostGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}>

                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        Instagram Post Generator
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuClick('RedditPostGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'RedditPostGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'RedditPostGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}
                    >
                        <RocketOutlinedIcon sx={{ mr: 1 }} />
                        Reddit Post Generator
                    </MenuItem>

                    <Divider
                        sx={{
                            borderColor: '#E7E7E7',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                        }}
                    />

                    <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                        Blog generators
                    </Typography>

                    <MenuItem
                        onClick={() => handleMenuClick('BlogGenerator')}
                        sx={{
                            backgroundColor: selectedMenu === 'BlogGenerator' ? '#000' : 'transparent',
                            color: selectedMenu === 'BlogGenerator' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}
                    >
                        <RocketOutlinedIcon sx={{ mr: 1 }} />
                        Blog Generator
                    </MenuItem>
                </Box>
            </Box> */}

            <>
                <IconButton
                    sx={{
                        display: { xs: 'block', sm: 'none' }, // Show only for extra-small screens (<= 400px)
                        position: 'absolute',
                        top: 20,
                        left: 20,
                    }}
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        mt: '25px',
                        ml: '70px',
                        flexDirection: 'column',
                        height: 'auto',
                        width: '300px',
                        backgroundColor: '#FFFFFF',
                        padding: 2,
                        position: 'relative',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                        LinkedIn generators
                    </Typography>

                    <Box
                        sx={{
                            borderRadius: '10px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                        }}>

                        <MenuItem
                            onClick={() => handleMenuClick('LinkedInPostGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'LinkedInPostGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1,
                            }}>

                            {/* <AccountCircleOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_193_3671)">
                                    <path d="M0.999802 4.61428C0.999802 2.01067 2.01045 1 4.61408 1H19.3856C21.9891 1 22.9998 2.01067 22.9998 4.61428V19.3857C22.9998 21.9893 21.9891 23 19.3856 23H4.61408C2.01045 23 0.999802 21.9893 0.999802 19.3857V4.61428Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.90861 5.75119C7.91182 6.16409 7.75246 6.56167 7.46494 6.85803C7.17743 7.15439 6.78486 7.32573 6.37206 7.33503C5.96011 7.31991 5.56972 7.14713 5.28155 6.85235C4.99339 6.55758 4.82947 6.16339 4.82368 5.75119C4.84159 5.34961 5.01153 4.96985 5.29906 4.68892C5.58657 4.40798 5.97017 4.24688 6.37206 4.23828C6.77279 4.24704 7.15502 4.40854 7.44063 4.68976C7.72623 4.97097 7.89365 5.35066 7.90861 5.75119ZM4.98916 10.1481C4.98916 9.238 5.56833 9.37983 6.37206 9.37983C7.1758 9.37983 7.74314 9.238 7.74314 10.1481V19.0128C7.74314 19.9348 7.16398 19.7457 6.37206 19.7457C5.58015 19.7457 4.98916 19.9348 4.98916 19.0128V10.1481Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.1307 10.148C10.1307 9.63974 10.3198 9.45063 10.6153 9.39154C10.9108 9.33243 11.9272 9.39154 12.2818 9.39154C12.6364 9.39154 12.7783 9.97069 12.7664 10.408C13.0698 10.0009 13.4725 9.67852 13.936 9.47157C14.3996 9.26462 14.9085 9.18008 15.414 9.22606C15.9105 9.1957 16.4078 9.27014 16.8737 9.44452C17.3394 9.6189 17.7634 9.88932 18.1178 10.2382C18.4723 10.5871 18.7494 11.0067 18.9311 11.4697C19.1128 11.9327 19.1951 12.4287 19.1727 12.9256V18.9773C19.1727 19.8992 18.6053 19.7101 17.8016 19.7101C16.9978 19.7101 16.4305 19.8992 16.4305 18.9773V14.2494C16.4513 14.0061 16.4195 13.7611 16.3373 13.5312C16.255 13.3013 16.1241 13.0917 15.9537 12.9168C15.7833 12.7419 15.5772 12.6057 15.3495 12.5175C15.1218 12.4293 14.8777 12.3911 14.6339 12.4055C14.3913 12.3994 14.1501 12.4448 13.9263 12.5389C13.7026 12.6329 13.5013 12.7735 13.3359 12.9511C13.1706 13.1288 13.0448 13.3396 12.967 13.5695C12.8892 13.7994 12.8611 14.0433 12.8846 14.2849V19.0127C12.8846 19.9347 12.3055 19.7455 11.5017 19.7455C10.698 19.7455 10.1307 19.9347 10.1307 19.0127V10.148Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_193_3671">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            LinkedIn Post Generator
                        </MenuItem>

                        <MenuItem
                            onClick={() => handleMenuClick('LinkedInCarousalGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'LinkedInCarousalGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'LinkedInCarousalGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}
                        >
                            {/* <ReceiptLongOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3H4C4.55228 3 5 3.44772 5 4V20C5 20.5523 4.55228 21 4 21H2" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 3H20C19.4477 3 19 3.44772 19 4V20C19 20.5523 19.4477 21 20 21H22" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16 4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4V20C8 20.5523 8.44772 21 9 21H15C15.5523 21 16 20.5523 16 20V4Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>


                            LinkedIn Carousal Generator
                        </MenuItem>

                        <MenuItem
                            onClick={() => handleMenuClick('LinkedInBioMaker')}
                            sx={{
                                backgroundColor: selectedMenu === 'LinkedInBioMaker' ? '#000' : 'transparent',
                                color: selectedMenu === 'LinkedInBioMaker' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}
                        >
                            {/* <RocketOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            LinkedIn Bio Maker
                        </MenuItem>

                        <Divider
                            sx={{
                                borderColor: '#E7E7E7',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                            }}
                        />

                        <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                            Social media generators
                        </Typography>

                        <MenuItem
                            onClick={() => handleMenuClick('FacebookPostGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'FacebookPostGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'FacebookPostGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}>

                            {/* <AccountCircleOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.65137 20.7571V3.24351C1.65137 2.82124 1.81911 2.41628 2.11769 2.11769C2.41628 1.81911 2.82124 1.65137 3.24351 1.65137H20.7571C21.1793 1.65137 21.5844 1.81911 21.8829 2.11769C22.1814 2.41628 22.3492 2.82124 22.3492 3.24351V20.7571C22.3492 21.1793 22.1814 21.5844 21.8829 21.8829C21.5844 22.1814 21.1793 22.3492 20.7571 22.3492H15.9807V14.8025H17.1111C17.3687 14.8025 17.6156 14.7001 17.7978 14.518C17.9799 14.3359 18.0823 14.0888 18.0823 13.8313V12.6053C18.0823 12.4778 18.0571 12.3515 18.0084 12.2336C17.9595 12.1158 17.888 12.0088 17.7978 11.9186C17.7077 11.8284 17.6005 11.7568 17.4827 11.708C17.3649 11.6592 17.2386 11.6341 17.1111 11.6341H16.0443V10.1375C16.0443 8.80009 16.6494 8.80009 17.2544 8.80009H18.0345C18.1627 8.80537 18.2904 8.78243 18.4087 8.73292C18.527 8.6834 18.633 8.60849 18.7191 8.5135C18.8116 8.42543 18.8849 8.31909 18.9342 8.20125C18.9836 8.0834 19.008 7.95662 19.0057 7.82888V6.6507C19.01 6.52105 18.9887 6.39183 18.9428 6.27044C18.8971 6.14904 18.828 6.03785 18.7392 5.94321C18.6505 5.84859 18.544 5.77236 18.4259 5.71891C18.3077 5.66546 18.18 5.63583 18.0504 5.63172H16.2195C15.6852 5.61163 15.153 5.70776 14.6595 5.91347C14.166 6.11916 13.7231 6.42953 13.3613 6.82312C12.9995 7.21673 12.7274 7.68417 12.5639 8.19318C12.4004 8.70219 12.3494 9.24062 12.4143 9.7713V11.6341H11.3953C11.2664 11.632 11.1384 11.6555 11.0187 11.7034C10.899 11.7513 10.7901 11.8225 10.6982 11.9129C10.6063 12.0033 10.5334 12.111 10.4836 12.2299C10.4338 12.3488 10.4081 12.4764 10.4082 12.6053V13.8313C10.4081 13.9601 10.4338 14.0878 10.4836 14.2066C10.5334 14.3255 10.6063 14.4333 10.6982 14.5237C10.7901 14.6141 10.899 14.6853 11.0187 14.7332C11.1384 14.781 11.2664 14.8046 11.3953 14.8025H12.4143V22.3492H3.24351C2.82124 22.3492 2.41628 22.1814 2.11769 21.8829C1.81911 21.5844 1.65137 21.1793 1.65137 20.7571Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Facebook Post Generator
                        </MenuItem>

                        <MenuItem
                            onClick={() => handleMenuClick('InstagramPostGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'InstagramPostGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'InstagramPostGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}>

                            {/* <AccountCircleOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.3068 6.65642C17.0869 6.65642 16.9088 6.47821 16.9088 6.25839C16.9088 6.03856 17.0869 5.86035 17.3068 5.86035" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.3066 6.65642C17.5265 6.65642 17.7047 6.47821 17.7047 6.25839C17.7047 6.03856 17.5265 5.86035 17.3066 5.86035" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.22148 6.31828C2.22148 4.0558 4.05559 2.22168 6.31809 2.22168H17.2424C19.5049 2.22168 21.339 4.0558 21.339 6.31828V17.2426C21.339 19.505 19.5049 21.3392 17.2424 21.3392H6.31809C4.05559 21.3392 2.22148 19.505 2.22148 17.2426V6.31828Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.72031 11.7807C7.72031 12.8574 8.14805 13.8901 8.90944 14.6515C9.67083 15.4129 10.7035 15.8406 11.7803 15.8406C12.857 15.8406 13.8897 15.4129 14.6511 14.6515C15.4125 13.8901 15.8402 12.8574 15.8402 11.7807C15.8402 10.7039 15.4125 9.67123 14.6511 8.90984C13.8897 8.14845 12.857 7.7207 11.7803 7.7207C10.7035 7.7207 9.67083 8.14845 8.90944 8.90984C8.14805 9.67123 7.72031 10.7039 7.72031 11.7807Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Instagram Post Generator
                        </MenuItem>

                        <MenuItem
                            onClick={() => handleMenuClick('RedditPostGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'RedditPostGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'RedditPostGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}
                        >
                            {/* <RocketOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_193_3705)">
                                    <path d="M12.4752 7.76172C14.9969 7.76172 17.2633 8.54831 18.8317 9.79962C19.3683 9.61154 19.9544 9.62169 20.4841 9.82824C21.0139 10.0348 21.4522 10.4241 21.7198 10.9257C21.9874 11.4274 22.0666 12.0082 21.9432 12.5632C21.8198 13.1182 21.5018 13.6107 21.0468 13.9516C21.0468 17.3703 17.209 20.1415 12.4761 20.1415C7.83373 20.1415 4.05314 17.4751 3.90553 14.1478L2.95324 13.9516C2.49823 13.6107 2.18024 13.1182 2.05679 12.5632C1.93335 12.0082 2.01261 11.4274 2.28022 10.9257C2.54784 10.4241 2.98615 10.0348 3.51586 9.82824C4.04558 9.62169 4.63172 9.61154 5.16827 9.79962C6.73574 8.54926 9.00219 7.76172 11.5239 7.76172H12.4752Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.4756 7.76145L13.4279 3L19.1416 3.95229" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.1885 3.95229C18.1885 4.20485 18.2888 4.44707 18.4674 4.62566C18.646 4.80425 18.8882 4.90458 19.1408 4.90458C19.3933 4.90458 19.6355 4.80425 19.8141 4.62566C19.9927 4.44707 20.0931 4.20485 20.0931 3.95229C20.0931 3.69973 19.9927 3.45751 19.8141 3.27892C19.6355 3.10033 19.3933 3 19.1408 3C18.8882 3 18.646 3.10033 18.4674 3.27892C18.2888 3.45751 18.1885 3.69973 18.1885 3.95229Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.61872 12.9992C9.88169 12.9992 10.0949 12.786 10.0949 12.523C10.0949 12.2601 9.88169 12.0469 9.61872 12.0469C9.35576 12.0469 9.14258 12.2601 9.14258 12.523C9.14258 12.786 9.35576 12.9992 9.61872 12.9992Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.3316 12.9992C15.5946 12.9992 15.8078 12.786 15.8078 12.523C15.8078 12.2601 15.5946 12.0469 15.3316 12.0469C15.0686 12.0469 14.8555 12.2601 14.8555 12.523C14.8555 12.786 15.0686 12.9992 15.3316 12.9992Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5703 16.332C11.2055 16.6491 11.8397 16.8082 12.4749 16.8082C13.1101 16.8082 13.7443 16.6491 14.3795 16.332" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_193_3705">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Reddit Post Generator
                        </MenuItem>

                        <Divider
                            sx={{
                                borderColor: '#E7E7E7',
                                borderWidth: '2px',
                                borderStyle: 'solid',
                            }}
                        />

                        <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                            Blog generators
                        </Typography>

                        <MenuItem
                            onClick={() => handleMenuClick('BlogGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'BlogGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'BlogGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}
                        >
                            {/* <RocketOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3489 8.01999V18.3689C22.3489 18.8967 22.1392 19.403 21.7661 19.7762C21.3929 20.1494 20.8866 20.3591 20.3588 20.3591M20.3588 20.3591C19.831 20.3591 19.3247 20.1494 18.9515 19.7762C18.5783 19.403 18.3686 18.8967 18.3686 18.3689V4.43767C18.3686 4.22654 18.2847 4.02405 18.1355 3.87477C17.9861 3.72548 17.7836 3.6416 17.5725 3.6416H2.44715C2.23602 3.6416 2.03353 3.72548 1.88424 3.87477C1.73495 4.02405 1.65108 4.22654 1.65108 4.43767V18.767C1.65108 19.1892 1.81882 19.5942 2.1174 19.8928C2.41599 20.1913 2.82095 20.3591 3.24322 20.3591H20.3588Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.5921 7.62207H6.42751V11.6024H13.5921V7.62207Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.42751 16.3789H13.5921" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Blog Generator
                        </MenuItem>
                    </Box>
                </Box>

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                    }}
                >
                    <List sx={{ width: 280 }}>
                        <ListItem>
                            <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                                LinkedIn generators
                            </Typography>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => handleMenuClick('LinkedInPostGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'LinkedInPostGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                            }}
                        >
                            <ListItemIcon sx={{ color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit', }}>
                                <AccountCircleOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn Post Generator" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => handleMenuClick('LinkedInCarousalGenerator')}
                            sx={{
                                backgroundColor: selectedMenu === 'LinkedInCarousalGenerator' ? '#000' : 'transparent',
                                color: selectedMenu === 'LinkedInCarousalGenerator' ? '#fff' : 'inherit',
                                borderRadius: 1,
                            }}
                        >
                            <ListItemIcon sx={{ color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit', }}>
                                <ReceiptLongOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn Carousal Generator" />
                        </ListItem>
                        <Divider sx={{ borderColor: '#E7E7E7', borderWidth: '2px', borderStyle: 'solid' }} />
                        <ListItem>
                            <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                                Social media generators
                            </Typography>
                        </ListItem>
                    </List>
                </Drawer>
            </>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'LinkedInPostGenerator' && (
                    <>
                        {/* <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                position: 'absolute',
                                padding: '12px 20px 12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                marginLeft: '24.5rem',
                                bottom: '32.2rem',
                                height: '90px',
                                width: '1050px'
                            }}>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.22856C2 4.02133 4.02129 2 9.22855 2H38.7715C43.9786 2 46 4.02133 46 9.22856V38.7715C46 43.9786 43.9786 46 38.7715 46H9.22855C4.02129 46 2 43.9786 2 38.7715V9.22856Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.8183 11.5024C15.8247 12.3282 15.506 13.1233 14.9309 13.7161C14.3559 14.3088 13.5708 14.6515 12.7452 14.6701C11.9213 14.6398 11.1405 14.2943 10.5642 13.7047C9.98784 13.1152 9.66001 12.3268 9.64844 11.5024C9.68425 10.6992 10.0241 9.9397 10.5992 9.37783C11.1742 8.81596 11.9414 8.49376 12.7452 8.47656C13.5466 8.49408 14.3111 8.81708 14.8823 9.37951C15.4535 9.94195 15.7884 10.7013 15.8183 11.5024ZM9.97939 20.2962C9.97939 18.476 11.1377 18.7597 12.7452 18.7597C14.3527 18.7597 15.4874 18.476 15.4874 20.2962V38.0257C15.4874 39.8696 14.329 39.4913 12.7452 39.4913C11.1614 39.4913 9.97939 39.8696 9.97939 38.0257V20.2962Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.2617 20.296C20.2617 19.2795 20.6399 18.9013 21.2309 18.7831C21.8219 18.6649 23.8549 18.7831 24.5641 18.7831C25.2732 18.7831 25.5569 19.9414 25.5333 20.816C26.1399 20.0019 26.9453 19.357 27.8724 18.9431C28.7995 18.5292 29.8173 18.3602 30.8285 18.4521C31.8214 18.3914 32.8161 18.5403 33.7477 18.889C34.6791 19.2378 35.5272 19.7786 36.236 20.4765C36.945 21.1743 37.4991 22.0134 37.8626 22.9394C38.2261 23.8654 38.3906 24.8575 38.3457 25.8512V37.9545C38.3457 39.7985 37.2111 39.4202 35.6036 39.4202C33.9961 39.4202 32.8614 39.7985 32.8614 37.9545V28.4988C32.903 28.0122 32.8395 27.5223 32.6749 27.0624C32.5104 26.6025 32.2486 26.1834 31.9078 25.8336C31.567 25.4838 31.1548 25.2114 30.6994 25.035C30.244 24.8585 29.7559 24.7822 29.2683 24.8111C28.783 24.7988 28.3006 24.8897 27.853 25.0778C27.4055 25.2659 27.003 25.5469 26.6723 25.9023C26.3415 26.2576 26.09 26.6792 25.9344 27.139C25.7788 27.5989 25.7227 28.0866 25.7697 28.5697V38.0254C25.7697 39.8694 24.6113 39.4911 23.0039 39.4911C21.3964 39.4911 20.2617 39.8694 20.2617 38.0254V20.296Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700 }}>
                                        LinkedIn Post Generator Profile Setting
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888' }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 10, left: '880px', position: 'absolute' }}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z" stroke="#1E1E1E" strokeWidth="2.08717" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.3334 20V12L20.6667 16L13.3334 20Z" stroke="#1E1E1E" strokeWidth="2.08717" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <Typography style={{ width: '100px', fontSize: '15px', color: '#2E2E2E', borderBottom: '1px solid #2E2E2E' }}>
                                        How it works ?
                                    </Typography>
                                </div>
                            </div>
                        </Box> */}
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 9.22856C2 4.02133 4.02129 2 9.22855 2H38.7715C43.9786 2 46 4.02133 46 9.22856V38.7715C46 43.9786 43.9786 46 38.7715 46H9.22855C4.02129 46 2 43.9786 2 38.7715V9.22856Z"
                                        stroke="#1E1E1E"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M15.8183 11.5024C15.8247 12.3282 15.506 13.1233 14.9309 13.7161C14.3559 14.3088 13.5708 14.6515 12.7452 14.6701C11.9213 14.6398 11.1405 14.2943 10.5642 13.7047C9.98784 13.1152 9.66001 12.3268 9.64844 11.5024C9.68425 10.6992 10.0241 9.9397 10.5992 9.37783C11.1742 8.81596 11.9414 8.49376 12.7452 8.47656C13.5466 8.49408 14.3111 8.81708 14.8823 9.37951C15.4535 9.94195 15.7884 10.7013 15.8183 11.5024ZM9.97939 20.2962C9.97939 18.476 11.1377 18.7597 12.7452 18.7597C14.3527 18.7597 15.4874 18.476 15.4874 20.2962V38.0257C15.4874 39.8696 14.329 39.4913 12.7452 39.4913C11.1614 39.4913 9.97939 39.8696 9.97939 38.0257V20.2962Z"
                                        stroke="#1E1E1E"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20.2617 20.296C20.2617 19.2795 20.6399 18.9013 21.2309 18.7831C21.8219 18.6649 23.8549 18.7831 24.5641 18.7831C25.2732 18.7831 25.5569 19.9414 25.5333 20.816C26.1399 20.0019 26.9453 19.357 27.8724 18.9431C28.7995 18.5292 29.8173 18.3602 30.8285 18.4521C31.8214 18.3914 32.8161 18.5403 33.7477 18.889C34.6791 19.2378 35.5272 19.7786 36.236 20.4765C36.945 21.1743 37.4991 22.0134 37.8626 22.9394C38.2261 23.8654 38.3906 24.8575 38.3457 25.8512V37.9545C38.3457 39.7985 37.2111 39.4202 35.6036 39.4202C33.9961 39.4202 32.8614 39.7985 32.8614 37.9545V28.4988C32.903 28.0122 32.8395 27.5223 32.6749 27.0624C32.5104 26.6025 32.2486 26.1834 31.9078 25.8336C31.567 25.4838 31.1548 25.2114 30.6994 25.035C30.244 24.8585 29.7559 24.7822 29.2683 24.8111C28.783 24.7988 28.3006 24.8897 27.853 25.0778C27.4055 25.2659 27.003 25.5469 26.6723 25.9023C26.3415 26.2576 26.09 26.6792 25.9344 27.139C25.7788 27.5989 25.7227 28.0866 25.7697 28.5697V38.0254C25.7697 39.8694 24.6113 39.4911 23.0039 39.4911C21.3964 39.4911 20.2617 39.8694 20.2617 38.0254V20.296Z"
                                        stroke="#1E1E1E"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        LinkedIn Post Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Describe your profession</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Data scientist - Cybersecurity"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        position: 'absolute',
                                        ml: '19.2rem',
                                        color: '#FFFFF',
                                        width: '120px',
                                        padding: '4px',
                                        backgroundColor: '#000',
                                        borderRadius: '8px',
                                        marginTop: '1.9rem',
                                        gap:1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate
                                </Button>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Enter your topic</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Your Writing Sample
                                    <Typography
                                        style={{
                                            position: 'relative',
                                            left: '310px',
                                            bottom: '23px',
                                            width: '115px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        Select Post type
                                    </Typography>
                                </FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '100px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 70px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Thoughts</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Let us know what you want to focus on..."
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '110px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Professional
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Helpful
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Persuasive
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Friendly
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Humorous
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Inspiring
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Formal
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Academic
                                    </Button>

                                    <div>
                                        <Button
                                            variant="outlined"
                                            // onClick={handleButtonClick}
                                            sx={{
                                                fontSize: "14px",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                color: "#B0B0B0",
                                                height: "35px",
                                                width: "100px",
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #D1D1D1",
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Custom
                                        </Button>
                                        {isBoxOpen && (
                                            <Box
                                                sx={{
                                                    marginTop: 2,
                                                    padding: 2,
                                                    border: "1px solid #D1D1D1",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#F9F9F9",
                                                    width: "300px",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                    List of Items
                                                </Typography>
                                                <List>
                                                    {items.map((item, index) => (
                                                        <ListItem key={index}>{item}</ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </div>
                                </div>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Creativity Level
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            flexGrow: 0,
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#9E9E9E",
                                            marginLeft: "26rem",
                                            marginTop: "-1.4rem",
                                        }}
                                    >
                                        {value}
                                    </Typography></FormLabel>

                                <Box
                                    sx={{
                                        width: 415,
                                        marginTop: "5px",
                                    }}
                                >

                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        step={1}
                                        marks
                                        min={1}
                                        max={5}
                                        sx={{
                                            flexGrow: 2,
                                            color: "#000",
                                            "& .MuiSlider-thumb": {
                                                backgroundColor: "#000",
                                            },
                                            "& .MuiSlider-rail": {
                                                backgroundColor: "#E0E0E0",
                                            },
                                        }} />
                                </Box>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Post size (in characters)</FormLabel>
                                <TextField
                                    type="number"
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="800"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <Box
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: 'center', 
                                    marginLeft: '120px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 4,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate Post
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '935px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '420px' }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.22856C2 4.02133 4.02129 2 9.22855 2H38.7715C43.9786 2 46 4.02133 46 9.22856V38.7715C46 43.9786 43.9786 46 38.7715 46H9.22855C4.02129 46 2 43.9786 2 38.7715V9.22856Z" stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.8183 11.5024C15.8247 12.3282 15.506 13.1233 14.9309 13.7161C14.3559 14.3088 13.5708 14.6515 12.7452 14.6701C11.9213 14.6398 11.1405 14.2943 10.5642 13.7047C9.98784 13.1152 9.66001 12.3268 9.64844 11.5024C9.68425 10.6992 10.0241 9.9397 10.5992 9.37783C11.1742 8.81596 11.9414 8.49376 12.7452 8.47656C13.5466 8.49408 14.3111 8.81708 14.8823 9.37951C15.4535 9.94195 15.7884 10.7013 15.8183 11.5024ZM9.97939 20.2962C9.97939 18.476 11.1377 18.7597 12.7452 18.7597C14.3527 18.7597 15.4874 18.476 15.4874 20.2962V38.0257C15.4874 39.8696 14.329 39.4913 12.7452 39.4913C11.1614 39.4913 9.97939 39.8696 9.97939 38.0257V20.2962Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20.2617 20.296C20.2617 19.2795 20.6399 18.9013 21.2309 18.7831C21.8219 18.6649 23.8549 18.7831 24.5641 18.7831C25.2732 18.7831 25.5569 19.9414 25.5333 20.816C26.1399 20.0019 26.9453 19.357 27.8724 18.9431C28.7995 18.5292 29.8173 18.3602 30.8285 18.4521C31.8214 18.3914 32.8161 18.5403 33.7477 18.889C34.6791 19.2378 35.5272 19.7786 36.236 20.4765C36.945 21.1743 37.4991 22.0134 37.8626 22.9394C38.2261 23.8654 38.3906 24.8575 38.3457 25.8512V37.9545C38.3457 39.7985 37.2111 39.4202 35.6036 39.4202C33.9961 39.4202 32.8614 39.7985 32.8614 37.9545V28.4988C32.903 28.0122 32.8395 27.5223 32.6749 27.0624C32.5104 26.6025 32.2486 26.1834 31.9078 25.8336C31.567 25.4838 31.1548 25.2114 30.6994 25.035C30.244 24.8585 29.7559 24.7822 29.2683 24.8111C28.783 24.7988 28.3006 24.8897 27.853 25.0778C27.4055 25.2659 27.003 25.5469 26.6723 25.9023C26.3415 26.2576 26.09 26.6792 25.9344 27.139C25.7788 27.5989 25.7227 28.0866 25.7697 28.5697V38.0254C25.7697 39.8694 24.6113 39.4911 23.0039 39.4911C21.3964 39.4911 20.2617 39.8694 20.2617 38.0254V20.296Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'LinkedInCarousalGenerator' && (
                    <>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H8C9.10457 6 10 6.89543 10 8V40C10 41.1046 9.10457 42 8 42H4" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M44 6H40C38.8954 6 38 6.89543 38 8V40C38 41.1046 38.8954 42 40 42H44" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M32 8C32 6.89543 31.1046 6 30 6H18C16.8954 6 16 6.89543 16 8V40C16 41.1046 16.8954 42 18 42H30C31.1046 42 32 41.1046 32 40V8Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        LinkedIn Carousal Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: '935px',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl fullWidth sx={{ marginTop: 2, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>No. of Slides </FormLabel>
                                <TextField
                                    type="number"
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="5"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Enter a topic for your carousel...</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Data scientist - Cybersecurity"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        position: 'absolute',
                                        ml: '19.2rem',
                                        color: '#FFFFF',
                                        width: '120px',
                                        padding: '4px',
                                        backgroundColor: '#000',
                                        borderRadius: '8px',
                                        marginTop: '1.9rem',
                                        gap:1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate
                                </Button>
                            </FormControl>

                            <Divider
                                sx={{
                                    borderColor: '#E7E7E7',
                                    border: '1px solid',
                                    borderStyle: 'solid',
                                }}
                            />

                            <FormControl fullWidth sx={{ marginTop: 2, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '25px', color: '#454545', marginTop: '1px', width: 800 }}>Setting</FormLabel>
                            </FormControl>

                            <Box sx={{ padding: 2 }}>
                                <Box
                                    sx={{
                                        margin: '20px auto',
                                        width: '100%',
                                        maxWidth: '500px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={handleToggle}
                                        sx={{
                                            width: 'fit-content',
                                            // alignSelf: 'center',
                                            position: 'relative',
                                            marginLeft: '400px',
                                            bottom: '75px',
                                            bgcolor: '#FFF',
                                            border: 'none',
                                            '&:hover': { bgcolor: '#F6F6F6' },
                                        }}
                                    >
                                        {isContentVisible ? (
                                            <KeyboardArrowUpIcon sx={{ color: '#000' }} />
                                        ) : (
                                            <KeyboardArrowDownIcon sx={{ color: '#000' }} />
                                        )}
                                    </Button>

                                    {isContentVisible && (
                                        <>
                                            <FormControl fullWidth sx={{ position: 'relative', bottom: 80, ml: 2 }}>
                                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Profile Headshot</FormLabel>
                                                <Switch
                                                    checked={isSwitchOn}
                                                    onChange={handleSwitchChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{
                                                        position: 'relative',
                                                        marginLeft: '375px',
                                                        bottom: '22px',
                                                        width: '45px',
                                                        height: '23px',
                                                        padding: 0,
                                                        '& .MuiSwitch-switchBase': {
                                                            padding: 1,
                                                            transform: 'translateX(0px)',
                                                            '&.Mui-checked': {
                                                                transform: 'translateX(20px)',
                                                                color: '#fff',
                                                                '& + .MuiSwitch-track': {
                                                                    backgroundColor: '#000',
                                                                    opacity: 1,
                                                                },
                                                            },
                                                        },
                                                        '& .MuiSwitch-thumb': {
                                                            position: 'relative',
                                                            bottom: '0.3rem',
                                                            right: 3,
                                                            width: 17,
                                                            height: 17,
                                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                                        },
                                                        '& .MuiSwitch-track': {
                                                            borderRadius: 14,
                                                            backgroundColor: '#d1d1d1',
                                                            opacity: 1,
                                                            transition: 'background-color 0.3s',
                                                        },
                                                    }}
                                                />
                                            </FormControl>

                                            <Box
                                                sx={{
                                                    position: 'relative',
                                                    bottom: '115px',
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    // padding: 2,
                                                    left: 12,
                                                    backgroundColor: '#F9F9F9',
                                                    borderRadius: 1,
                                                    bgcolor: '#FFF',
                                                    alignItems: 'center',
                                                    gap: 2,
                                                    // mt: 2,
                                                }}
                                            >
                                                <Avatar
                                                    alt="Profile Picture"
                                                    src="/path/to/profile.jpg"
                                                    sx={{ width: 80, height: 80, marginTop: 2 }} />
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        textTransform: 'none',
                                                        borderColor: '#4F4F4F',
                                                        color: '#4F4F4F',
                                                        width: '100px',
                                                        borderRadius: '10px',
                                                        mt: 2,
                                                        height: '35px',
                                                    }}
                                                >
                                                    Upload
                                                </Button>
                                            </Box>
                                        </>
                                    )}
                                </Box>

                            </Box>

                            <FormControl fullWidth sx={{ position: 'relative', bottom: 110, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Name </FormLabel>
                                <Switch
                                    checked={isSwitchOn}
                                    onChange={handleSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{
                                        position: 'relative',
                                        marginLeft: '375px',
                                        bottom: '22px',
                                        width: '45px',
                                        height: '23px',
                                        padding: 0,
                                        '& .MuiSwitch-switchBase': {
                                            padding: 1,
                                            transform: 'translateX(0px)',
                                            '&.Mui-checked': {
                                                transform: 'translateX(20px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#000',
                                                    opacity: 1,
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-thumb': {
                                            position: 'relative',
                                            bottom: '0.3rem',
                                            right: 3,
                                            width: 17,
                                            height: 17,
                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 14,
                                            backgroundColor: '#d1d1d1',
                                            opacity: 1,
                                            transition: 'background-color 0.3s',
                                        },
                                    }}
                                />

                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    variant="outlined"
                                    placeholder="Your Name"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <FormControl fullWidth sx={{ position: 'relative', bottom: 100, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>LinkedIn Handle</FormLabel>
                                <Switch
                                    checked={isSwitchOn}
                                    onChange={handleSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{
                                        position: 'relative',
                                        marginLeft: '375px',
                                        bottom: '22px',
                                        width: '45px',
                                        height: '23px',
                                        padding: 0,
                                        '& .MuiSwitch-switchBase': {
                                            padding: 1,
                                            transform: 'translateX(0px)',
                                            '&.Mui-checked': {
                                                transform: 'translateX(20px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#000',
                                                    opacity: 1,
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-thumb': {
                                            position: 'relative',
                                            bottom: '0.3rem',
                                            right: 3,
                                            width: 17,
                                            height: 17,
                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 14,
                                            backgroundColor: '#d1d1d1',
                                            opacity: 1,
                                            transition: 'background-color 0.3s',
                                        },
                                    }}
                                />

                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    variant="outlined"
                                    placeholder="your_linkedin_handle"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ position: 'relative', bottom: 100, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Remove Watermark</FormLabel>
                                <Switch
                                    checked={isSwitchOn}
                                    onChange={handleSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{
                                        position: 'relative',
                                        marginLeft: '375px',
                                        bottom: '22px',
                                        width: '45px',
                                        height: '23px',
                                        padding: 0,
                                        '& .MuiSwitch-switchBase': {
                                            padding: 1,
                                            transform: 'translateX(0px)',
                                            '&.Mui-checked': {
                                                transform: 'translateX(20px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#000',
                                                    opacity: 1,
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-thumb': {
                                            position: 'relative',
                                            bottom: '0.3rem',
                                            right: 3,
                                            width: 17,
                                            height: 17,
                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 14,
                                            backgroundColor: '#d1d1d1',
                                            opacity: 1,
                                            transition: 'background-color 0.3s',
                                        },
                                    }}
                                />
                            </FormControl>

                            <Divider
                                sx={{
                                    position: "relative",
                                    bottom: 100,
                                    borderColor: '#E7E7E7',
                                    border: '1px solid',
                                    borderStyle: 'solid',
                                }}
                            />

                            <FormControl fullWidth sx={{ position: 'relative', bottom: 100, marginTop: 2, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '25px', color: '#D1D1D1', marginTop: '1px', width: 800 }}>Content</FormLabel>
                            </FormControl>
                            <Box sx={{ padding: 2 }}>
                                <Box
                                    sx={{
                                        margin: '20px auto',
                                        width: '100%',
                                        maxWidth: '500px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 2,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        onClick={handleToggleContent}
                                        sx={{
                                            width: 'fit-content',
                                            position: 'relative',
                                            marginLeft: '400px',
                                            bottom: 180,
                                            bgcolor: '#FFF',
                                            border: 'none',
                                            '&:hover': { bgcolor: '#F6F6F6' },
                                        }}
                                    >
                                        {contentVisible ? (
                                            <KeyboardArrowUpIcon sx={{ color: '#000' }} />
                                        ) : (
                                            <KeyboardArrowDownIcon sx={{ color: '#000' }} />
                                        )}
                                    </Button>

                                    {contentVisible && (
                                        <>
                                            <FormControl fullWidth sx={{ position: 'relative', bottom: 170, ml: 2 }}>
                                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Title</FormLabel>
                                                <Switch
                                                    checked={isSwitchOn}
                                                    onChange={handleSwitchChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{
                                                        position: 'relative',
                                                        marginLeft: '375px',
                                                        bottom: '22px',
                                                        width: '45px',
                                                        height: '23px',
                                                        padding: 0,
                                                        '& .MuiSwitch-switchBase': {
                                                            padding: 1,
                                                            transform: 'translateX(0px)',
                                                            '&.Mui-checked': {
                                                                transform: 'translateX(20px)',
                                                                color: '#fff',
                                                                '& + .MuiSwitch-track': {
                                                                    backgroundColor: '#000',
                                                                    opacity: 1,
                                                                },
                                                            },
                                                        },
                                                        '& .MuiSwitch-thumb': {
                                                            position: 'relative',
                                                            bottom: '0.3rem',
                                                            right: 3,
                                                            width: 17,
                                                            height: 17,
                                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                                        },
                                                        '& .MuiSwitch-track': {
                                                            borderRadius: 14,
                                                            backgroundColor: '#d1d1d1',
                                                            opacity: 1,
                                                            transition: 'background-color 0.3s',
                                                        },
                                                    }}
                                                />
                                                <TextField
                                                    bgcolor='#D1D1D1'
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Ex. Future of AI"
                                                    sx={{
                                                        position: 'relative',
                                                        bottom: '18px',
                                                        borderRadius: '8px',
                                                        padding: '4px 0px',
                                                        width: '430px',
                                                        '& .MuiInputBase-root': {
                                                            backgroundColor: '#F6F6F6',
                                                            color: '#6D6D6D'
                                                        },
                                                    }} />
                                            </FormControl>

                                            <FormControl fullWidth sx={{ position: 'relative', bottom: 170, ml: 2 }}>
                                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Subtitle</FormLabel>
                                                <Switch
                                                    checked={isSwitchOn}
                                                    onChange={handleSwitchChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    sx={{
                                                        position: 'relative',
                                                        marginLeft: '375px',
                                                        bottom: '22px',
                                                        width: '45px',
                                                        height: '23px',
                                                        padding: 0,
                                                        '& .MuiSwitch-switchBase': {
                                                            padding: 1,
                                                            transform: 'translateX(0px)',
                                                            '&.Mui-checked': {
                                                                transform: 'translateX(20px)',
                                                                color: '#fff',
                                                                '& + .MuiSwitch-track': {
                                                                    backgroundColor: '#000',
                                                                    opacity: 1,
                                                                },
                                                            },
                                                        },
                                                        '& .MuiSwitch-thumb': {
                                                            position: 'relative',
                                                            bottom: '0.3rem',
                                                            right: 3,
                                                            width: 17,
                                                            height: 17,
                                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                                        },
                                                        '& .MuiSwitch-track': {
                                                            borderRadius: 14,
                                                            backgroundColor: '#d1d1d1',
                                                            opacity: 1,
                                                            transition: 'background-color 0.3s',
                                                        },
                                                    }}
                                                />
                                                <TextField
                                                    bgcolor='#D1D1D1'
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Your name"
                                                    sx={{
                                                        position: 'relative',
                                                        bottom: '18px',
                                                        borderRadius: '8px',
                                                        padding: '4px 0px',
                                                        width: '430px',
                                                        '& .MuiInputBase-root': {
                                                            backgroundColor: '#F6F6F6',
                                                            color: '#6D6D6D'
                                                        },
                                                    }} />
                                            </FormControl>
                                        </>
                                    )}
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '935px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '420px' }}>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.66663 7H9.33329C10.622 7 11.6666 8.04467 11.6666 9.33333V46.6667C11.6666 47.9553 10.622 49 9.33329 49H4.66663" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M51.3334 7H46.6667C45.378 7 44.3334 8.04467 44.3334 9.33333V46.6667C44.3334 47.9553 45.378 49 46.6667 49H51.3334" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M37.3333 9.33333C37.3333 8.04467 36.2886 7 35 7H21C19.7113 7 18.6666 8.04467 18.6666 9.33333V46.6667C18.6666 47.9553 19.7113 49 21 49H35C36.2886 49 37.3333 47.9553 37.3333 46.6667V9.33333Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'LinkedInBioMaker' && (
                    <>

                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00005 43.6349C9.2052 44 10.833 44 13.6 44H34.4C37.167 44 38.7948 44 40 43.6349M8.00005 43.6349C7.74164 43.5566 7.50267 43.4615 7.27606 43.346C6.14708 42.7708 5.2292 41.8529 4.65396 40.7239C4 39.4405 4 37.7603 4 34.4V13.6C4 10.2397 4 8.55953 4.65396 7.27606C5.2292 6.14708 6.14708 5.2292 7.27606 4.65396C8.55953 4 10.2397 4 13.6 4H34.4C37.7603 4 39.4405 4 40.7239 4.65396C41.8529 5.2292 42.7708 6.14708 43.346 7.27606C44 8.55953 44 10.2397 44 13.6V34.4C44 37.7603 44 39.4405 43.346 40.7239C42.7708 41.8529 41.8529 42.7708 40.7239 43.346C40.4973 43.4615 40.2584 43.5566 40 43.6349M8.00005 43.6349C8.00071 42.0162 8.01041 41.1597 8.15372 40.4393C8.78497 37.2658 11.2658 34.785 14.4393 34.1537C15.2121 34 16.1414 34 18 34H30C31.8586 34 32.7879 34 33.5607 34.1537C36.7342 34.785 39.215 37.2658 39.8463 40.4393C39.9896 41.1597 39.9993 42.0162 40 43.6349M32 19C32 23.4183 28.4183 27 24 27C19.5817 27 16 23.4183 16 19C16 14.5817 19.5817 11 24 11C28.4183 11 32 14.5817 32 19Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        LinkedIn Bio Maker
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>What do you do?</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex: co-founder of Nexpost, a tool that helps you grow on LinkedIn"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 3, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Who do you target?</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex: founders, solopreneurs, freelancers, agencies"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '15px', color: '#4F4F4F', bottom: '18px', }}>What do you want people to do after reading your summary?</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex: follow, visit website, schedule a call"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Writing sample</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="paste your writing sample for the bio maker"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '110px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Professional
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Helpful
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Persuasive
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Friendly
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Humorous
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Inspiring
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Formal
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Academic
                                    </Button>

                                    <div>
                                        <Button
                                            variant="outlined"
                                            // onClick={handleButtonClick}
                                            sx={{
                                                fontSize: "14px",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                color: "#B0B0B0",
                                                height: "35px",
                                                width: "100px",
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #D1D1D1",
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Custom
                                        </Button>
                                        {isBoxOpen && (
                                            <Box
                                                sx={{
                                                    marginTop: 2,
                                                    padding: 2,
                                                    border: "1px solid #D1D1D1",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#F9F9F9",
                                                    width: "300px",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                    List of Items
                                                </Typography>
                                                <List>
                                                    {items.map((item, index) => (
                                                        <ListItem key={index}>{item}</ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </div>
                                </div>
                            </FormControl>

                            <FormControl fullWidth sx={{ position: 'relative', bottom: 10, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Toggle to include emojis in your summary</FormLabel>
                                <Switch
                                    checked={isSwitchOn}
                                    onChange={handleSwitchChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    sx={{
                                        position: 'relative',
                                        marginLeft: '375px',
                                        bottom: '22px',
                                        width: '45px',
                                        height: '23px',
                                        padding: 0,
                                        '& .MuiSwitch-switchBase': {
                                            padding: 1,
                                            transform: 'translateX(0px)',
                                            '&.Mui-checked': {
                                                transform: 'translateX(20px)',
                                                color: '#fff',
                                                '& + .MuiSwitch-track': {
                                                    backgroundColor: '#000',
                                                    opacity: 1,
                                                },
                                            },
                                        },
                                        '& .MuiSwitch-thumb': {
                                            position: 'relative',
                                            bottom: '0.3rem',
                                            right: 3,
                                            width: 17,
                                            height: 17,
                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.5)',
                                        },
                                        '& .MuiSwitch-track': {
                                            borderRadius: 14,
                                            backgroundColor: '#d1d1d1',
                                            opacity: 1,
                                            transition: 'background-color 0.3s',
                                        },
                                    }}
                                />
                            </FormControl>

                            <Box
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: 'center', 
                                    marginLeft: '120px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 4,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate Bio
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '835px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '380px' }}>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.33335 50.9077C10.7394 51.3337 12.6384 51.3337 15.8666 51.3337H40.1333C43.3615 51.3337 45.2606 51.3337 46.6666 50.9077M9.33335 50.9077C9.03188 50.8163 8.75307 50.7054 8.48869 50.5707C7.17156 49.8996 6.10069 48.8287 5.42958 47.5116C4.66663 46.0142 4.66663 44.054 4.66663 40.1337V15.867C4.66663 11.9466 4.66663 9.98644 5.42958 8.48906C6.10069 7.17192 7.17156 6.10106 8.48869 5.42995C9.98608 4.66699 11.9463 4.66699 15.8666 4.66699H40.1333C44.0537 4.66699 46.0138 4.66699 47.5112 5.42995C48.8284 6.10106 49.8992 7.17192 50.5703 8.48906C51.3333 9.98644 51.3333 11.9466 51.3333 15.867V40.1337C51.3333 44.054 51.3333 46.0142 50.5703 47.5116C49.8992 48.8287 48.8284 49.8996 47.5112 50.5707C47.2469 50.7054 46.968 50.8163 46.6666 50.9077M9.33335 50.9077C9.33412 49.0192 9.34544 48.02 9.51263 47.1795C10.2491 43.477 13.1433 40.5828 16.8458 39.8463C17.7474 39.667 18.8316 39.667 21 39.667H35C37.1684 39.667 38.2525 39.667 39.1541 39.8463C42.8566 40.5828 45.7508 43.477 46.4873 47.1795C46.6545 48.02 46.6658 49.0192 46.6666 50.9077M37.3333 22.167C37.3333 27.3217 33.1546 31.5003 28 31.5003C22.8453 31.5003 18.6666 27.3217 18.6666 22.167C18.6666 17.0123 22.8453 12.8337 28 12.8337C33.1546 12.8337 37.3333 17.0123 37.3333 22.167Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'FacebookPostGenerator' && (
                    <>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.30273 41.5142V6.48702C3.30273 5.64248 3.63822 4.83256 4.23539 4.23539C4.83256 3.63822 5.64248 3.30273 6.48702 3.30273H41.5142C42.3586 3.30273 43.1687 3.63822 43.7658 4.23539C44.3628 4.83256 44.6984 5.64248 44.6984 6.48702V41.5142C44.6984 42.3586 44.3628 43.1687 43.7658 43.7658C43.1687 44.3628 42.3586 44.6984 41.5142 44.6984H31.9613V29.6049H34.2222C34.7374 29.6049 35.2312 29.4003 35.5955 29.036C35.9598 28.6717 36.1646 28.1777 36.1646 27.6625V25.2106C36.1646 24.9555 36.1143 24.703 36.0168 24.4673C35.9191 24.2316 35.7761 24.0175 35.5955 23.8371C35.4153 23.6568 35.201 23.5137 34.9654 23.4161C34.7297 23.3185 34.4772 23.2682 34.2222 23.2682H32.0887V20.275C32.0887 17.6002 33.2987 17.6002 34.5087 17.6002H36.069C36.3254 17.6107 36.5807 17.5649 36.8173 17.4658C37.0539 17.3668 37.266 17.217 37.4383 17.027C37.6233 16.8509 37.7698 16.6382 37.8685 16.4025C37.9672 16.1668 38.0159 15.9132 38.0114 15.6578V13.3014C38.02 13.0421 37.9774 12.7837 37.8857 12.5409C37.7943 12.2981 37.6561 12.0757 37.4784 11.8864C37.301 11.6972 37.088 11.5447 36.8517 11.4378C36.6155 11.3309 36.3601 11.2717 36.1009 11.2634H32.4389C31.3705 11.2233 30.306 11.4155 29.319 11.8269C28.3321 12.2383 27.4462 12.8591 26.7226 13.6462C25.999 14.4335 25.4549 15.3683 25.1279 16.3864C24.8008 17.4044 24.6987 18.4812 24.8285 19.5426V23.2682H22.7906C22.5328 23.264 22.2768 23.3111 22.0374 23.4068C21.7981 23.5025 21.5802 23.6449 21.3965 23.8257C21.2127 24.0065 21.0668 24.2221 20.9671 24.4599C20.8675 24.6976 20.8163 24.9529 20.8163 25.2106V27.6625C20.8163 27.9203 20.8675 28.1755 20.9671 28.4133C21.0668 28.6511 21.2127 28.8666 21.3965 29.0474C21.5802 29.2282 21.7981 29.3706 22.0374 29.4663C22.2768 29.562 22.5328 29.6092 22.7906 29.6049H24.8285V44.6984H6.48702C5.64248 44.6984 4.83256 44.3628 4.23539 43.7658C3.63822 43.1687 3.30273 42.3586 3.30273 41.5142Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        Facebook Post Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Describe your profession</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Data scientist - Cybersecurity"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        position: 'absolute',
                                        ml: '19.2rem',
                                        color: '#FFFFF',
                                        width: '120px',
                                        padding: '4px',
                                        backgroundColor: '#000',
                                        borderRadius: '8px',
                                        marginTop: '1.9rem',
                                        gap:1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate
                                </Button>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Enter your topic</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Your Writing Sample
                                    <Typography
                                        style={{
                                            position: 'relative',
                                            left: '310px',
                                            bottom: '23px',
                                            width: '115px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        Select Post type
                                    </Typography>
                                </FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '100px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 70px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Thoughts</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Let us know what you want to focus on..."
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '110px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Professional
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Helpful
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Persuasive
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Friendly
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Humorous
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Inspiring
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Formal
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Academic
                                    </Button>

                                    <div>
                                        <Button
                                            variant="outlined"
                                            // onClick={handleButtonClick}
                                            sx={{
                                                fontSize: "14px",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                color: "#B0B0B0",
                                                height: "35px",
                                                width: "100px",
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #D1D1D1",
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Custom
                                        </Button>
                                        {isBoxOpen && (
                                            <Box
                                                sx={{
                                                    marginTop: 2,
                                                    padding: 2,
                                                    border: "1px solid #D1D1D1",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#F9F9F9",
                                                    width: "300px",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                    List of Items
                                                </Typography>
                                                <List>
                                                    {items.map((item, index) => (
                                                        <ListItem key={index}>{item}</ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </div>
                                </div>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Creativity Level
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            flexGrow: 0,
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#9E9E9E",
                                            marginLeft: "26rem",
                                            marginTop: "-1.4rem",
                                        }}
                                    >
                                        {value}
                                    </Typography></FormLabel>

                                <Box
                                    sx={{
                                        width: 415,
                                        marginTop: "5px",
                                    }}
                                >

                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        step={1}
                                        marks
                                        min={1}
                                        max={5}
                                        sx={{
                                            flexGrow: 2,
                                            color: "#000",
                                            "& .MuiSlider-thumb": {
                                                backgroundColor: "#000",
                                            },
                                            "& .MuiSlider-rail": {
                                                backgroundColor: "#E0E0E0",
                                            },
                                        }} />
                                </Box>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Post size (in characters)</FormLabel>
                                <TextField
                                    type="number"
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="800"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <Box
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: 'center', 
                                    marginLeft: '120px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 4,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate Post
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '935px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '420px' }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.30273 41.5142V6.48702C3.30273 5.64248 3.63822 4.83256 4.23539 4.23539C4.83256 3.63822 5.64248 3.30273 6.48702 3.30273H41.5142C42.3586 3.30273 43.1687 3.63822 43.7658 4.23539C44.3628 4.83256 44.6984 5.64248 44.6984 6.48702V41.5142C44.6984 42.3586 44.3628 43.1687 43.7658 43.7658C43.1687 44.3628 42.3586 44.6984 41.5142 44.6984H31.9613V29.6049H34.2222C34.7374 29.6049 35.2312 29.4003 35.5955 29.036C35.9598 28.6717 36.1646 28.1777 36.1646 27.6625V25.2106C36.1646 24.9555 36.1143 24.703 36.0168 24.4673C35.9191 24.2316 35.7761 24.0175 35.5955 23.8371C35.4153 23.6568 35.201 23.5137 34.9654 23.4161C34.7297 23.3185 34.4772 23.2682 34.2222 23.2682H32.0887V20.275C32.0887 17.6002 33.2987 17.6002 34.5087 17.6002H36.069C36.3254 17.6107 36.5807 17.5649 36.8173 17.4658C37.0539 17.3668 37.266 17.217 37.4383 17.027C37.6233 16.8509 37.7698 16.6382 37.8685 16.4025C37.9672 16.1668 38.0159 15.9132 38.0114 15.6578V13.3014C38.02 13.0421 37.9774 12.7837 37.8857 12.5409C37.7943 12.2981 37.6561 12.0757 37.4784 11.8864C37.301 11.6972 37.088 11.5447 36.8517 11.4378C36.6155 11.3309 36.3601 11.2717 36.1009 11.2634H32.4389C31.3705 11.2233 30.306 11.4155 29.319 11.8269C28.3321 12.2383 27.4462 12.8591 26.7226 13.6462C25.999 14.4335 25.4549 15.3683 25.1279 16.3864C24.8008 17.4044 24.6987 18.4812 24.8285 19.5426V23.2682H22.7906C22.5328 23.264 22.2768 23.3111 22.0374 23.4068C21.7981 23.5025 21.5802 23.6449 21.3965 23.8257C21.2127 24.0065 21.0668 24.2221 20.9671 24.4599C20.8675 24.6976 20.8163 24.9529 20.8163 25.2106V27.6625C20.8163 27.9203 20.8675 28.1755 20.9671 28.4133C21.0668 28.6511 21.2127 28.8666 21.3965 29.0474C21.5802 29.2282 21.7981 29.3706 22.0374 29.4663C22.2768 29.562 22.5328 29.6092 22.7906 29.6049H24.8285V44.6984H6.48702C5.64248 44.6984 4.83256 44.3628 4.23539 43.7658C3.63822 43.1687 3.30273 42.3586 3.30273 41.5142Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'InstagramPostGenerator' && (
                    <>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M34.6144 13.3128C34.1747 13.3128 33.8184 12.9564 33.8184 12.5168C33.8184 12.0771 34.1747 11.7207 34.6144 11.7207" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M34.6133 13.3128C35.053 13.3128 35.4094 12.9564 35.4094 12.5168C35.4094 12.0771 35.053 11.7207 34.6133 11.7207" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.44336 12.6366C4.44336 8.1116 8.11157 4.44336 12.6366 4.44336H34.4853C39.0101 4.44336 42.6784 8.1116 42.6784 12.6366V34.4852C42.6784 39.0101 39.0101 42.6784 34.4853 42.6784H12.6366C8.11157 42.6784 4.44336 39.0101 4.44336 34.4852V12.6366Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.4414 23.5613C15.4414 25.7149 16.2969 27.7802 17.8197 29.303C19.3425 30.8258 21.4078 31.6813 23.5613 31.6813C25.7149 31.6813 27.7802 30.8258 29.303 29.303C30.8258 27.7802 31.6813 25.7149 31.6813 23.5613C31.6813 21.4078 30.8258 19.3425 29.303 17.8197C27.7802 16.2969 25.7149 15.4414 23.5613 15.4414C21.4078 15.4414 19.3425 16.2969 17.8197 17.8197C16.2969 19.3425 15.4414 21.4078 15.4414 23.5613Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        Instagram Post Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl
                                fullWidth
                                sx={{ marginBottom: 1, marginTop: 5, ml: 4 }}
                            >
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px' }}>
                                    Image
                                </FormLabel>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    sx={{
                                        position: 'relative',
                                        bottom: 3,
                                        textTransform: 'none',
                                        borderColor: '#4F4F4F',
                                        color: '#4F4F4F',
                                        height: '150px',
                                        width: '430px',
                                        borderStyle: 'dotted',
                                        borderWidth: '2px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center', // Ensures text is centered
                                        flexDirection: 'column', // Align logo and text in column
                                    }}
                                >
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{
                                            marginBottom: '8px', // Space between logo and text
                                        }}
                                    >
                                        <path
                                            d="M5.84615 28H26.1538C27.1735 28 28 27.1735 28 26.1538V5.84615C28 4.82655 27.1735 4 26.1538 4H5.84615C4.82655 4 4 4.82655 4 5.84615V26.1538C4 27.1735 4.82655 28 5.84615 28Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.30731 27.9994L19.7842 15.2978C19.9501 15.1596 20.1591 15.084 20.375 15.084C20.5909 15.084 20.7999 15.1596 20.9658 15.2978L27.9996 20.3378"
                                            stroke="#1E1E1E"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M11.3851 14.1537C12.9145 14.1537 14.1544 12.9139 14.1544 11.3845C14.1544 9.85506 12.9145 8.61523 11.3851 8.61523C9.85573 8.61523 8.61591 9.85506 8.61591 11.3845C8.61591 12.9139 9.85573 14.1537 11.3851 14.1537Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography sx={{ fontSize: '10px', color: '#1E1E1E', width: '180px' }}>Drop your image here, or click to select JPG, PNG, GIF files less than 10MB</Typography>

                                    <input
                                        type="file"
                                        accept=".png, .jpg, .jpeg, .gif"
                                        hidden
                                        onChange={handleFileUpload}
                                    />
                                </Button>

                                <Typography sx={{ fontSize: '10px' }}>If not uploaded, Will be generated with AI.</Typography>

                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{
                                            marginTop: '10px',
                                            maxWidth: '100%',
                                            maxHeight: '200px',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                        }}
                                    />
                                )}

                                {error && (
                                    <Typography
                                        color="error"
                                        sx={{ marginTop: 2, fontSize: '14px' }}
                                    >
                                        {error}
                                    </Typography>
                                )}
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Thoughts</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Let us know what you want to focus on..."
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '110px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Professional
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Helpful
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Persuasive
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Friendly
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Humorous
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Inspiring
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Formal
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Academic
                                    </Button>

                                    <div>
                                        <Button
                                            variant="outlined"
                                            // onClick={handleButtonClick}
                                            sx={{
                                                fontSize: "14px",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                color: "#B0B0B0",
                                                height: "35px",
                                                width: "100px",
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #D1D1D1",
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Custom
                                        </Button>
                                        {isBoxOpen && (
                                            <Box
                                                sx={{
                                                    marginTop: 2,
                                                    padding: 2,
                                                    border: "1px solid #D1D1D1",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#F9F9F9",
                                                    width: "300px",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                    List of Items
                                                </Typography>
                                                <List>
                                                    {items.map((item, index) => (
                                                        <ListItem key={index}>{item}</ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </div>
                                </div>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Post size (in characters)</FormLabel>
                                <TextField
                                    type="number"
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="800"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <Box
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: 'center', 
                                    marginLeft: '120px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 4,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate Post
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '714px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '320px' }}>
                                <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.3835 16.0313C39.8704 16.0313 39.4547 15.6155 39.4547 15.1026C39.4547 14.5896 39.8704 14.1738 40.3835 14.1738" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M40.3821 16.0313C40.8951 16.0313 41.3108 15.6155 41.3108 15.1026C41.3108 14.5896 40.8951 14.1738 40.3821 14.1738" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.1842 15.2423C5.1842 9.96321 9.46379 5.68359 14.743 5.68359H40.2331C45.5121 5.68359 49.7918 9.96321 49.7918 15.2423V40.7324C49.7918 46.0114 45.5121 50.2911 40.2331 50.2911H14.743C9.46379 50.2911 5.1842 46.0114 5.1842 40.7324V15.2423Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.0153 27.9889C18.0153 30.5013 19.0133 32.9109 20.7899 34.6875C22.5665 36.4641 24.976 37.4621 27.4885 37.4621C30.001 37.4621 32.4105 36.4641 34.1871 34.6875C35.9637 32.9109 36.9618 30.5013 36.9618 27.9889C36.9618 25.4764 35.9637 23.0669 34.1871 21.2903C32.4105 19.5137 30.001 18.5156 27.4885 18.5156C24.976 18.5156 22.5665 19.5137 20.7899 21.2903C19.0133 23.0669 18.0153 25.4764 18.0153 27.9889Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'RedditPostGenerator' && (
                    <>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_193_15641)">
                                        <path d="M24.9504 15.5234C29.9937 15.5234 34.5266 17.0966 37.6635 19.5992C38.7366 19.2231 39.9088 19.2434 40.9683 19.6565C42.0277 20.0696 42.9043 20.8482 43.4396 21.8514C43.9748 22.8547 44.1333 24.0164 43.8864 25.1264C43.6395 26.2364 43.0035 27.2214 42.0935 27.9032C42.0935 34.7407 34.4181 40.283 24.9523 40.283C15.6675 40.283 8.10627 34.9502 7.81106 28.2956L5.90648 27.9032C4.99645 27.2214 4.36047 26.2364 4.11359 25.1264C3.8667 24.0164 4.02521 22.8547 4.56045 21.8514C5.09568 20.8482 5.97229 20.0696 7.03172 19.6565C8.09115 19.2434 9.26344 19.2231 10.3365 19.5992C13.4715 17.0985 18.0044 15.5234 23.0477 15.5234H24.9504Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.9531 15.5229L26.8577 6L38.2852 7.90458" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M36.375 7.90458C36.375 8.40971 36.5757 8.89414 36.9328 9.25132C37.29 9.6085 37.7745 9.80916 38.2796 9.80916C38.7847 9.80916 39.2691 9.6085 39.6263 9.25132C39.9835 8.89414 40.1842 8.40971 40.1842 7.90458C40.1842 7.39945 39.9835 6.91502 39.6263 6.55784C39.2691 6.20066 38.7847 6 38.2796 6C37.7745 6 37.29 6.20066 36.9328 6.55784C36.5757 6.91502 36.375 7.39945 36.375 7.90458Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.2374 25.9983C19.7634 25.9983 20.1897 25.572 20.1897 25.046C20.1897 24.5201 19.7634 24.0938 19.2374 24.0938C18.7115 24.0938 18.2852 24.5201 18.2852 25.046C18.2852 25.572 18.7115 25.9983 19.2374 25.9983Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M30.6632 25.9983C31.1892 25.9983 31.6155 25.572 31.6155 25.046C31.6155 24.5201 31.1892 24.0938 30.6632 24.0938C30.1373 24.0938 29.7109 24.5201 29.7109 25.046C29.7109 25.572 30.1373 25.9983 30.6632 25.9983Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.1406 32.6641C22.411 33.2983 23.6794 33.6164 24.9498 33.6164C26.2201 33.6164 27.4886 33.2983 28.7589 32.6641" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_193_15641">
                                            <rect width="48" height="48" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        Reddit Post Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ width: '100%', padding: '20px' }}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => (
                                        <Step key={label} completed={activeStep > index}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>

                                <Box sx={{ mt: 4 }}>
                                    {activeStep === steps.length ? (
                                        <Box>
                                            <Typography sx={{ mb: 2 }}>All steps completed! 🎉</Typography>
                                            <Button onClick={handleReset} variant="outlined">
                                                Reset
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <Typography sx={{ mb: 2 }}>
                                                {activeStep === 0
                                                    ?
                                                    <>
                                                        <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 1, ml: '0.7rem' }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Industry</FormLabel>
                                                            <TextField
                                                                bgcolor='#D1D1D1'
                                                                size="small"
                                                                placeholder="Data scientist - Cybersecurity"
                                                                variant="outlined"
                                                                height="80px"
                                                                sx={{
                                                                    position: 'relative',
                                                                    bottom: '18px',
                                                                    borderRadius: '8px',
                                                                    padding: '4px 0px',
                                                                    width: '430px',
                                                                    '& .MuiInputBase-root': {
                                                                        height: '80px',
                                                                        backgroundColor: '#F6F6F6',
                                                                        color: '#6D6D6D'
                                                                    },
                                                                    '& .MuiOutlinedInput-input': {
                                                                        padding: '8px 14px 50px',
                                                                    },
                                                                }} />
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 1, ml: '0.7rem' }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Advertising Topic</FormLabel>
                                                            <TextField
                                                                bgcolor='#D1D1D1'
                                                                size="small"
                                                                placeholder="Data scientist - Cybersecurity"
                                                                variant="outlined"
                                                                height="80px"
                                                                sx={{
                                                                    position: 'relative',
                                                                    bottom: '18px',
                                                                    borderRadius: '8px',
                                                                    padding: '4px 0px',
                                                                    width: '430px',
                                                                    '& .MuiInputBase-root': {
                                                                        height: '80px',
                                                                        backgroundColor: '#F6F6F6',
                                                                        color: '#6D6D6D'
                                                                    },
                                                                    '& .MuiOutlinedInput-input': {
                                                                        padding: '8px 14px 50px',
                                                                    },
                                                                }} />
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, ml: '0.7rem', bottom: '18px', }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Audience</FormLabel>
                                                            <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Young Adults
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '105px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Professionals
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '100px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Seniors
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '100px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Students
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '105px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Homeowners
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '145px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Tech Enthusiasts
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '145px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Luxury Shoppers
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '300px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Environmentally Conscious Consumers
                                                                </Button>

                                                                <div>
                                                                    <Button
                                                                        variant="outlined"
                                                                        // onClick={handleButtonClick}
                                                                        sx={{
                                                                            fontSize: "14px",
                                                                            textTransform: "none",
                                                                            borderRadius: "50px",
                                                                            color: "#B0B0B0",
                                                                            height: "35px",
                                                                            width: "100px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            border: "1px solid #D1D1D1",
                                                                            marginTop: 1,
                                                                            gap: 1,
                                                                        }}
                                                                    >
                                                                        <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        Custom
                                                                    </Button>
                                                                    {isBoxOpen && (
                                                                        <Box
                                                                            sx={{
                                                                                marginTop: 2,
                                                                                padding: 2,
                                                                                border: "1px solid #D1D1D1",
                                                                                borderRadius: "8px",
                                                                                backgroundColor: "#F9F9F9",
                                                                                width: "300px",
                                                                            }}
                                                                        >
                                                                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                                                List of Items
                                                                            </Typography>
                                                                            <List>
                                                                                {items.map((item, index) => (
                                                                                    <ListItem key={index}>{item}</ListItem>
                                                                                ))}
                                                                            </List>
                                                                        </Box>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 1, ml: '0.7rem' }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Audience (If none of above)</FormLabel>
                                                            <TextField
                                                                bgcolor='#D1D1D1'
                                                                size="small"
                                                                placeholder="Data scientist - Cybersecurity"
                                                                variant="outlined"
                                                                height="80px"
                                                                sx={{
                                                                    position: 'relative',
                                                                    bottom: '18px',
                                                                    borderRadius: '8px',
                                                                    padding: '4px 0px',
                                                                    width: '430px',
                                                                    '& .MuiInputBase-root': {
                                                                        height: '40px',
                                                                        backgroundColor: '#F6F6F6',
                                                                        color: '#6D6D6D'
                                                                    },
                                                                    '& .MuiOutlinedInput-input': {
                                                                        padding: '8px 14px 10px',
                                                                    },
                                                                }} />
                                                        </FormControl>
                                                    </>

                                                    :
                                                    <>
                                                        <FormControl fullWidth sx={{ marginBottom: 2, ml: '0.7rem', bottom: '11px', }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Target Subreddit</FormLabel>
                                                            <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 1
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 2
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 3
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 4
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 5
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 6
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >r/subreddit 7
                                                                </Button>

                                                                <div>
                                                                    <Button
                                                                        variant="outlined"
                                                                        // onClick={handleButtonClick}
                                                                        sx={{
                                                                            fontSize: "14px",
                                                                            textTransform: "none",
                                                                            borderRadius: "50px",
                                                                            color: "#B0B0B0",
                                                                            height: "35px",
                                                                            width: "100px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            border: "1px solid #D1D1D1",
                                                                            marginTop: 1,
                                                                            gap: 1,
                                                                        }}
                                                                    >
                                                                        <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        Custom
                                                                    </Button>
                                                                    {isBoxOpen && (
                                                                        <Box
                                                                            sx={{
                                                                                marginTop: 2,
                                                                                padding: 2,
                                                                                border: "1px solid #D1D1D1",
                                                                                borderRadius: "8px",
                                                                                backgroundColor: "#F9F9F9",
                                                                                width: "300px",
                                                                            }}
                                                                        >
                                                                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                                                List of Items
                                                                            </Typography>
                                                                            <List>
                                                                                {items.map((item, index) => (
                                                                                    <ListItem key={index}>{item}</ListItem>
                                                                                ))}
                                                                            </List>
                                                                        </Box>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 2, ml: '0.7rem', bottom: '11px', }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Post Type</FormLabel>
                                                            <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Link Post
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Text Ads
                                                                </Button>

                                                                <div>
                                                                    <Button
                                                                        variant="outlined"
                                                                        // onClick={handleButtonClick}
                                                                        sx={{
                                                                            fontSize: "14px",
                                                                            textTransform: "none",
                                                                            borderRadius: "50px",
                                                                            color: "#B0B0B0",
                                                                            height: "35px",
                                                                            width: "100px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            border: "1px solid #D1D1D1",
                                                                            marginTop: 1,
                                                                            gap: 1,
                                                                        }}
                                                                    >
                                                                        <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        Custom
                                                                    </Button>
                                                                    {isBoxOpen && (
                                                                        <Box
                                                                            sx={{
                                                                                marginTop: 2,
                                                                                padding: 2,
                                                                                border: "1px solid #D1D1D1",
                                                                                borderRadius: "8px",
                                                                                backgroundColor: "#F9F9F9",
                                                                                width: "300px",
                                                                            }}
                                                                        >
                                                                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                                                List of Items
                                                                            </Typography>
                                                                            <List>
                                                                                {items.map((item, index) => (
                                                                                    <ListItem key={index}>{item}</ListItem>
                                                                                ))}
                                                                            </List>
                                                                        </Box>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, ml: '0.7rem', bottom: '11px', }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                                            <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '120px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Professional
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '90px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Helpful
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '105px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Persuasive
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '100px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Friendly
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '110px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Humorous
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '100px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Inspiring
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '90px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Formal
                                                                </Button>

                                                                <Button
                                                                    variant="outlined"
                                                                    sx={{
                                                                        fontSize: '14px',
                                                                        textTransform: 'none',
                                                                        borderRadius: '50px',
                                                                        color: '#B0B0B0',
                                                                        height: '35px',
                                                                        width: '110px',
                                                                        backgroundColor: '#FFFFFF',
                                                                        border: '1px solid #D1D1D1',
                                                                        marginTop: 1,
                                                                    }}
                                                                >Academic
                                                                </Button>

                                                                <div>
                                                                    <Button
                                                                        variant="outlined"
                                                                        // onClick={handleButtonClick}
                                                                        sx={{
                                                                            fontSize: "14px",
                                                                            textTransform: "none",
                                                                            borderRadius: "50px",
                                                                            color: "#B0B0B0",
                                                                            height: "35px",
                                                                            width: "100px",
                                                                            backgroundColor: "#FFFFFF",
                                                                            border: "1px solid #D1D1D1",
                                                                            marginTop: 1,
                                                                            gap: 1,
                                                                        }}
                                                                    >
                                                                        <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                            <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                                        </svg>
                                                                        Custom
                                                                    </Button>
                                                                    {isBoxOpen && (
                                                                        <Box
                                                                            sx={{
                                                                                marginTop: 2,
                                                                                padding: 2,
                                                                                border: "1px solid #D1D1D1",
                                                                                borderRadius: "8px",
                                                                                backgroundColor: "#F9F9F9",
                                                                                width: "300px",
                                                                            }}
                                                                        >
                                                                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                                                List of Items
                                                                            </Typography>
                                                                            <List>
                                                                                {items.map((item, index) => (
                                                                                    <ListItem key={index}>{item}</ListItem>
                                                                                ))}
                                                                            </List>
                                                                        </Box>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: '0.7rem' }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Writing Style (optional)</FormLabel>
                                                            <TextField
                                                                bgcolor='#D1D1D1'
                                                                size="small"
                                                                placeholder="Paste your reddit post"
                                                                variant="outlined"
                                                                height="80px"
                                                                sx={{
                                                                    position: 'relative',
                                                                    bottom: '18px',
                                                                    borderRadius: '8px',
                                                                    padding: '4px 0px',
                                                                    width: '430px',
                                                                    '& .MuiInputBase-root': {
                                                                        height: '90px',
                                                                        backgroundColor: '#F6F6F6',
                                                                        color: '#6D6D6D'
                                                                    },
                                                                    '& .MuiOutlinedInput-input': {
                                                                        padding: '8px 14px 60px',
                                                                    },
                                                                }} />
                                                        </FormControl>

                                                        <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 1, ml: '0.7rem' }}>
                                                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Post Objective</FormLabel>
                                                            <TextField
                                                                bgcolor='#D1D1D1'
                                                                size="small"
                                                                placeholder="Ex: to sell my products that do x,y,z"
                                                                variant="outlined"
                                                                height="80px"
                                                                sx={{
                                                                    position: 'relative',
                                                                    bottom: '18px',
                                                                    borderRadius: '8px',
                                                                    padding: '4px 0px',
                                                                    width: '430px',
                                                                    '& .MuiInputBase-root': {
                                                                        height: '90px',
                                                                        backgroundColor: '#F6F6F6',
                                                                        color: '#6D6D6D'
                                                                    },
                                                                    '& .MuiOutlinedInput-input': {
                                                                        padding: '8px 14px 60px',
                                                                    },
                                                                }} />
                                                        </FormControl>
                                                    </>
                                                }
                                            </Typography>

                                            <Box>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                    sx={{
                                                        height: '45px',
                                                        width: '90px',
                                                        fontSize: 15,
                                                        mr: 22,
                                                        textTransform: 'none',
                                                        color: '#000',
                                                        borderRadius: '50px',
                                                        borderColor: '#000',
                                                        border: '1px solid',
                                                    }}
                                                    variant="outlined"
                                                >
                                                    Skip
                                                </Button>

                                                <Button
                                                    sx={{
                                                        height: '45px',
                                                        width: '180px',
                                                        fontSize: 15,
                                                        mr: 1,
                                                        textTransform: 'none',
                                                        color: '#FFF',
                                                        borderRadius: '50px',
                                                        backgroundColor: '#000',
                                                        border: '1px solid',
                                                        gap: 1
                                                    }}
                                                    variant="contained"
                                                    onClick={handleNext}
                                                >
                                                    {activeStep === steps.length - 1
                                                        ? <>
                                                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                                                <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                                                <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                                            </svg>
                                                            <Typography>Generate Post</Typography>
                                                        </>
                                                        :
                                                        <>
                                                            <Typography>Next</Typography>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9 18.1193L15.0596 12.0596L9 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </>
                                                    }
                                                </Button>
                                            </Box>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '714px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '320px' }}>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_193_15739)">
                                        <path d="M29.1087 18.1113C34.9926 18.1113 40.281 19.9467 43.9407 22.8664C45.1926 22.4276 46.5603 22.4513 47.7963 22.9332C49.0323 23.4151 50.055 24.3235 50.6794 25.494C51.3039 26.6645 51.4888 28.0198 51.2008 29.3148C50.9127 30.6098 50.1708 31.7589 49.1091 32.5544C49.1091 40.5314 40.1544 46.9975 29.111 46.9975C18.2787 46.9975 9.45728 40.7758 9.11287 33.0121L6.89086 32.5544C5.82915 31.7589 5.08718 30.6098 4.79914 29.3148C4.51111 28.0198 4.69604 26.6645 5.32048 25.494C5.94492 24.3235 6.96763 23.4151 8.20364 22.9332C9.43964 22.4513 10.8073 22.4276 12.0593 22.8664C15.7167 19.9489 21.0051 18.1113 26.889 18.1113H29.1087Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M29.1119 18.1101L31.3339 7L44.666 9.22201" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M42.4375 9.22201C42.4375 9.81132 42.6716 10.3765 43.0883 10.7932C43.505 11.2099 44.0702 11.444 44.6595 11.444C45.2488 11.444 45.814 11.2099 46.2307 10.7932C46.6474 10.3765 46.8815 9.81132 46.8815 9.22201C46.8815 8.6327 46.6474 8.06752 46.2307 7.65081C45.814 7.2341 45.2488 7 44.6595 7C44.0702 7 43.505 7.2341 43.0883 7.65081C42.6716 8.06752 42.4375 8.6327 42.4375 9.22201Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22.4436 30.3314C23.0572 30.3314 23.5547 29.834 23.5547 29.2204C23.5547 28.6068 23.0572 28.1094 22.4436 28.1094C21.8301 28.1094 21.3326 28.6068 21.3326 29.2204C21.3326 29.834 21.8301 30.3314 22.4436 30.3314Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M35.7737 30.3314C36.3873 30.3314 36.8847 29.834 36.8847 29.2204C36.8847 28.6068 36.3873 28.1094 35.7737 28.1094C35.1601 28.1094 34.6627 28.6068 34.6627 29.2204C34.6627 29.834 35.1601 30.3314 35.7737 30.3314Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M24.6641 38.1074C26.1461 38.8474 27.626 39.2184 29.1081 39.2184C30.5902 39.2184 32.07 38.8474 33.5521 38.1074" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_193_15739">
                                            <rect width="56" height="56" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'BlogGenerator' && (
                    <>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                padding: '12px 20px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                                position: 'absolute',
                                left: '60.3%',
                                transform: 'translateX(-50%)',
                                bottom: '73.1%',
                                width: '90%',
                                maxWidth: '1050px',
                                height: 'auto',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                                [theme.breakpoints.down('md')]: {
                                    width: '95%',
                                    padding: '12px 15px',
                                    bottom: '74.2%',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.6965 16.04V36.7378C44.6965 37.7934 44.2771 38.806 43.5307 39.5524C42.7843 40.2988 41.7717 40.7182 40.7161 40.7182M40.7161 40.7182C39.6605 40.7182 38.6479 40.2988 37.9015 39.5524C37.1551 38.806 36.7358 37.7934 36.7358 36.7378V8.87535C36.7358 8.45308 36.568 8.0481 36.2696 7.74954C35.9709 7.45095 35.5659 7.2832 35.1436 7.2832H4.89292C4.47066 7.2832 4.06569 7.45095 3.76711 7.74954C3.46852 8.0481 3.30078 8.45308 3.30078 8.87535V37.5339C3.30078 38.3784 3.63627 39.1885 4.23344 39.7855C4.83061 40.3826 5.64053 40.7182 6.48507 40.7182H40.7161Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.1848 15.2441H12.8555V23.2049H27.1848V15.2441Z" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.8555 32.7578H27.1848" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>


                                <div>
                                    <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                                        Blog Generator
                                    </Typography>
                                    <Typography style={{ width: '490px', fontSize: '14px', color: '#888888', fontFamily: 'Satoshi Variable', fontWeight: 500 }}>
                                        Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                    </Typography>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'absolute',
                                        right: '20px',
                                    }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 16C2 14.0307 2.09467 12.1733 2.21867 10.616C2.40533 8.264 4.26933 6.456 6.62267 6.292C8.884 6.13333 11.9733 6 16 6C20.0267 6 23.116 6.13333 25.3773 6.292C27.7307 6.456 29.5947 8.26533 29.7813 10.616C29.9053 12.1747 30 14.0293 30 16C30 18.04 29.8987 19.9587 29.768 21.5507C29.6881 22.6381 29.2161 23.6594 28.4396 24.4249C27.6631 25.1903 26.6351 25.6477 25.5467 25.712C23.2627 25.868 20.0667 26 16 26C11.9333 26 8.73733 25.868 6.45333 25.712C5.36491 25.6477 4.33687 25.1903 3.56039 24.4249C2.78392 23.6594 2.31186 22.6381 2.232 21.5507C2.08003 19.7043 2.00263 17.8526 2 16Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M13.3334 20V12L20.6667 16L13.3334 20Z"
                                            stroke="#1E1E1E"
                                            strokeWidth="2.08717"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <Typography
                                        style={{
                                            width: '100px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        How it works?
                                    </Typography>
                                </div>
                            </div>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            // marginLeft:'305px',
                            marginLeft: '24.5rem',
                            height: 'auto',
                            width: '495px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            backgroundColor: '#FFFFFF',
                            borderBottomLeftRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Describe your profession</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Business Manager"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        position: 'absolute',
                                        ml: '19.2rem',
                                        color: '#FFFFF',
                                        width: '120px',
                                        padding: '4px',
                                        backgroundColor: '#000',
                                        borderRadius: '8px',
                                        marginTop: '1.9rem',
                                        gap:1
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5489 8.91324C10.8093 9.17359 10.8093 9.5957 10.5489 9.85605L8.94343 11.4616L10.5489 13.0671C10.8093 13.3274 10.8093 13.7495 10.5489 14.0099C10.2886 14.2702 9.86649 14.2702 9.60614 14.0099L7.52922 11.933C7.26887 11.6726 7.26887 11.2505 7.52922 10.9902L9.60614 8.91324C9.86649 8.65289 10.2886 8.65289 10.5489 8.91324Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.45232 1.99019C5.71267 1.72983 6.13478 1.72983 6.39513 1.99018L8.47205 4.0671C8.59708 4.19212 8.66731 4.36169 8.66731 4.5385C8.66732 4.71531 8.59708 4.88488 8.47205 5.00991L6.39513 7.08683C6.13478 7.34718 5.71267 7.34718 5.45232 7.08683C5.19197 6.82648 5.19197 6.40437 5.45232 6.14402L7.05784 4.5385L5.45232 2.93299C5.19197 2.67265 5.19197 2.25054 5.45232 1.99019Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1032 4.53848C10.1032 4.1703 10.4017 3.87182 10.7699 3.87182H12.8211C13.0831 3.87182 13.3383 3.88115 13.5633 3.92509C13.7952 3.97036 14.0533 4.0631 14.2646 4.27448C14.476 4.48586 14.5688 4.74388 14.614 4.97579C14.658 5.20085 14.6673 5.45598 14.6673 5.71797V10.2821C14.6673 10.5441 14.658 10.7992 14.614 11.0243C14.5688 11.2562 14.476 11.5142 14.2646 11.7256C14.0533 11.9369 13.7952 12.0297 13.5633 12.075C13.3383 12.1189 13.0831 12.1282 12.8211 12.1282H8.00062C7.63243 12.1282 7.33395 11.8298 7.33395 11.4616C7.33395 11.0934 7.63243 10.7949 8.00062 10.7949H12.8211C13.0671 10.7949 13.214 10.7844 13.3058 10.7667C13.3235 10.6749 13.334 10.528 13.334 10.2821V5.71797C13.334 5.472 13.3235 5.32514 13.3058 5.23331C13.214 5.21565 13.0671 5.20515 12.8211 5.20515H10.7699C10.4017 5.20515 10.1032 4.90667 10.1032 4.53848Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.43795 3.92509C2.66301 3.88115 2.91814 3.87182 3.18014 3.87182H8.00065C8.36884 3.87182 8.66731 4.17031 8.66731 4.5385C8.66731 4.90669 8.36884 5.20515 8.00065 5.20515H3.18014C2.93416 5.20515 2.78731 5.21565 2.69548 5.23332C2.67782 5.32514 2.66732 5.47199 2.66732 5.71797V10.2821C2.66732 10.5281 2.67782 10.6749 2.69548 10.7667C2.78731 10.7844 2.93416 10.7949 3.18014 10.7949H5.23142C5.59961 10.7949 5.89809 11.0934 5.89809 11.4616C5.89809 11.8298 5.59961 12.1282 5.23142 12.1282H3.18014C2.91814 12.1282 2.66301 12.1189 2.43795 12.075C2.20603 12.0297 1.94801 11.9369 1.73664 11.7256C1.52526 11.5142 1.43253 11.2562 1.38725 11.0243C1.34331 10.7992 1.33398 10.5441 1.33398 10.2821V5.71797C1.33398 5.45597 1.34331 5.20084 1.38725 4.97578C1.43253 4.74387 1.52526 4.48585 1.73664 4.27447C1.94801 4.0631 2.20603 3.97037 2.43795 3.92509Z" fill="white" />
                                    </svg>
                                    Regenerate
                                </Button>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Enter your topic</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="The Future of AI in Business"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Your Writing Sample
                                    <Typography
                                        style={{
                                            position: 'relative',
                                            left: '310px',
                                            bottom: '23px',
                                            width: '115px',
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                        }}
                                    >
                                        Select Post type
                                    </Typography>
                                </FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '100px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 70px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', bottom: '18px', }}>Your Thoughts</FormLabel>
                                <TextField
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="Let us know what you want to focus on..."
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        bottom: '18px',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            height: '80px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 50px',
                                        },
                                    }} />
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Writing tone</FormLabel>
                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '110px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Professional
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Helpful
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Persuasive
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Friendly
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Humorous
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Inspiring
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Formal
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={{
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: '35px',
                                            width: '100px',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                        }}
                                    >Academic
                                    </Button>

                                    <div>
                                        <Button
                                            variant="outlined"
                                            // onClick={handleButtonClick}
                                            sx={{
                                                fontSize: "14px",
                                                textTransform: "none",
                                                borderRadius: "50px",
                                                color: "#B0B0B0",
                                                height: "35px",
                                                width: "100px",
                                                backgroundColor: "#FFFFFF",
                                                border: "1px solid #D1D1D1",
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <svg width="70" height="70" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00078 2.66719V13.3328" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M2.66797 8H13.3336" stroke="#B0B0B0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            Custom
                                        </Button>
                                        {isBoxOpen && (
                                            <Box
                                                sx={{
                                                    marginTop: 2,
                                                    padding: 2,
                                                    border: "1px solid #D1D1D1",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#F9F9F9",
                                                    width: "300px",
                                                }}
                                            >
                                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                                    List of Items
                                                </Typography>
                                                <List>
                                                    {items.map((item, index) => (
                                                        <ListItem key={index}>{item}</ListItem>
                                                    ))}
                                                </List>
                                            </Box>
                                        )}
                                    </div>
                                </div>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Creativity Level
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            flexGrow: 0,
                                            fontSize: "16px",
                                            fontWeight: 500,
                                            color: "#9E9E9E",
                                            marginLeft: "26rem",
                                            marginTop: "-1.4rem",
                                        }}
                                    >
                                        {value}
                                    </Typography></FormLabel>

                                <Box
                                    sx={{
                                        width: 415,
                                        marginTop: "5px",
                                    }}
                                >

                                    <Slider
                                        value={value}
                                        onChange={handleChange}
                                        step={1}
                                        marks
                                        min={1}
                                        max={5}
                                        sx={{
                                            flexGrow: 2,
                                            color: "#000",
                                            "& .MuiSlider-thumb": {
                                                backgroundColor: "#000",
                                            },
                                            "& .MuiSlider-rail": {
                                                backgroundColor: "#E0E0E0",
                                            },
                                        }} />
                                </Box>
                            </FormControl>

                            <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', marginTop: '1px' }}>Post size (in characters)</FormLabel>
                                <TextField
                                    type="number"
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    placeholder="800"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '430px',
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                    }} />

                            </FormControl>

                            <Box
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: 'center', 
                                    marginLeft: '120px'
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 4,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z" fill="white" />
                                        <path d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z" fill="white" />
                                        <path d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z" fill="white" />
                                    </svg>
                                    Generate Blog
                                </Button>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'absolute',
                            top: '11.7rem',
                            left: '55.6rem',
                            height: '935px',
                            width: '551px',
                            // display: 'flex',
                            // flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            borderBottomRightRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}>

                            <Box sx={{ textAlign: 'center', marginTop: '420px' }}>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M52.1452 18.7123V42.8598C52.1452 44.0914 51.656 45.2727 50.7852 46.1435C49.9144 47.0143 48.733 47.5036 47.5015 47.5036M47.5015 47.5036C46.2699 47.5036 45.0886 47.0143 44.2178 46.1435C43.347 45.2727 42.8577 44.0914 42.8577 42.8598V10.3536C42.8577 9.86095 42.6619 9.38847 42.3138 9.04016C41.9654 8.6918 41.4928 8.49609 41.0002 8.49609H5.70772C5.21508 8.49609 4.74262 8.6918 4.39427 9.04016C4.04592 9.38847 3.85022 9.86095 3.85022 10.3536V43.7886C3.85022 44.7738 4.24162 45.7189 4.93832 46.4155C5.63502 47.112 6.57993 47.5036 7.56522 47.5036H47.5015Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M31.7148 17.7832H14.9973V27.0707H31.7148V17.7832Z" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.9973 38.2168H31.7148" stroke="#1E1E1E" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <Typography variant="subtitle2" color='#454545'>
                                    Filling the form and hit Generate.
                                </Typography>
                            </Box>
                        </Box>
                    </>
                )}
            </Box>

        </ThemeProvider>
    )
}

export default LinkdinPost