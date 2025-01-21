import React, { useState } from 'react'
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, IconButton, Drawer } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid2';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LinkedInPostGenerator from '../pages/LinkedInPostGenerator';
import LinkedInCarousalGenerator from '../pages/LinkedInCarousalGenerator';
import LinkedInBioMaker from '../pages/LinkedInBioMaker';
import FacebookPostGenerator from '../pages/FacebookPostGenerator';
import InstagramPostGenerator from '../pages/InstagramPostGenerator';
import RedditPostGenerator from '../pages/RedditPostGenerator';
import BlogGenerator from '../pages/BlogGenerator';
import Header from '../layout/Header';
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import reddit from "../assets/reddit.svg";
import carousal from "../assets/carousal.svg";
import blog from "../assets/blog.svg";
import bio from "../assets/bio.svg";

const LinkdinPost = () => {

    const [selectedMenu, setSelectedMenu] = useState('LinkedInPostGenerator');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        setIsDrawerOpen(false);
    };

    return (
        <>
            <Header />

            <>
                <IconButton
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <MenuIcon />
                </IconButton>

                <Grid
                    container
                    // justifyContent="center"
                    sx={{
                        mt: { md: 3, lg: 4 },
                        px: { md: 5, lg: 8 },
                        display: { xs: 'none', sm: 'flex' },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        lg={4}
                        xl={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: '#FFFFFF',
                            padding: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                    >

                        <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                            LinkedIn generators
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <MenuItem
                                onClick={() => handleMenuClick('LinkedInPostGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'LinkedInPostGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'LinkedInPostGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={linkedin}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                LinkedIn Post Generator
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleMenuClick('LinkedInCarousalGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'LinkedInCarousalGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'LinkedInCarousalGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={carousal}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                LinkedIn Carousal Generator
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleMenuClick('LinkedInBioMaker')}
                                sx={{
                                    backgroundColor: selectedMenu === 'LinkedInBioMaker' ? '#000' : 'transparent',
                                    color: selectedMenu === 'LinkedInBioMaker' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={bio}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                LinkedIn Bio Maker
                            </MenuItem>

                            <Divider sx={{ borderColor: '#E7E7E7', my: 2 }} />

                            <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                                Social media generators
                            </Typography>

                            <MenuItem
                                onClick={() => handleMenuClick('FacebookPostGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'FacebookPostGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'FacebookPostGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={facebook}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                Facebook Post Generator
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleMenuClick('InstagramPostGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'InstagramPostGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'InstagramPostGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={instagram}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                Instagram Post Generator
                            </MenuItem>

                            <MenuItem
                                onClick={() => handleMenuClick('RedditPostGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'RedditPostGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'RedditPostGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={reddit}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                Reddit Post Generator
                            </MenuItem>

                            <Divider sx={{ borderColor: '#E7E7E7', my: 2 }} />

                            <Typography variant="h6" sx={{ mb: 1, color: '#B0B0B0' }}>
                                Blog generators
                            </Typography>

                            <MenuItem
                                onClick={() => handleMenuClick('BlogGenerator')}
                                sx={{
                                    backgroundColor: selectedMenu === 'BlogGenerator' ? '#000' : 'transparent',
                                    color: selectedMenu === 'BlogGenerator' ? '#fff' : 'inherit',
                                    borderRadius: 1,
                                    gap: 1,
                                }}
                            >
                                <img
                                    src={blog}
                                    alt="Custom Icon"
                                    style={{ width: '25px', height: '25px' }}
                                />
                                Blog Generator
                            </MenuItem>
                        </Box>
                    </Grid>
                </Grid>

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
                {selectedMenu === 'LinkedInPostGenerator' &&
                    <LinkedInPostGenerator />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'LinkedInCarousalGenerator' &&
                    <LinkedInCarousalGenerator />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'LinkedInBioMaker' &&
                    <LinkedInBioMaker />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'FacebookPostGenerator' &&
                    <FacebookPostGenerator />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'InstagramPostGenerator' &&
                    <InstagramPostGenerator />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'RedditPostGenerator' &&
                    <RedditPostGenerator />
                }
            </Box>

            <Box sx={{ marginBottom: '550px' }}>
                {selectedMenu === 'BlogGenerator' &&
                    <BlogGenerator />
                }
            </Box>

        </>
    )
}

export default LinkdinPost