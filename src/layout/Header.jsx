import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Chip, Button, Modal, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import notification from "../assets/notification.svg";
import search from "../assets/search.svg";
import account from "../assets/account.svg";
import bill from "../assets/bill.svg";
import rocket from "../assets/rocket.svg";
import changelog from "../assets/changelog.svg";
import about from "../assets/about.svg";
import logout from "../assets/logout.svg";


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
    padding: theme.spacing(0, 1),
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

    const [isSearchOpen, setIsSearchOpen] = useState(false);


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
                    <div className="container overflow-hidden">
                        <div className="row align-items-center">
                            <div className="col-lg-auto d-flex align-items-center gap-3 mb-lg-0">

                                <Typography
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        // fontFamily: 'Satoshi',
                                        // fontWeight: 500,
                                        // color: 'black',
                                        textDecoration: 'none',
                                        fontSize: {
                                            xs: '20px',
                                            sm: '24px',
                                            md: '26px',
                                            lg: '28px',
                                        },
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
                                            md: '30px',
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
                                            md: '30px',
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
                                '@media (max-width: 468px)': {
                                    marginTop: 6,
                                    width: 380
                                },
                                '@media (max-width: 1024px)': {
                                    // width: '480px',
                                    // height: 700
                                },
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
                                    '@media (max-width: 468px)': {
                                        margin: '15px 6px',
                                        width: '369px',
                                    },
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
                                                    borderRadius: 50,
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
                                                    borderRadius: 50,
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
                                    '@media (max-width: 468px)': {
                                        width: 335
                                    },
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
                            <img
                                src={search}
                                alt="Custom Icon"
                                style={{
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
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

                    <IconButton
                        size="medium"
                        sx={{
                            color: 'black',
                            mr: 1,
                            '@media (max-width: 468px)': {
                                margin: {
                                    position: 'relative',
                                    left: 4,
                                },
                            },
                        }}
                    >
                        <img
                            src={notification}
                            alt="Custom Icon"
                            style={{
                                width: "25px",
                                height: "25px",
                            }}
                        />
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
                                <img
                                    src={account}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
                                My Account
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <img
                                    src={bill}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
                                Billing
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <img
                                    src={rocket}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
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
                                <img
                                    src={changelog}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
                                Change Log
                            </MenuItem>
                            <MenuItem onClick={handleCloseMenu}>
                                <img
                                    src={about}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
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
                                <img
                                    src={logout}
                                    alt="Custom Icon"
                                    style={{
                                        width: "24px",
                                        height: "24px",
                                        marginRight: 10
                                    }}
                                />
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





// <AppBar position="static" color="default" elevation={1}>
//     <Toolbar>
//         <Grid container alignItems="center" justifyContent="space-between" wrap="nowrap" spacing={2}>
//             <Grid item container xs={4} sm={3} alignItems="center" spacing={1}>
//                 <Grid item>
//                     <Typography variant="h6" noWrap component="div">
//                         NEXPOST
//                     </Typography>
//                 </Grid>
//                 <Grid item>
//                     <Chip
//                         label="Free"
//                         variant="outlined"
//                         sx={{
//                             height: {
//                                 xs: '20px',
//                                 sm: '40px',
//                                 md: '30px',
//                             },
//                             padding: {
//                                 xs: '1px 2px',
//                                 sm: '4px 10px',
//                                 md: '4px 12px',
//                             },
//                             fontSize: {
//                                 xs: '0.7rem',
//                                 sm: '0.8rem',
//                                 md: '0.9rem',
//                                 lg: '1rem',
//                             },
//                             borderColor: '#D1D1D1',
//                         }}
//                         className="border-gray-300"
//                     />
//                 </Grid>
//                 <Grid item>
//                     <Chip
//                         label="Pro"
//                         variant="outlined"
//                         sx={{
//                             bgcolor: '#FFEAD6',
//                             color: '#FF7C00',
//                             height: {
//                                 xs: '20px',
//                                 sm: '40px',
//                                 md: '30px',
//                             },
//                             padding: {
//                                 xs: '1px 2px',
//                                 sm: '4px 10px',
//                                 md: '4px 12px',
//                             },
//                             fontSize: {
//                                 xs: '0.7rem',
//                                 sm: '0.8rem',
//                                 md: '0.9rem',
//                                 lg: '1rem',
//                             },
//                         }}
//                         className="bg-orange-100 text-orange-600"
//                         onClick={handleOpen}
//                     />
//                 </Grid>
//             </Grid>

//             <Grid item xs={12} sm={6} container justifyContent="flex-end" style={{ maxWidth: isSearchOpen ? '100%' : 'auto' }}>

//             </Grid>

//             <Grid item container xs={12} sm={3} alignItems="center" justifyContent="flex-end" spacing={1}>
//                 <Grid item>
//                     <IconButton>
//                         <Badge badgeContent={4} color="error">
//                             <NotificationsIcon />
//                         </Badge>
//                     </IconButton>
//                 </Grid>
//                 <Grid item>
//                     <IconButton>
//                         <Avatar alt="User" />
//                     </IconButton>
//                 </Grid>
//             </Grid>
//         </Grid>
//     </Toolbar>
// </AppBar>