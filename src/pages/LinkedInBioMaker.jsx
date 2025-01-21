import React, { useState } from 'react'
import {
    Box,
    Typography,
    Button,
    TextField,
    FormControl,
    FormLabel,
    Switch,
    IconButton,
    InputAdornment,
    Modal
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { theme } from '../theme';
import bio from "../assets/bio.svg";
import youtube from "../assets/youtube.svg";
import btnstar from "../assets/btnstar.svg";

const buttonLabels = [
    "Professional",
    "Helpful",
    "Persuasive",
    "Friendly",
    "Humorous",
    "Inspiring",
    "Formal",
    "Academic"
];

const LinkedInBioMaker = () => {

    //custom button
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //button Click textfield shoe
    const [showTextField, setShowTextField] = useState(false);
    const [inputText, setInputText] = useState('');
    const [buttonNames, setButtonNames] = useState([]);

    const handleButtonClick = () => {
        setShowTextField(true);
    };

    const handleAddText = () => {
        if (inputText.trim()) {
            setButtonNames([...buttonNames, inputText]);
            setInputText('');
        }
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
                        src={bio}
                        alt="Custom Icon"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />

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
                        {buttonLabels.map((label, index) => (
                            <Button
                                key={index}
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
                            >
                                {label}
                            </Button>
                        ))}

                        <div>
                            <Button
                                variant="outlined"
                                onClick={handleOpen}
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
                        </div>
                    </div>
                </FormControl>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        borderRadius: 7,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography>Writing tone</Typography>
                        {buttonLabels.map((label, index) => (
                            <Button
                                key={index}
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
                            >
                                {label}
                            </Button>
                        ))}
                        <Button
                            onClick={handleButtonClick}
                            variant="outlined"
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
                        {showTextField && (
                            <Box sx={{ marginTop: 2 }}>
                                <TextField
                                    fullWidth
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    bgcolor='#D1D1D1'
                                    size="small"
                                    variant="outlined"
                                    height="80px"
                                    sx={{
                                        position: 'relative',
                                        borderRadius: '8px',
                                        padding: '4px 0px',
                                        width: '530px',
                                        '& .MuiInputBase-root': {
                                            height: '40px',
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D'
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: '8px 14px 9px',
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <>
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" onClick={handleAddText}>
                                                        <CheckCircleOutline sx={{ color: '#6D6D6D' }} />
                                                    </IconButton>
                                                </InputAdornment>
                                                <InputAdornment position="end">
                                                    <IconButton edge="end">
                                                        <HighlightOffRoundedIcon sx={{ color: '#6D6D6D' }} />
                                                    </IconButton>
                                                </InputAdornment>
                                            </>
                                        ),
                                    }}
                                />
                                {buttonNames.map((name, index) => (
                                    <Button
                                        key={index}
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
                                    >
                                        {name}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Modal>

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
                        <img
                            src={btnstar}
                            alt="Custom Icon"
                            style={{
                                width: "15px",
                                height: "15px",
                            }}
                        />
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
                    <img
                        src={bio}
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

export default LinkedInBioMaker
