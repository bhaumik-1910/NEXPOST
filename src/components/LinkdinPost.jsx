import React, { useState } from 'react'
import Header from './Header'
import { Box, Typography, Divider, List, ListItem } from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
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

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
    };

    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleButtonClick = () => {
        setIsBoxOpen(true);
        setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <Box
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

                    <Box>
                        {selectedMenu === 'LinkedInPostGenerator' && (
                            <Box sx={{
                                position: 'absolute',
                                top: '1px',
                                left: '320px',
                                height: '700px',
                                width: '500px',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}>
                                <Box
                                    sx={{
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                        position: 'relative',
                                        padding: '12px 20px 12px 20px',
                                        borderBottom: '2px solid #ddd',
                                        bgcolor: '#FFFFFF',
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
                                </Box>

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
                                        }}
                                    />
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
                                        }}
                                    />
                                </FormControl>

                                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                                    <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Your Thoughts</FormLabel>
                                    <TextField
                                        bgcolor='#D1D1D1'
                                        size="small"
                                        placeholder="Let us know what you want to focus on..."
                                        variant="outlined"
                                        height="80px"
                                        sx={{
                                            borderRadius: '8px',
                                            padding: '4px 0px',
                                            width: '430px',
                                            '& .MuiInputBase-root': {
                                                height: '60px',
                                                backgroundColor: '#F6F6F6',
                                                color: '#6D6D6D'
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                padding: '8px 14px 35px',
                                            },
                                        }}
                                    />
                                </FormControl>

                                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
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
                                                onClick={handleButtonClick}
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
                                        marginTop: 1,
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
                        )}

                        {/* {selectedMenu === 'LinkedInCarousalGenerator' && (
                            <Box sx={{
                                position: 'absolute',
                                top: '1px',
                                left: '265px',
                                height: '300px',
                                width: '450px',
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                backgroundColor: '#FFFFFF',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}>

                                <Box
                                    sx={{
                                        borderTopLeftRadius: '10px',
                                        borderTopRightRadius: '10px',
                                        position: 'relative',
                                        padding: '10px',
                                        borderBottom: '2px solid #ddd',
                                        bgcolor: '#FFFFFF',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography>
                                        My Plan
                                    </Typography>

                                    <Chip
                                        label="Pro"
                                        variant="outlined"
                                        sx={{
                                            bgcolor: '#FFEAD6',
                                            color: '#FF7C00',
                                            padding: '4px 12px',
                                            fontSize: '0.9rem',
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 2,
                                        mt: 2,
                                        ml: 4
                                    }}>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <h4 style={{ marginRight: '8px', padding: '4px' }}>$2.99</h4>
                                        <span>/30 Days</span>
                                    </div>
                                </Box>

                                <Typography variant='h4' sx={{ ml: 4 }}>Pro Plan</Typography>

                                <div style={{ display: 'flex', alignItems: 'center', ml: 4 }}>
                                    <Typography sx={{ ml: 4, color: '#888888', display: 'inline-block', marginRight: '8px' }}>
                                        Next billing is on
                                    </Typography>
                                    <span style={{ color: '#454545', fontWeight: '500' }}>
                                        Jan 28, 2025
                                    </span>

                                </div>


                                <Box sx={{ display: 'flex', gap: 2, ml: 4, mt: 2 }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            border: 'none',
                                            backgroundColor: '#E7E7E7',
                                            color: '#000',
                                            width: '146px',
                                            padding: '7px',
                                            borderRadius: '8px',
                                            marginTop: 0,
                                        }}
                                    >
                                        Change Plan
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            color: '#FFFFFF',
                                            width: '146px',
                                            padding: '7px',
                                            borderRadius: '8px',
                                            backgroundColor: '#000',
                                            marginTop: 0,
                                        }}
                                    >
                                        Change Plan
                                    </Button>
                                </Box>
                            </Box>
                        )} */}

                    </Box>

                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default LinkdinPost