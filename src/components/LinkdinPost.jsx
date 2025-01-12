import React, { useState } from 'react'
import Header from './Header'
import { Box, Typography, Divider, List, ListItem, Slider, ListItemIcon, ListItemText, IconButton, Drawer, } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, TextField, Avatar, FormControl, FormLabel, } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';

const theme = createTheme({
    palette: {
        background: {
            default: '#F6F6F6',
        },
    },
});

const data = [
    { date: 'Jan 28, 2025', status: 'Up coming', amount: '$ 2.99', statusColor: 'warning' },
    { date: 'Dec 28, 2024', status: 'Paid', amount: '$ 2.99', statusColor: 'success' },
    { date: 'Nov 22, 2024', status: 'Delay', amount: '$ 2.99', statusColor: 'error' },
    { date: 'Oct 28, 2024', status: 'Paid', amount: '$ 2.99', statusColor: 'success' },
];

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
                                <g clip-path="url(#clip0_193_3671)">
                                    <path d="M0.999802 4.61428C0.999802 2.01067 2.01045 1 4.61408 1H19.3856C21.9891 1 22.9998 2.01067 22.9998 4.61428V19.3857C22.9998 21.9893 21.9891 23 19.3856 23H4.61408C2.01045 23 0.999802 21.9893 0.999802 19.3857V4.61428Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.90861 5.75119C7.91182 6.16409 7.75246 6.56167 7.46494 6.85803C7.17743 7.15439 6.78486 7.32573 6.37206 7.33503C5.96011 7.31991 5.56972 7.14713 5.28155 6.85235C4.99339 6.55758 4.82947 6.16339 4.82368 5.75119C4.84159 5.34961 5.01153 4.96985 5.29906 4.68892C5.58657 4.40798 5.97017 4.24688 6.37206 4.23828C6.77279 4.24704 7.15502 4.40854 7.44063 4.68976C7.72623 4.97097 7.89365 5.35066 7.90861 5.75119ZM4.98916 10.1481C4.98916 9.238 5.56833 9.37983 6.37206 9.37983C7.1758 9.37983 7.74314 9.238 7.74314 10.1481V19.0128C7.74314 19.9348 7.16398 19.7457 6.37206 19.7457C5.58015 19.7457 4.98916 19.9348 4.98916 19.0128V10.1481Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.1307 10.148C10.1307 9.63974 10.3198 9.45063 10.6153 9.39154C10.9108 9.33243 11.9272 9.39154 12.2818 9.39154C12.6364 9.39154 12.7783 9.97069 12.7664 10.408C13.0698 10.0009 13.4725 9.67852 13.936 9.47157C14.3996 9.26462 14.9085 9.18008 15.414 9.22606C15.9105 9.1957 16.4078 9.27014 16.8737 9.44452C17.3394 9.6189 17.7634 9.88932 18.1178 10.2382C18.4723 10.5871 18.7494 11.0067 18.9311 11.4697C19.1128 11.9327 19.1951 12.4287 19.1727 12.9256V18.9773C19.1727 19.8992 18.6053 19.7101 17.8016 19.7101C16.9978 19.7101 16.4305 19.8992 16.4305 18.9773V14.2494C16.4513 14.0061 16.4195 13.7611 16.3373 13.5312C16.255 13.3013 16.1241 13.0917 15.9537 12.9168C15.7833 12.7419 15.5772 12.6057 15.3495 12.5175C15.1218 12.4293 14.8777 12.3911 14.6339 12.4055C14.3913 12.3994 14.1501 12.4448 13.9263 12.5389C13.7026 12.6329 13.5013 12.7735 13.3359 12.9511C13.1706 13.1288 13.0448 13.3396 12.967 13.5695C12.8892 13.7994 12.8611 14.0433 12.8846 14.2849V19.0127C12.8846 19.9347 12.3055 19.7455 11.5017 19.7455C10.698 19.7455 10.1307 19.9347 10.1307 19.0127V10.148Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                <path d="M2 3H4C4.55228 3 5 3.44772 5 4V20C5 20.5523 4.55228 21 4 21H2" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 3H20C19.4477 3 19 3.44772 19 4V20C19 20.5523 19.4477 21 20 21H22" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 4C16 3.44772 15.5523 3 15 3H9C8.44772 3 8 3.44772 8 4V20C8 20.5523 8.44772 21 9 21H15C15.5523 21 16 20.5523 16 20V4Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            LinkedIn Carousal Generator
                        </MenuItem>

                        <MenuItem
                            onClick={() => handleMenuClick('billing')}
                            sx={{
                                backgroundColor: selectedMenu === 'billing' ? '#000' : 'transparent',
                                color: selectedMenu === 'billing' ? '#fff' : 'inherit',
                                borderRadius: 1,
                                gap: 1
                            }}
                        >
                            {/* <RocketOutlinedIcon sx={{ mr: 1 }} /> */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00002 21.8174C4.6026 22 5.41649 22 6.8 22H17.2C18.5835 22 19.3974 22 20 21.8174M4.00002 21.8174C3.87082 21.7783 3.75133 21.7308 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V6.8C2 5.11984 2 4.27976 2.32698 3.63803C2.6146 3.07354 3.07354 2.6146 3.63803 2.32698C4.27976 2 5.11984 2 6.8 2H17.2C18.8802 2 19.7202 2 20.362 2.32698C20.9265 2.6146 21.3854 3.07354 21.673 3.63803C22 4.27976 22 5.11984 22 6.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C20.2487 21.7308 20.1292 21.7783 20 21.8174M4.00002 21.8174C4.00035 21.0081 4.00521 20.5799 4.07686 20.2196C4.39249 18.6329 5.63288 17.3925 7.21964 17.0769C7.60603 17 8.07069 17 9 17H15C15.9293 17 16.394 17 16.7804 17.0769C18.3671 17.3925 19.6075 18.6329 19.9231 20.2196C19.9948 20.5799 19.9996 21.0081 20 21.8174M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                <path d="M1.65137 20.7571V3.24351C1.65137 2.82124 1.81911 2.41628 2.11769 2.11769C2.41628 1.81911 2.82124 1.65137 3.24351 1.65137H20.7571C21.1793 1.65137 21.5844 1.81911 21.8829 2.11769C22.1814 2.41628 22.3492 2.82124 22.3492 3.24351V20.7571C22.3492 21.1793 22.1814 21.5844 21.8829 21.8829C21.5844 22.1814 21.1793 22.3492 20.7571 22.3492H15.9807V14.8025H17.1111C17.3687 14.8025 17.6156 14.7001 17.7978 14.518C17.9799 14.3359 18.0823 14.0888 18.0823 13.8313V12.6053C18.0823 12.4778 18.0571 12.3515 18.0084 12.2336C17.9595 12.1158 17.888 12.0088 17.7978 11.9186C17.7077 11.8284 17.6005 11.7568 17.4827 11.708C17.3649 11.6592 17.2386 11.6341 17.1111 11.6341H16.0443V10.1375C16.0443 8.80009 16.6494 8.80009 17.2544 8.80009H18.0345C18.1627 8.80537 18.2904 8.78243 18.4087 8.73292C18.527 8.6834 18.633 8.60849 18.7191 8.5135C18.8116 8.42543 18.8849 8.31909 18.9342 8.20125C18.9836 8.0834 19.008 7.95662 19.0057 7.82888V6.6507C19.01 6.52105 18.9887 6.39183 18.9428 6.27044C18.8971 6.14904 18.828 6.03785 18.7392 5.94321C18.6505 5.84859 18.544 5.77236 18.4259 5.71891C18.3077 5.66546 18.18 5.63583 18.0504 5.63172H16.2195C15.6852 5.61163 15.153 5.70776 14.6595 5.91347C14.166 6.11916 13.7231 6.42953 13.3613 6.82312C12.9995 7.21673 12.7274 7.68417 12.5639 8.19318C12.4004 8.70219 12.3494 9.24062 12.4143 9.7713V11.6341H11.3953C11.2664 11.632 11.1384 11.6555 11.0187 11.7034C10.899 11.7513 10.7901 11.8225 10.6982 11.9129C10.6063 12.0033 10.5334 12.111 10.4836 12.2299C10.4338 12.3488 10.4081 12.4764 10.4082 12.6053V13.8313C10.4081 13.9601 10.4338 14.0878 10.4836 14.2066C10.5334 14.3255 10.6063 14.4333 10.6982 14.5237C10.7901 14.6141 10.899 14.6853 11.0187 14.7332C11.1384 14.781 11.2664 14.8046 11.3953 14.8025H12.4143V22.3492H3.24351C2.82124 22.3492 2.41628 22.1814 2.11769 21.8829C1.81911 21.5844 1.65137 21.1793 1.65137 20.7571Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                <path d="M17.3068 6.65642C17.0869 6.65642 16.9088 6.47821 16.9088 6.25839C16.9088 6.03856 17.0869 5.86035 17.3068 5.86035" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.3066 6.65642C17.5265 6.65642 17.7047 6.47821 17.7047 6.25839C17.7047 6.03856 17.5265 5.86035 17.3066 5.86035" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.22148 6.31828C2.22148 4.0558 4.05559 2.22168 6.31809 2.22168H17.2424C19.5049 2.22168 21.339 4.0558 21.339 6.31828V17.2426C21.339 19.505 19.5049 21.3392 17.2424 21.3392H6.31809C4.05559 21.3392 2.22148 19.505 2.22148 17.2426V6.31828Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.72031 11.7807C7.72031 12.8574 8.14805 13.8901 8.90944 14.6515C9.67083 15.4129 10.7035 15.8406 11.7803 15.8406C12.857 15.8406 13.8897 15.4129 14.6511 14.6515C15.4125 13.8901 15.8402 12.8574 15.8402 11.7807C15.8402 10.7039 15.4125 9.67123 14.6511 8.90984C13.8897 8.14845 12.857 7.7207 11.7803 7.7207C10.7035 7.7207 9.67083 8.14845 8.90944 8.90984C8.14805 9.67123 7.72031 10.7039 7.72031 11.7807Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                <g clip-path="url(#clip0_193_3705)">
                                    <path d="M12.4752 7.76172C14.9969 7.76172 17.2633 8.54831 18.8317 9.79962C19.3683 9.61154 19.9544 9.62169 20.4841 9.82824C21.0139 10.0348 21.4522 10.4241 21.7198 10.9257C21.9874 11.4274 22.0666 12.0082 21.9432 12.5632C21.8198 13.1182 21.5018 13.6107 21.0468 13.9516C21.0468 17.3703 17.209 20.1415 12.4761 20.1415C7.83373 20.1415 4.05314 17.4751 3.90553 14.1478L2.95324 13.9516C2.49823 13.6107 2.18024 13.1182 2.05679 12.5632C1.93335 12.0082 2.01261 11.4274 2.28022 10.9257C2.54784 10.4241 2.98615 10.0348 3.51586 9.82824C4.04558 9.62169 4.63172 9.61154 5.16827 9.79962C6.73574 8.54926 9.00219 7.76172 11.5239 7.76172H12.4752Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.4756 7.76145L13.4279 3L19.1416 3.95229" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.1885 3.95229C18.1885 4.20485 18.2888 4.44707 18.4674 4.62566C18.646 4.80425 18.8882 4.90458 19.1408 4.90458C19.3933 4.90458 19.6355 4.80425 19.8141 4.62566C19.9927 4.44707 20.0931 4.20485 20.0931 3.95229C20.0931 3.69973 19.9927 3.45751 19.8141 3.27892C19.6355 3.10033 19.3933 3 19.1408 3C18.8882 3 18.646 3.10033 18.4674 3.27892C18.2888 3.45751 18.1885 3.69973 18.1885 3.95229Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.61872 12.9992C9.88169 12.9992 10.0949 12.786 10.0949 12.523C10.0949 12.2601 9.88169 12.0469 9.61872 12.0469C9.35576 12.0469 9.14258 12.2601 9.14258 12.523C9.14258 12.786 9.35576 12.9992 9.61872 12.9992Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.3316 12.9992C15.5946 12.9992 15.8078 12.786 15.8078 12.523C15.8078 12.2601 15.5946 12.0469 15.3316 12.0469C15.0686 12.0469 14.8555 12.2601 14.8555 12.523C14.8555 12.786 15.0686 12.9992 15.3316 12.9992Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5703 16.332C11.2055 16.6491 11.8397 16.8082 12.4749 16.8082C13.1101 16.8082 13.7443 16.6491 14.3795 16.332" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                <path d="M22.3489 8.01999V18.3689C22.3489 18.8967 22.1392 19.403 21.7661 19.7762C21.3929 20.1494 20.8866 20.3591 20.3588 20.3591M20.3588 20.3591C19.831 20.3591 19.3247 20.1494 18.9515 19.7762C18.5783 19.403 18.3686 18.8967 18.3686 18.3689V4.43767C18.3686 4.22654 18.2847 4.02405 18.1355 3.87477C17.9861 3.72548 17.7836 3.6416 17.5725 3.6416H2.44715C2.23602 3.6416 2.03353 3.72548 1.88424 3.87477C1.73495 4.02405 1.65108 4.22654 1.65108 4.43767V18.767C1.65108 19.1892 1.81882 19.5942 2.1174 19.8928C2.41599 20.1913 2.82095 20.3591 3.24322 20.3591H20.3588Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5921 7.62207H6.42751V11.6024H13.5921V7.62207Z" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.42751 16.3789H13.5921" stroke="#1E1E1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
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
                                bottom: '74.2%',
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
                            top: '11.2rem',
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
                            top: '11.2rem',
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
                                bottom: '74.2%',
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
                                    <path d="M4 6H8C9.10457 6 10 6.89543 10 8V40C10 41.1046 9.10457 42 8 42H4" stroke="#1E1E1E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M44 6H40C38.8954 6 38 6.89543 38 8V40C38 41.1046 38.8954 42 40 42H44" stroke="#1E1E1E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M32 8C32 6.89543 31.1046 6 30 6H18C16.8954 6 16 6.89543 16 8V40C16 41.1046 16.8954 42 18 42H30C31.1046 42 32 41.1046 32 40V8Z" stroke="#1E1E1E" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
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
                            top: '11.2rem',
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

                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    mt: 2,
                                }}>

                                <Avatar
                                    alt="Profile Picture"
                                    src="/path/to/profile.jpg"
                                    sx={{
                                        ml: 4,
                                        width: 80,
                                        height: 80,
                                    }}
                                />

                                <Button
                                    variant="outlined"
                                    sx={{
                                        textTransform: 'none',
                                        borderColor: '#4F4F4F',
                                        color: '#4F4F4F',
                                        width: '100px',
                                        padding: '7px',
                                        borderRadius: '10px',
                                        marginTop: 0,
                                    }}
                                >
                                    Upload 
                                </Button>
                            </Box>

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
                            top: '11.2rem',
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
                                    <path d="M4.66663 7H9.33329C10.622 7 11.6666 8.04467 11.6666 9.33333V46.6667C11.6666 47.9553 10.622 49 9.33329 49H4.66663" stroke="#1E1E1E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M51.3334 7H46.6667C45.378 7 44.3334 8.04467 44.3334 9.33333V46.6667C44.3334 47.9553 45.378 49 46.6667 49H51.3334" stroke="#1E1E1E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M37.3333 9.33333C37.3333 8.04467 36.2886 7 35 7H21C19.7113 7 18.6666 8.04467 18.6666 9.33333V46.6667C18.6666 47.9553 19.7113 49 21 49H35C36.2886 49 37.3333 47.9553 37.3333 46.6667V9.33333Z" stroke="#1E1E1E" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" />
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