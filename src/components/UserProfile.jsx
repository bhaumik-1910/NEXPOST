import React, { useState } from 'react'
import Header from './Header'
import {
    Box, Typography, Chip, useTheme,
    useMediaQuery,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { Button, TextField, Avatar, FormControl, FormLabel, } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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

const UserProfile = () => {

    const [selectedMenu, setSelectedMenu] = useState('profile');

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
    };

    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'My Profile', icon: <AccountCircleOutlinedIcon />, key: 'profile' },
        { text: 'My Plan', icon: <ReceiptLongOutlinedIcon />, key: 'plan' },
        { text: 'Billing History', icon: <RocketOutlinedIcon />, key: 'billing' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            {/* <Box
                sx={{
                    display: 'flex',
                    mt: '25px',
                    ml: '320px',
                    flexDirection: 'column',
                    height: '200px',
                    width: '250px',
                    backgroundColor: '#FFFFFF',
                    padding: 2,
                    position: 'relative',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: 3,
                }}>

                <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                    Settings
                </Typography>

                <Box
                    sx={{
                        borderRadius: '10px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <MenuItem
                        onClick={() => handleMenuClick('profile')}
                        sx={{
                            backgroundColor: selectedMenu === 'profile' ? '#000' : 'transparent',
                            color: selectedMenu === 'profile' ? '#fff' : 'black',
                            borderRadius: 1,
                        }}
                    >
                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        My Profile
                    </MenuItem>

                    <MenuItem
                        onClick={() => handleMenuClick('plan')}
                        sx={{
                            backgroundColor: selectedMenu === 'plan' ? '#000' : 'transparent',
                            color: selectedMenu === 'plan' ? '#fff' : 'inherit',
                            borderRadius: 1,
                        }}
                    >
                        <ReceiptLongOutlinedIcon sx={{ mr: 1 }} />
                        My Plan
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
                        Billing History
                    </MenuItem>
                </Box>
            </Box> */}

            <>
                {isPhone ? (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 16px',
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <IconButton onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    width: 250,
                                    padding: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <Typography variant="h6" sx={{ color: '#B0B0B0' }}>
                                    Settings
                                </Typography>
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem
                                            button
                                            key={item.key}
                                            onClick={() => handleMenuClick(item.key)}
                                            sx={{
                                                backgroundColor: selectedMenu === item.key ? '#000' : 'transparent',
                                                color: selectedMenu === item.key ? '#fff' : 'black',
                                                borderRadius: 1,
                                                mb: 1,
                                            }}
                                        >
                                            <ListItemIcon sx={{ color: selectedMenu === item.key ? '#fff' : 'inherit' }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            mt: '25px',
                            ml: {
                                xs: '10px',
                                sm: '10px',
                                md: '320px',
                            },
                            flexDirection: 'column',
                            height: {
                                xs: 'auto',
                                sm: 'auto',
                                md: '200px',
                            },
                            width: {
                                xs: '250px',
                                sm: '250px',
                                md: '250px',
                            },
                            backgroundColor: '#FFFFFF',
                            padding: 2,
                            position: 'relative',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: 3,
                            '@media (max-width: 1124px)': {
                                right: '160px',
                                width: '250px',
                            },
                            '@media (max-width: 1024px)': {
                                right: '200px',
                                width: '250px',
                            },
                            // '@media (max-width: 768px)': {
                            //     right: '10px',
                            //     width: '100%',
                            //     height: 'auto',
                            // },
                            overflow: 'hidden',
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                            Settings
                        </Typography>

                        <Box
                            sx={{
                                borderRadius: '10px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                            }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem
                                    key={item.key}
                                    onClick={() => handleMenuClick(item.key)}
                                    sx={{
                                        backgroundColor: selectedMenu === item.key ? '#000' : 'transparent',
                                        color: selectedMenu === item.key ? '#fff' : 'black',
                                        borderRadius: 1,
                                    }}
                                >
                                    {item.icon}
                                    {item.text}
                                </MenuItem>
                            ))}
                        </Box>
                    </Box>
                )}
            </>

            <Box>
                {selectedMenu === 'profile' && (
                    <Box sx={{
                        position: 'absolute',
                        top: '89px',
                        left: '590px',
                        height: '490px',
                        width: '500px',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        '@media (max-width: 1124px)': {
                            left: '440px',
                            width: '500px',
                        },
                        '@media (max-width: 1024px)': {
                            left: '400px',
                            width: '470px',
                        },
                        // '@media (max-width: 768px)': {
                        //     right: '10px',
                        //     width: '100%',
                        //     height: 'auto',
                        // },
                    }}>
                        <Box
                            sx={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                position: 'relative',
                                padding: '10px',
                                borderBottom: '2px solid #ddd',
                                bgcolor: '#FFFFFF',
                            }}>

                            <Typography>
                                Profile Setting
                            </Typography>
                        </Box>

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
                                    width: '150px',
                                    padding: '7px',
                                    borderRadius: '10px',
                                    marginTop: 0,
                                }}
                            >
                                Change image
                            </Button>
                        </Box>

                        <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, }}>
                            <FormLabel sx={{ fontSize: '16px' }}>Name</FormLabel>
                            <TextField
                                bgcolor='#D1D1D1'
                                size="small"
                                placeholder="John Snow"
                                variant="outlined"
                                sx={{
                                    borderRadius: '8px',
                                    padding: '4px 0px',
                                    // backgroundColor: '#D1D1D1',     
                                    width: '430px',
                                    '@media (max-width: 1024px)': {
                                        width: '400px',
                                    },
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, }}>
                            <FormLabel sx={{ fontSize: '16px' }}>Email Address</FormLabel>
                            <TextField
                                bgcolor='#D1D1D1'
                                size="small"
                                placeholder="jhonsnow@email.com"
                                variant="outlined"
                                sx={{
                                    borderRadius: '8px',
                                    padding: '4px 0px',
                                    // backgroundColor: '#D1D1D1',     
                                    width: '430px',
                                    '@media (max-width: 1024px)': {
                                        width: '400px',
                                    },
                                }}
                            />
                        </FormControl>

                        <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, }}>
                            <FormLabel sx={{ fontSize: '16px' }}>Joining Date </FormLabel>
                            <TextField
                                bgcolor='#D1D1D1'
                                size="small"
                                placeholder="Dec 12, 2024"
                                variant="outlined"
                                sx={{
                                    borderRadius: '8px',
                                    padding: '4px 0px',
                                    // backgroundColor: '#D1D1D1',     
                                    width: '430px',
                                    '@media (max-width: 1024px)': {
                                        width: '400px',
                                    },
                                }}
                            />
                        </FormControl>

                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                ml: 4,
                                color: '#FFFFF',
                                width: '150px',
                                padding: '7px',
                                borderRadius: '8px',
                                backgroundColor: '#000',
                                marginTop: 1,
                            }}
                        >
                            Change image
                        </Button>
                    </Box>
                )}
            </Box>

            <Box>
                {selectedMenu === 'plan' && (
                    <Box sx={{
                        position: 'absolute',
                        top: '89px',
                        left: '590px',
                        height: '300px',
                        width: '450px',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        '@media (max-width: 1124px)': {
                            left: '440px',
                            width: '500px',
                        },
                        '@media (max-width: 1024px)': {
                            left: '400px',
                            width: '450px',
                        },
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
                                    textTransform: 'none',
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
                                    textTransform: 'none',
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
                )}
            </Box>

            <Box>
                {selectedMenu === 'billing' && (
                    <Box sx={{
                        position: 'absolute',
                        top: '89px',
                        left: '590px',
                        height: '300px',
                        width: '600px',
                        borderRadius: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        '@media (max-width: 1124px)': {
                            left: '440px',
                            width: '500px',
                        },
                        '@media (max-width: 1024px)': {
                            left: '400px',
                            width: '450px',
                        },
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
                            }}>
                            <Typography>
                                Billing History
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                paddingTop: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 2,
                                    borderRadius: 2,
                                    backgroundColor: '#FFFFFF',
                                }}>

                                <TableContainer
                                    sx={{
                                        padding: 1,
                                        marginTop: -2,
                                        marginBottom: 1,
                                    }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ padding: '16px' }}>Date</TableCell>
                                                <TableCell sx={{ padding: '16px' }}>Status</TableCell>
                                                <TableCell sx={{ padding: '16px' }} align="right">
                                                    Amount
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {data.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell sx={{ padding: '16px' }}>{row.date}</TableCell>
                                                    <TableCell sx={{ padding: '16px' }}>
                                                        <Chip
                                                            sx={{ backgroundColor: '#FFF7DC', border: 'none' }}
                                                            label={row.status}
                                                            color={row.statusColor}
                                                            variant="outlined"
                                                        />
                                                    </TableCell>
                                                    <TableCell sx={{ padding: '16px' }} align="right">
                                                        {row.amount}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}

export default UserProfile