import React, { useState } from 'react'
import {
    Box,
    Typography,
    Slider,
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
import blog from "../assets/blog.svg";
import youtube from "../assets/youtube.svg";
import regenerated from "../assets/regenerated.svg";
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


const BlogGenerator = () => {

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

    //Slider 
    const [value, setValue] = useState(3);
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        src={blog}
                        alt="Custom Icon"
                        style={{
                            width: "50px",
                            height: "50px",
                        }}
                    />


                    <div>
                        <Typography variant="body1" sx={{ mb: 0, color: '#454545', fontWeight: 700, fontSize: '20px' }}>
                            Blog Generator
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

                <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                    <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Describe your profession</FormLabel>
                    <TextField
                        bgcolor='#D1D1D1'
                        size="small"
                        placeholder="Business Manager"
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
                            src={regenerated}
                            alt="Custom Icon"
                            style={{
                                width: "15px",
                                height: "15px",
                            }}
                        />
                        Regenerate
                    </Button>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                    <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F' }}>Enter your topic</FormLabel>
                    <TextField
                        bgcolor='#D1D1D1'
                        size="small"
                        placeholder="The Future of AI in Business"
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
                                    width: 48,
                                    height: 12,
                                    borderRadius: 20
                                },
                                "& .MuiSlider-track": {
                                    background: 'transparent',
                                    border: 'none'
                                },
                                "& .MuiSlider-mark": {
                                    display: 'none'
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
                        <img
                            src={btnstar}
                            alt="Custom Icon"
                            style={{
                                width: "15px",
                                height: "15px",
                            }}
                        />
                        Generate Blog
                    </Button>
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
                        src={blog}
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

export default BlogGenerator
