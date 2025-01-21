import React, { useState } from 'react'
import {
    Box,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    TextField,
    FormControl,
    FormLabel,
    IconButton,
    InputAdornment,
    Modal
} from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { theme } from '../theme';
import reddit from "../assets/reddit.svg";
import youtube from "../assets/youtube.svg";
import btnstar from "../assets/btnstar.svg";

const steps = ['Subreddit Scout', 'Create Post'];

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

const Audience = [
    "Audience",
    "Young Adults",
    "Professionals",
    "Seniors",
    "Students",
    "Homeowners",
    "Tech Enthusiasts",
    "Luxury Shoppers",
    "Environmentally Conscious Consumers",
]

const PostType = [
    "Link Post",
    "Text Ads",
]

const TargetSubreddit = [
    "r/subreddit 1",
    "r/subreddit 2",
    "r/subreddit 3",
    "r/subreddit 4",
    "r/subreddit 5",
    "r/subreddit 6",
    "r/subreddit 7",
]

const RedditPostGenerator = () => {

    //custom button
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [items, setItems] = useState([]);
    // const handleButtonClick = () => {
    //     setIsBoxOpen(true);
    //     setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
    // };

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


    //page next to reddit post generate categoty
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
                        src={reddit}
                        alt="Custom Icon"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />

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
                                                    {Audience.map((label, index) => (
                                                        <Button
                                                            key={index}
                                                            variant="outlined"
                                                            sx={{
                                                                fontSize: '14px',
                                                                textTransform: 'none',
                                                                borderRadius: '50px',
                                                                color: '#B0B0B0',
                                                                height: '35px',
                                                                width: 'auto',
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
                                                                width: 'auto',
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
                                            <FormControl fullWidth sx={{ marginBottom: 1, ml: '0.7rem', bottom: '18px', }}>
                                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Target Subreddit</FormLabel>
                                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                    {TargetSubreddit.map((label, index) => (
                                                        <Button
                                                            key={index}
                                                            variant="outlined"
                                                            sx={{
                                                                fontSize: '14px',
                                                                textTransform: 'none',
                                                                borderRadius: '50px',
                                                                color: '#B0B0B0',
                                                                height: '35px',
                                                                width: 'auto',
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
                                                    <Typography>Post Type</Typography>
                                                    {TargetSubreddit.map((label, index) => (
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
                                                            {PostType.map((name, index) => (
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

                                            <FormControl fullWidth sx={{ marginBottom: 1, ml: '0.7rem', bottom: '18px', }}>
                                                <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Post Type</FormLabel>
                                                <div style={{ display: 'flex', gap: '5px', width: '440px', flexWrap: 'wrap' }}>
                                                    {PostType.map((label, index) => (
                                                        <Button
                                                            key={index}
                                                            variant="outlined"
                                                            sx={{
                                                                fontSize: '14px',
                                                                textTransform: 'none',
                                                                borderRadius: '50px',
                                                                color: '#B0B0B0',
                                                                height: '35px',
                                                                width: 'auto',
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
                                                    <Typography>Post Type</Typography>
                                                    {PostType.map((label, index) => (
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
                                                            {PostType.map((name, index) => (
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

                                            <FormControl fullWidth sx={{ marginBottom: 1, ml: '0.7rem', bottom: '18px', }}>
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
                                                                width: 'auto',
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
                                                                width: 'auto',
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
                                                <img
                                                    src={btnstar}
                                                    alt="Custom Icon"
                                                    style={{
                                                        width: "15px",
                                                        height: "15px",
                                                    }}
                                                />
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
                    <img
                        src={reddit}
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

export default RedditPostGenerator
