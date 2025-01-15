import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Stack, Chip, Button, Modal, Divider } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    width: '100%',
    maxWidth: '400px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const Header = () => {
    const [activeTab, setActiveTab] = useState('monthly');
    const [openCard, setOpenCard] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    //Profile Menu Open
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    //Pro Chip Open
    const handleOpen = () => {
        setOpenCard(true);
    };
    const handleCloseCard = () => {
        setOpenCard(false);
    };

    //Tab in pro chip
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <AppBar position="static" sx={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderBottom: '1px solid #D1D1D1'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        sx={{
                            // display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Satoshi',
                            fontWeight: 500,
                            // letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            flexGrow: 1,
                        }}>
                        <Link to={'/'} style={{
                            textDecoration: 'none',
                            color: '#000',
                            fontSize: '28px',
                            fontWeight: 500,
                            '&:hover': {
                                color: '#007BFF',
                                textDecoration: 'underline',
                            },
                        }}>
                            NEXPOST
                        </Link>
                    </Typography>

                    <Box sx={{ justifyContent: 'flex-start' }}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label="Free"
                                variant="outlined"
                                sx={{
                                    padding: '4px 12px',
                                    fontSize: '0.9rem',
                                    borderColor: '#D1D1D1',
                                }}
                            />
                            <Chip
                                label="Pro"
                                variant="outlined"
                                sx={{
                                    bgcolor: '#FFEAD6',
                                    color: '#FF7C00',
                                    padding: '4px 12px',
                                    fontSize: '0.9rem',
                                }}
                                onClick={handleOpen} />
                        </Stack>
                    </Box> */}

                    <div className="container overflow-hidden">
                        <div className="row align-items-center">
                            <div className="col-lg-auto d-flex align-items-center gap-3 mb-lg-0">
                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        fontFamily: 'Satoshi',
                                        fontWeight: 500,
                                        color: 'black',
                                        textDecoration: 'none',
                                        fontSize: {
                                            xs: '20px',
                                            sm: '24px',
                                            md: '26px',
                                            lg: '28px',
                                        },
                                        // margin: {
                                        //     position: 'relative',
                                        //     right: 12,
                                        //     // xs: '-10px',
                                        // },
                                        '@media (max-width: 468px)': {
                                            margin: {
                                                position: 'relative',
                                                right: 12,
                                            },
                                        },
                                    }}
                                    className="text-black font-medium"
                                >
                                    <Link
                                        to={'/'}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#000',
                                            fontSize: 'inherit',
                                            fontWeight: 500,
                                            '&:hover': {
                                                color: '#007BFF',
                                                textDecoration: 'underline',
                                            },
                                        }}
                                        className="hover:text-blue-500 hover:underline"
                                    >
                                        NEXPOST
                                    </Link>
                                </Typography>

                                <Chip
                                    label="Free"
                                    variant="outlined"
                                    sx={{
                                        height: {
                                            xs: '20px',
                                            sm: '40px',
                                            md: '40px',
                                        },
                                        padding: {
                                            xs: '1px 2px',
                                            sm: '4px 10px',
                                            md: '4px 12px',
                                        },
                                        fontSize: {
                                            xs: '0.7rem',
                                            sm: '0.8rem',
                                            md: '0.9rem',
                                            lg: '1rem',
                                        },
                                        borderColor: '#D1D1D1',
                                        '@media (max-width: 468px)': {
                                            margin: {
                                                position: 'relative',
                                                right: 25,
                                            },
                                        },
                                    }}
                                    className="border-gray-300"
                                />

                                <Chip
                                    label="Pro"
                                    variant="outlined"
                                    sx={{
                                        bgcolor: '#FFEAD6',
                                        color: '#FF7C00',
                                        height: {
                                            xs: '20px',
                                            sm: '40px',
                                            md: '40px',
                                        },
                                        padding: {
                                            xs: '1px 2px',
                                            sm: '4px 10px',
                                            md: '4px 12px',
                                        },
                                        fontSize: {
                                            xs: '0.7rem',
                                            sm: '0.8rem',
                                            md: '0.9rem',
                                            lg: '1rem',
                                        },
                                        '@media (max-width: 468px)': {
                                            margin: {
                                                position: 'relative',
                                                right: 39,
                                            },
                                        },
                                    }}
                                    className="bg-orange-100 text-orange-600"
                                    onClick={handleOpen}
                                />
                            </div>
                        </div>
                    </div>

                    <Modal Modal
                        open={openCard}
                        onClose={handleCloseCard}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description">
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 480,
                                height: 575,
                                bgcolor: '#F6F6F6',
                                borderRadius: '12px',
                            }}>
                            <div className="card" style={{ backgroundColor: '#fff', width: '100%', position: 'relative' }}>
                                <div className="card-header" style={{ position: 'relative' }}>
                                    <h6>Update to Pro</h6>
                                    <IconButton
                                        onClick={handleCloseCard}
                                        sx={{
                                            position: 'absolute',
                                            right: 10,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <Box
                                sx={{
                                    margin: '13px 50px',
                                    backgroundColor: '#E7E7E7',
                                    borderRadius: '50px',
                                    width: '376px',
                                    height: '64px',
                                    marginBottom: '10px',
                                    padding: 1,
                                    border: '4px solid #fff',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // height: '64px'
                                }}>
                                <div className="custom-tab-container">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'monthly' ? 'active' : ''}`}
                                                style={{
                                                    // fontSize: '11px',
                                                    color: 'black',
                                                    backgroundColor: activeTab === 'monthly' ? '#fff' : ' #F1F1F1',
                                                    borderRadius: '432px',
                                                    padding: '7px 45px',
                                                    textAlign: 'center',
                                                }}
                                                // data-bs-toggle="tab"
                                                onClick={() => handleTabClick('monthly')}
                                                href="#"
                                                role="tab"
                                                aria-controls="home"
                                                aria-selected={activeTab === 'monthly'}>
                                                Monthly
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className={`nav-link ${activeTab === 'annually' ? 'active' : ''}`}
                                                style={{
                                                    // fontSize: '11px',
                                                    color: 'black',
                                                    backgroundColor: activeTab === 'annually' ? '#fff' : '#F1F1F1',
                                                    borderRadius: '432px',
                                                    padding: '6px 12px',
                                                    textAlign: 'center',
                                                }}
                                                onClick={() => handleTabClick('annually')}
                                                href="#"
                                                role="tab"
                                                aria-controls="profile"
                                                aria-selected={activeTab === 'annually'}>
                                                Annually
                                                <Chip
                                                    label="Save 20%"
                                                    variant="filled"
                                                    sx={{
                                                        borderRadius: '128px',
                                                        marginLeft: 1,
                                                        padding: '2px 8px',
                                                        height: 'auto',
                                                    }} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: '#fff',
                                    width: '432px',
                                    height: '358px',
                                    padding: '16px',
                                    margin: '23px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="card-header">
                                    <Chip
                                        label="Pro"
                                        variant="outlined"
                                        sx={{ padding: '10px', height: '12px', margin: '2px' }}
                                    />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <h4 style={{ marginRight: '8px', padding: '4px' }}>$2.99</h4>
                                        <span>/30 Days</span>
                                    </div>
                                    <span style={{ padding: '4px' }}>Over 100 post generations.</span>
                                    <hr />
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: '2px',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CloseIcon />
                                            <h6>Everything On Free Plan.</h6>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CloseIcon />
                                            <h6>Access to Beta tools</h6>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CloseIcon />
                                            <h6>Upcoming Networking Events</h6>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <CloseIcon />
                                            <h6>Email Support</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Button
                                            sx={{
                                                textTransform: 'none',
                                                fontSize: '15px',
                                                height: '45px',
                                                width: '100%',
                                                backgroundColor: '#1E1E1E',
                                                borderRadius: '30px',
                                            }}
                                            variant="contained"
                                        >
                                            Buy now for $2.99
                                        </Button>
                                    </div>
                                </div>
                            </Box>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>
                                <span>Limited time deal.</span>
                            </div>
                        </Box>
                    </Modal>

                    {/* <Search sx={{ borderRadius: '150px' }}>
                        <SearchIconWrapper>
                            <svg sx={{ color: 'gray' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.33694 17.2973C13.7335 17.2973 17.2976 13.7332 17.2976 9.33663C17.2976 4.94005 13.7335 1.37592 9.33694 1.37592C4.94035 1.37592 1.37622 4.94005 1.37622 9.33663C1.37622 13.7332 4.94035 17.2973 9.33694 17.2973Z" stroke="#5D5D5D" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.9631 14.9625L18.6251 18.6244" stroke="#5D5D5D" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Start tying to search.."
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: 'black' }}
                        />
                    </Search> */}

                    <Search
                        sx={{
                            borderRadius: '150px',
                            width: {
                                xs: '60px',
                                sm: '600px',
                                md: '600px',
                            },
                            height: {
                                xs: '40px',
                                sm: '40px',
                                md: '40px',
                            },
                            padding: {
                                xs: 0,
                                sm: '6px 12px',
                                md: '8px 16px',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            border: {
                                xs: 'none',
                                sm: '1px solid #D1D1D1',
                            },
                            backgroundColor: {
                                xs: 'transparent',
                                sm: '#F6F6F6',
                            },
                            boxShadow: {
                                xs: 'none',
                                sm: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                            },
                            '@media (max-width: 468px)': {
                                margin: {
                                    position: 'relative',
                                    left: 19,
                                },
                            },
                        }}
                    >
                        <SearchIconWrapper
                            sx={{
                                marginRight: {
                                    xs: 0,
                                    sm: '10px',
                                    md: '12px',
                                },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <svg
                                sx={{ color: 'gray' }}
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.33694 17.2973C13.7335 17.2973 17.2976 13.7332 17.2976 9.33663C17.2976 4.94005 13.7335 1.37592 9.33694 1.37592C4.94035 1.37592 1.37622 4.94005 1.37622 9.33663C1.37622 13.7332 4.94035 17.2973 9.33694 17.2973Z"
                                    stroke="#5D5D5D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.9631 14.9625L18.6251 18.6244"
                                    stroke="#5D5D5D"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </SearchIconWrapper>

                        <StyledInputBase
                            placeholder="Start typing to search..."
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{
                                fontSize: {
                                    xs: 0,
                                    sm: '14px',
                                    md: '16px',
                                },
                                color: 'black',
                                flexGrow: 1,
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        />
                    </Search>

                    {/* <IconButton size="large" sx={{ color: 'black', mr: 2 }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.408 29.9509H21.5922" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26.3686 18.0099C26.3686 16.3208 25.6977 14.7009 24.5033 13.5066C23.309 12.3123 21.6891 11.6413 20.0001 11.6413C18.311 11.6413 16.6912 12.3123 15.4968 13.5066C14.3025 14.7009 13.6315 16.3208 13.6315 18.0099V23.5824C13.6315 24.2158 13.3799 24.8233 12.932 25.2712C12.4841 25.719 11.8767 25.9706 11.2433 25.9706H28.7569C28.1235 25.9706 27.5159 25.719 27.0681 25.2712C26.6202 24.8233 26.3686 24.2158 26.3686 23.5824V18.0099Z" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.65112 17.8029C9.65198 16.2874 10.0134 14.7938 10.7055 13.4456C11.3976 12.0974 12.4005 10.9332 13.6315 10.0491" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30.349 17.8029C30.3482 16.2874 29.9868 14.7938 29.2947 13.4456C28.6026 12.0974 27.5995 10.9332 26.3687 10.0491" stroke="#1E1E1E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </IconButton> */}

                    <IconButton
                        size="medium"
                        sx={{
                            color: 'black',
                            mr: 1,
                            svg: {
                                width: '40px',
                                height: '40px',
                            },
                            '@media (max-width: 1024px)': {
                                svg: {
                                    width: '40px',
                                    height: '40px',
                                },
                            },
                            '@media (max-width: 768px)': {
                                svg: {
                                    width: '40px',
                                    height: '40px',
                                },
                            },
                            '@media (max-width: 468px)': {
                                margin: {
                                    position: 'relative',
                                    left: 10,
                                },
                            },
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.408 29.9509H21.5922"
                                stroke="#1E1E1E"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M26.3686 18.0099C26.3686 16.3208 25.6977 14.7009 24.5033 13.5066C23.309 12.3123 21.6891 11.6413 20.0001 11.6413C18.311 11.6413 16.6912 12.3123 15.4968 13.5066C14.3025 14.7009 13.6315 16.3208 13.6315 18.0099V23.5824C13.6315 24.2158 13.3799 24.8233 12.932 25.2712C12.4841 25.719 11.8767 25.9706 11.2433 25.9706H28.7569C28.1235 25.9706 27.5159 25.719 27.0681 25.2712C26.6202 24.8233 26.3686 24.2158 26.3686 23.5824V18.0099Z"
                                stroke="#1E1E1E"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.65112 17.8029C9.65198 16.2874 10.0134 14.7938 10.7055 13.4456C11.3976 12.0974 12.4005 10.9332 13.6315 10.0491"
                                stroke="#1E1E1E"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M30.349 17.8029C30.3482 16.2874 29.9868 14.7938 29.2947 13.4456C28.6026 12.0974 27.5995 10.9332 26.3687 10.0491"
                                stroke="#1E1E1E"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </IconButton>

                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <IconButton onClick={handleOpenMenu}
                            sx={{
                                p: 0
                            }}>
                            <Avatar alt="NEXPOST" src="/static/images/avatar/1.jpg" />
                        </IconButton>

                        <Menu
                            sx={{ mt: 1 }}
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                            PaperProps={{
                                elevation: 3,
                                sx: {
                                    width: 300,
                                    borderRadius: 3,
                                    padding: '15px',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Link to="/UserProfile" style={{ textDecoration: 'none', width: '100%', color: '#454545' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                        <Avatar alt="Jhon Snow" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56, mr: 2 }} />
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                Jhon Snow
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                                jhonsnow@email.com
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>

                            <Divider
                                sx={{
                                    borderColor: '#E7E7E7',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }}
                            />

                            <MenuItem onClick={handleCloseMenu}>
                                <AccountCircleOutlinedIcon height="24px" width="24px" sx={{ mr: 1 }} />
                                My Account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <ReceiptLongOutlinedIcon height="24px" width="24px" sx={{ mr: 1 }} />
                                Billing
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <RocketOutlinedIcon height="24px" width="24px" sx={{ mr: 1 }} />
                                Upgrade Plan
                            </MenuItem>

                            <Divider
                                sx={{
                                    borderColor: '#E7E7E7',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }}
                            />

                            <MenuItem onClick={handleCloseMenu}>
                                <HistoryOutlinedIcon height="24px" width="24px" sx={{ mr: 1 }} />
                                Change Log
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <InfoOutlinedIcon height="24px" width="24px" sx={{ mr: 1 }} />
                                About Us
                            </MenuItem>

                            <Divider
                                sx={{
                                    borderColor: '#E7E7E7',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                }}
                            />

                            <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
                                <LogoutOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                                Log Out
                            </MenuItem>
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

