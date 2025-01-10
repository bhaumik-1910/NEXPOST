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

const settings = ['Profile', 'Account', 'Logout'];

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

    //Profile Menu Open
    const [anchorEl, setAnchorEl] = useState(null);
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
                    <Typography
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
                        NEXPOST
                    </Typography>

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
                                    height: '64px'
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
                                                {/* {activeTab === 'annually' && ( */}
                                                <Chip
                                                    label="Save 20%"
                                                    variant="filled"
                                                    sx={{
                                                        borderRadius: '128px',
                                                        marginLeft: 1,
                                                        padding: '2px 8px',
                                                        height: 'auto',
                                                    }} />
                                                {/* )} */}
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
                                        <div style={{ display: 'flex', alignItems: 'center' }}>{/* , fontFamily: 'Satoshi Variable' */}
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

                    <Search sx={{ borderRadius: '50px' }}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: 'gray' }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: 'black' }}
                        />
                    </Search>

                    <IconButton size="large" sx={{ color: 'black', mr: 2 }}>
                        <NotificationsIcon />
                    </IconButton>

                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', p: 1 }}>
                        <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
                            <Avatar alt="NEXPOST" src="/static/images/avatar/1.jpg" />
                        </IconButton>

                        <Menu
                            sx={{ mt: 2 }}
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
