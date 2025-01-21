import React, { useState } from 'react'
import {
    Box,
    Typography,
    Divider,
    Switch,
    Button,
    TextField,
    Avatar,
    FormControl,
    FormLabel
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { theme } from '../theme';
import carousal from "../assets/carousal.svg";
import youtube from "../assets/youtube.svg";
import btnstar from "../assets/btnstar.svg";

const LinkedInCarousalGenerator = () => {

    //first dropdown box
    const [isContentVisible, setIsContentVisible] = useState(false);
    const handleToggle = () => {
        setIsContentVisible((prev) => !prev);
    };

    //second dropdown box
    const [contentVisible, setContentVisible] = useState(false);
    const handleToggleContent = () => {
        setContentVisible((prev) => !prev);
    };

    //Switch
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const handleSwitchChange = (event) => {
        setIsSwitchOn(event.target.checked);
    };

    return (
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
                    <img
                        src={carousal}
                        alt="Custom Icon"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />

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
                        <img
                            src={youtube}
                            alt="Custom Icon"
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />

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
                            gap: 1
                        }}
                    >
                        <img
                            src={btnstar}
                            alt="Custom Icon"
                            style={{
                                width: "15px",
                                height: "15px",
                            }}
                        />
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
                    <img
                        src={carousal}
                        alt="Custom Icon"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />

                    <Typography variant="subtitle2" color='#454545'>
                        Filling the form and hit Generate.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default LinkedInCarousalGenerator
