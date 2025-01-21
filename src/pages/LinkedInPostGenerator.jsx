import React, { useState } from 'react'
import {
    Box,
    Modal,
    Typography,
    Slider,
    Button,
    TextField,
    FormControl,
    FormLabel,
    IconButton,
    InputAdornment,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CheckCircleOutline } from '@mui/icons-material';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import plus from "../assets/plus.svg";
import { theme } from '../theme';
import linkedin from "../assets/linkedin.svg";
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

const LinkedInPostGenerator = () => {

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
            {/* <Box
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
                    '@media (max-width: 468px)': {
                        width: 380,
                        height: 160,
                        position: 'relative',
                        left: '49%',
                        borderRadius: 0
                    },
                    '@media (min-width: 1024px)': {
                        width: 550,
                        height: 'auto',
                        position: 'relative',
                        left: '65%',
                        bottom: 520,
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                    },
                    '@media (min-width: 1280px)': {
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        padding: '12px 20px',
                        borderBottom: '2px solid #ddd',
                        bgcolor: '#FFFFFF',
                        position: 'absolute',
                        left: '60.3%',
                        transform: 'translateX(-50%)',
                        bottom: '72%',
                        width: '90%',
                        maxWidth: '1050px',
                        height: 'auto',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Box sx={{
                        '@media (max-width: 468px)': {
                            position: 'relative',
                            bottom: 30,
                        },
                        '@media (min-width: 1024px)': {
                            position: 'relative',
                            bottom: 20,
                        },
                        '@media (min-width: 1280px)': {
                            position: 'relative',
                            bottom: 11,
                        },
                    }}>
                        <img
                            src={linkedin}
                            alt="Custom Icon"
                            style={{
                                width: "50px",
                                height: "50px",
                            }}
                        />
                    </Box>

                    <div>
                        <Typography variant="body1"
                            sx={{
                                mb: 0,
                                color: '#454545',
                                fontWeight: 700,
                                fontSize: '20px',
                            }}>
                            LinkedIn Post Generator
                        </Typography>
                        <Typography
                            sx={{
                                width: '490px',
                                fontSize: '14px',
                                color: '#888888',
                                fontFamily: 'Satoshi Variable',
                                fontWeight: 500,
                                '@media (max-width: 468px)': {
                                    width: 315,
                                },
                                '@media (min-width: 1024px)': {
                                    width: 300,
                                },
                                '@media (min-width: 1280px)': {
                                    mb: 1,
                                    width: '450px',
                                },
                            }}>
                            Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                        </Typography>
                    </div>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            position: 'absolute',
                            right: '20px',
                            '@media (max-width: 468px)': {
                                marginRight: 25,
                                marginTop: 18,
                            },
                        }}
                    >
                        <Box sx={{
                            '@media (max-width: 468px)': {
                                width: "35px",
                                height: "35px",
                                marginBottom: 1
                            },
                        }}>
                            <img
                                src={youtube}
                                alt="Custom Icon"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                width: '100px',
                                fontSize: '15px',
                                color: '#2E2E2E',
                                borderBottom: '1px solid #2E2E2E',
                            }}
                        >
                            How it works?
                        </Typography>
                    </Box>
                </Box>
            </Box> */}

            <Box
                sx={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    padding: '12px 20px',
                    borderBottom: '2px solid #ddd',
                    bgcolor: '#FFFFFF',
                    width: 1050,
                    // maxWidth: '1050px',
                    height: 'auto',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    margin: '0 auto',
                    position: 'absolute',
                    top: '94px',
                    left: '60%',
                    transform: 'translateX(-50%)',
                    '@media (max-width: 1024px)': {
                        width: 580,
                        padding: '10px 15px',
                        top: '90px',
                        left: '66%',
                    },
                    '@media (max-width: 768px)': {
                        top: '50px',
                        padding: '8px 10px',
                        width: 375,
                        left: '50%',
                    },
                }}
            >
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={10}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <Box>
                                <img
                                    src={linkedin}
                                    alt="Custom Icon"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                    }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        mb: 0,
                                        color: '#454545',
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        '@media (max-width: 768px)': {
                                            fontSize: '18px',
                                        },
                                    }}
                                >
                                    LinkedIn Post Generator
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        color: '#888888',
                                        fontFamily: 'Satoshi Variable',
                                        fontWeight: 500,
                                        width: 450,
                                        // maxWidth: '100%',
                                        gap: 12,
                                        '@media (max-width: 1024px)': {
                                            width: 300,
                                        },
                                        '@media (max-width: 768px)': {
                                            fontSize: '12px',
                                            width: 300
                                        },
                                    }}
                                >
                                    Share your knowledge with our AI! It clears creative blocks and suggests topics that highlight your expertise.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="center"
                            gap={1}
                            sx={{
                                ml: { xs: '0px', sm: 'auto', md: '0px' },
                                // width: { xs: "40px", md: "50px" },           
                                // height: { xs: "40px", md: "50px" },          
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
                                sx={{
                                    fontSize: { xs: '13px', md: '15px' },
                                    color: '#2E2E2E',
                                    borderBottom: '1px solid #2E2E2E',
                                    cursor: 'pointer',
                                }}
                            >
                                How it works?
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* <Box sx={{
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
                '@media (max-width: 468px)': {
                    marginLeft: 0,
                    marginTop: '1.8rem',
                    width: 375,
                    overflow: "hidden"
                },
                '@media (min-width: 1024px)': {
                    width: 550,
                    marginTop: '1.6rem',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '10px',
                },
                '@media (min-width: 1280px)': {
                    top: '10.6rem',
                    width: '495px',
                    borderBottomLeftRadius: '10px',
                    borderBottomRightRadius: '0px',
                },
            }}>

                <FormControl fullWidth sx={{ marginBottom: 1, marginTop: 2, ml: 4, }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Describe your profession</FormLabel>
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
                                color: '#6D6D6D',
                            },
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                                width: 335,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                            '@media (min-width: 1280px)': {
                                width: '430px',
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
                            gap: 1,
                            '@media (max-width: 468px)': {
                                ml: '12.3rem',
                            },
                            '@media (min-width: 1024px)': {
                                ml: '22.2rem',
                            },
                            '@media (min-width: 1024px)': {
                                ml: '19.2rem',
                            },
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

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Enter your topic</FormLabel>
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
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                                width: 335,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                            '@media (min-width: 1280px)': {
                                width: '430px',
                            },
                        }} />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Your Writing Sample
                        <Typography
                            sx={{
                                position: 'relative',
                                left: '310px',
                                bottom: '23px',
                                width: '115px',
                                fontSize: '15px',
                                color: '#2E2E2E',
                                borderBottom: '1px solid #2E2E2E',
                                '@media (max-width: 468px)': {
                                    position: 'relative',
                                    left: 220
                                },
                                '@media (min-width: 1024px)': {
                                    position: 'relative',
                                    left: 360
                                },
                                '@media (min-width: 1280px)': {
                                    position: 'relative',
                                    left: 310
                                },
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
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                                width: 335,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                            '@media (min-width: 1280px)': {
                                width: '430px',
                            },
                        }} />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4 }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            bottom: '18px',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Your Thoughts</FormLabel>
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
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                                width: 335,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                            '@media (min-width: 1280px)': {
                                width: '430px',
                            },
                        }} />
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Writing tone</FormLabel>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '5px',
                            width: '440px',
                            flexWrap: 'wrap',
                            '@media (max-width: 468px)': {
                                width: 380,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                        }}>
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
                                    '@media (max-width: 468px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 30,
                                        width: 'auto',
                                        fontSize: 11,
                                    },
                                    '@media (min-width: 1024px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 40,
                                        width: 'auto',
                                        fontSize: 15,
                                    },
                                    '@media (min-width: 1280px)': {
                                        fontSize: 14,
                                        height: '35px',
                                        width: 'auto',
                                    },
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
                                    '@media (max-width: 468px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 30,
                                        width: 'auto',
                                        fontSize: 11,
                                    },
                                    '@media (min-width: 1024px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 40,
                                        width: 'auto',
                                        fontSize: 15,
                                    },
                                    '@media (min-width: 1280px)': {
                                        fontSize: 14,
                                        height: '35px',
                                        width: 'auto',
                                    },
                                }}
                            >
                                <img
                                    src={plus}
                                    alt="Custom Icon"
                                    style={{ width: "16px", height: "16px" }}
                                />
                                Custom
                            </Button>
                        </div>
                    </Box>
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
                        '@media (max-width: 468px)': {
                            width: 375,
                            borderRadius: 3
                        },
                        '@media (min-width: 1024px)': {
                            width: 'auto',
                            height: 'auto',
                            borderRadius: 3
                        },
                    }}>
                        <Typography sx={{
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Writing tone</Typography>
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
                                    '@media (max-width: 468px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 30,
                                        width: 'auto',
                                        fontSize: 11,
                                    },
                                    '@media (min-width: 1024px)': {
                                        position: 'relative',
                                        right: 13,
                                        height: 40,
                                        width: 'auto',
                                        fontSize: 15,
                                    },
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
                                '@media (max-width: 468px)': {
                                    position: 'relative',
                                    right: 5,
                                    height: 30,
                                    width: 'auto',
                                    fontSize: 11,
                                },
                                '@media (min-width: 1024px)': {
                                    position: 'relative',
                                    right: 13,
                                    height: 40,
                                    width: 'auto',
                                    fontSize: 15,
                                },
                            }}
                        >
                            <img
                                src={plus}
                                alt="Custom Icon"
                                style={{ width: "16px", height: "16px" }}
                            />
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
                                        '@media (max-width: 468px)': {
                                            position: 'relative',
                                            right: 13,
                                            height: 30,
                                            width: 'auto',
                                            fontSize: 11,
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
                                            '@media (max-width: 468px)': {
                                                position: 'relative',
                                                top: 10,
                                                right: 13,
                                                height: 30,
                                                width: 'auto',
                                                fontSize: 11,
                                            },
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
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Creativity Level
                        <Typography
                            sx={{
                                position: 'absolute',
                                flexGrow: 0,
                                fontSize: "16px",
                                fontWeight: 500,
                                color: "#9E9E9E",
                                marginLeft: "26rem",
                                marginTop: "-1.4rem",
                                '@media (max-width: 468px)': {
                                    position: 'relative',
                                    right: 100
                                },
                                '@media (min-width: 1024px)': {
                                    position: 'relative',
                                    left: 50
                                },
                                '@media (min-width: 1280px)': {
                                    position: 'relative',
                                    left: 10
                                },
                            }}
                        >
                            {value}
                        </Typography>
                    </FormLabel>

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
                                    width: 35,
                                    height: 10,
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
                                '@media (max-width: 468px)': {
                                    position: 'relative',
                                    right: 13,
                                    width: 335,
                                },
                                '@media (min-width: 1024px)': {
                                    width: 480,
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#000",
                                        width: 65,
                                        height: 15,
                                        borderRadius: 20
                                    },
                                },
                                '@media (min-width: 1280px)': {
                                    width: 430,
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#000",
                                        width: 45,
                                        height: 10,
                                        borderRadius: 20
                                    },
                                },
                            }} />
                    </Box>
                </FormControl>

                <FormControl fullWidth sx={{ marginBottom: 1, ml: 4, bottom: '18px', }}>
                    <FormLabel
                        sx={{
                            fontSize: '16px',
                            color: '#4F4F4F',
                            marginTop: '1px',
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                            },
                        }}>Post size (in characters)</FormLabel>
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
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 13,
                                width: 335,
                            },
                            '@media (min-width: 1024px)': {
                                width: 480,
                            },
                            '@media (min-width: 1280px)': {
                                width: 430,
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
                            gap: 1,
                            '@media (max-width: 468px)': {
                                position: 'relative',
                                right: 60
                            },
                            '@media (min-width: 1024px)': {
                                position: 'relative',
                                left: 40
                            },
                            '@media (min-width: 1280px)': {
                                position: 'relative',
                                left: 10
                            },
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
                        Generate Post
                    </Button>
                </Box>
            </Box> */}


            <Grid container sx={{ mt: { sm: 8, lg: 5 } }}>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    lg={4}
                    sx={{
                        backgroundColor: '#FFFFFF',
                        borderBottomLeftRadius: { xs: '10px', lg: '10px' },
                        borderBottomRightRadius: { xs: '10px', lg: '0px' },
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        p: 2,
                        position: 'absolute',
                        left: {
                            xs: 0,
                            sm: '388px',
                            lg: '386px',
                        },
                        top: {
                            xs: 140,
                            sm: 205,
                            lg: 192,
                        },
                        width: {
                            xs: '100%',
                            sm: '575px',
                            lg: '495px',
                        },
                        height: {
                            xs: '100%',
                            sm: 825,
                            lg: 930,
                        },
                    }}
                >
                    <Grid container sx={{ mt: { xs: 2, sm: 3, lg: 4 } }}>
                        <Grid item xs={12} sm={8} md={6} lg={4} sx={{ position: 'relative' }}>
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        bottom: 14,
                                    }}
                                >
                                    Describe your profession
                                </FormLabel>
                                <TextField
                                    size="small"
                                    placeholder="Data scientist - Cybersecurity"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        bottom: 12,
                                        width: {
                                            xs: '340px',
                                            sm: '540px',
                                            lg: '455px',
                                        },
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D',
                                            height: '100%',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            fontSize: {
                                                xs: '14px',
                                                sm: '15px',
                                                lg: '16px',
                                            },
                                        },
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        color: '#FFFFFF',
                                        width: {
                                            xs: '100px',
                                            sm: '115px',
                                            lg: '120px',
                                        },
                                        height: {
                                            xs: '29px',
                                            sm: '29px',
                                            lg: '30px',
                                        },
                                        padding: '4px',
                                        backgroundColor: '#000',
                                        borderRadius: '8px',
                                        position: 'absolute',
                                        top: {
                                            xs: '14px',
                                            sm: '15px',
                                            lg: '16px',
                                        },
                                        left: {
                                            xs: '285px',
                                            sm: '475px',
                                            lg: '390px',
                                        },
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            lg: '16px',
                                        },
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
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={8} md={6}>
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        bottom: 4,
                                    }}
                                >
                                    Enter your topic
                                </FormLabel>
                                <TextField
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    sx={{
                                        borderRadius: '8px',
                                        width: {
                                            xs: '340px',
                                            sm: '540px',
                                            lg: '455px',
                                        },
                                        height: {
                                            xs: '60px',
                                            sm: '80px',
                                            lg: '100px',
                                        },
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D',
                                            height: '100%',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: {
                                                xs: '8px 14px 40px',
                                                sm: '8px 14px 45px',
                                                lg: '8px 14px 65px',
                                            },
                                            fontSize: {
                                                xs: '14px',
                                                sm: '15px',
                                                lg: '16px',
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={8} md={6}>
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        top: 4,
                                    }}
                                >
                                    Your Writing Sample
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            borderBottom: '1px solid #2E2E2E',
                                            position: 'absolute',
                                            right: '0',
                                            top: '1px',
                                        }}
                                    >
                                        Select Post type
                                    </Typography>
                                </FormLabel>
                                <TextField
                                    size="small"
                                    placeholder="Ex. Future of AI"
                                    variant="outlined"
                                    sx={{
                                        top: 12,
                                        borderRadius: '8px',
                                        width: {
                                            xs: '340px',
                                            sm: '540px',
                                            lg: '455px',
                                        },
                                        height: {
                                            xs: '60px',
                                            sm: '80px',
                                            lg: '100px',
                                        },
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D',
                                            height: '100%',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: {
                                                xs: '8px 14px 40px',
                                                sm: '8px 14px 45px',
                                                lg: '8px 14px 65px',
                                            },
                                            fontSize: {
                                                xs: '14px',
                                                sm: '15px',
                                                lg: '16px',
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={8} md={6}>
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        top: 8,
                                    }}
                                >
                                    Your Thoughts
                                </FormLabel>
                                <TextField
                                    size="small"
                                    placeholder="Let us know what you want to focus on..."
                                    variant="outlined"
                                    sx={{
                                        top: 10,
                                        borderRadius: '8px',
                                        width: {
                                            xs: '340px',
                                            sm: '540px',
                                            lg: '455px',
                                        },
                                        height: {
                                            xs: '60px',
                                            sm: '80px',
                                            lg: '100px',
                                        },
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D',
                                            height: '100%',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            padding: {
                                                xs: '8px 14px 40px',
                                                sm: '8px 14px 45px',
                                                lg: '8px 14px 65px',
                                            },
                                            fontSize: {
                                                xs: '14px',
                                                sm: '15px',
                                                lg: '16px',
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <FormControl fullWidth sx={{ marginBottom: 1, bottom: '18px' }}>
                            <FormLabel sx={{ fontSize: '16px', color: '#4F4F4F', top: 30 }}>Writing tone</FormLabel>
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    display: 'flex',
                                    gap: '5px',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {buttonLabels.map((label, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                top: 30,
                                                fontSize: { xs: '11px', sm: '14px', lg: '15px' }, // Responsive font size
                                                textTransform: 'none',
                                                borderRadius: '50px',
                                                color: '#B0B0B0',
                                                height: { xs: '30px', sm: '35px', lg: '35px' },
                                                width: '100%',
                                                backgroundColor: '#FFFFFF',
                                                border: '1px solid #D1D1D1',
                                                marginTop: 1,
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    </Grid>
                                ))}

                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Button
                                        variant="outlined"
                                        onClick={handleOpen}
                                        sx={{
                                            top: 30,
                                            fontSize: { xs: '11px', sm: '14px', lg: '15px' }, // Responsive font size
                                            textTransform: 'none',
                                            borderRadius: '50px',
                                            color: '#B0B0B0',
                                            height: { xs: '30px', sm: '35px', lg: '35px' },
                                            width: '100%',
                                            backgroundColor: '#FFFFFF',
                                            border: '1px solid #D1D1D1',
                                            marginTop: 1,
                                            gap: 1,
                                        }}
                                    >
                                        <img
                                            src={plus}
                                            alt="Custom Icon"
                                            style={{ width: '16px', height: '16px' }}
                                        />
                                        Custom
                                    </Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: { xs: 375, sm: 600, lg: 'auto' },
                                borderRadius: 3,
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}>
                                <Typography sx={{ fontSize: '16px' }}>Writing tone</Typography>
                                <Grid container spacing={1}>
                                    {buttonLabels.map((label, index) => (
                                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    fontSize: { xs: '11px', sm: '14px', lg: '15px' },
                                                    textTransform: 'none',
                                                    borderRadius: '50px',
                                                    color: '#B0B0B0',
                                                    height: { xs: '30px', sm: '35px', lg: '35px' },
                                                    width: 'auto',
                                                    backgroundColor: '#FFFFFF',
                                                    border: '1px solid #D1D1D1',
                                                    marginTop: 1,
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Button
                                            onClick={handleButtonClick}
                                            variant="outlined"
                                            sx={{
                                                fontSize: { xs: '11px', sm: '14px', lg: '15px' },
                                                textTransform: 'none',
                                                borderRadius: '50px',
                                                color: '#B0B0B0',
                                                height: { xs: '30px', sm: '35px', lg: '40px' },
                                                width: '100%',
                                                backgroundColor: '#FFFFFF',
                                                border: '1px solid #D1D1D1',
                                                marginTop: 1,
                                                gap: 1,
                                            }}
                                        >
                                            <img
                                                src={plus}
                                                alt="Custom Icon"
                                                style={{ width: '16px', height: '16px' }}
                                            />
                                            Custom
                                        </Button>
                                    </Grid>
                                </Grid>

                                {showTextField && (
                                    <Box sx={{ marginTop: 2 }}>
                                        <TextField
                                            fullWidth
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            bgcolor='#D1D1D1'
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                position: 'relative',
                                                borderRadius: '8px',
                                                padding: '4px 0px',
                                                width: { xs: '100%', sm: '98%', lg: '690px' },
                                                '& .MuiInputBase-root': {
                                                    height: '40px',
                                                    backgroundColor: '#F6F6F6',
                                                    color: '#6D6D6D',
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
                                            <Grid container spacing={2} xs={12} sm={6} lg={3} key={index}>
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        fontSize: { xs: '11px', sm: '14px', lg: '15px' },
                                                        textTransform: 'none',
                                                        borderRadius: '50px',
                                                        color: '#B0B0B0',
                                                        height: { xs: '30px', sm: '35px', lg: '40px' },
                                                        width: 'auto',
                                                        backgroundColor: '#FFFFFF',
                                                        border: '1px solid #D1D1D1',
                                                        marginTop: 1,
                                                    }}
                                                >
                                                    {name}
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        </Modal>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={8} md={6}>
                            <FormControl fullWidth>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        top: 14,
                                    }}
                                >
                                    Creativity Level
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            color: '#2E2E2E',
                                            position: 'absolute',
                                            right: '0',
                                            top: '1px',
                                        }}
                                    >
                                        {value}
                                    </Typography>
                                </FormLabel>
                                <Box sx={{ width: { xs: 335, sm: 535, lg: 452 }, marginTop: 2 }}>
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
                                                width: { xs: 40, sm: 60, lg: 45 },
                                                height: { xs: 10, sm: 15, lg: 12 },
                                                borderRadius: 20,
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
                                        }}
                                    />
                                </Box>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FormControl fullWidth sx={{ marginBottom: 1, bottom: '18px' }}>
                                <FormLabel
                                    sx={{
                                        fontSize: '16px',
                                        color: '#4F4F4F',
                                        marginTop: '15px',
                                    }}
                                >
                                    Post size (in characters)
                                </FormLabel>
                                <TextField
                                    type="number"
                                    placeholder='800'
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        top: 7,
                                        borderRadius: '8px',
                                        width: {
                                            xs: '340px',
                                            sm: '540px',
                                            lg: '455px',
                                        },
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#F6F6F6',
                                            color: '#6D6D6D',
                                            height: '100%',
                                        },
                                        '& .MuiOutlinedInput-input': {
                                            fontSize: {
                                                xs: '14px',
                                                sm: '15px',
                                                lg: '16px',
                                            },
                                        },
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 1, lg: 1 } }}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box
                                sx={{
                                    marginLeft: { xs: '0', sm: '100px', lg: '70px' }
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: '50px',
                                        ml: 10,
                                        color: '#FFFFF',
                                        width: '180px',
                                        padding: '7px',
                                        backgroundColor: '#000',
                                        marginTop: 3,
                                        bottom: '25px',
                                        gap: 1,
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
                                    Generate Post
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            {/* <Box sx={{
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
                '@media (max-width: 468px)': {
                    display: 'none',
                },
                '@media (min-width: 1024px)': {
                    display: 'none',
                },
                '@media (min-width: 1280px)': {
                    display: 'block',
                    position: 'absolute',
                    top: '12.2rem',
                    left: '55.6rem',
                },
            }}>

                <Box sx={{ textAlign: 'center', marginTop: '420px' }}>
                    <img
                        src={linkedin}
                        alt="Custom Icon"
                        style={{ width: "50px", height: "50px" }}
                    />
                    <Typography variant="subtitle2" color='#454545'>
                        Filling the form and hit Generate.
                    </Typography>
                </Box>
            </Box> */}
            <Grid container sx={{ mt: { sm: 8, lg: 5 } }}>
                <Grid
                    item
                    xs={12}
                    sm={8}
                    lg={4}
                    sx={{
                        backgroundColor: '#FFFFFF',
                        borderBottomRightRadius: { xs: '0px', lg: '10px' },
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        p: 2,
                        position: 'absolute',
                        left: {
                            xs: 0,
                            sm: '388px',
                            lg: 885,
                        },
                        top: {
                            xs: 140,
                            sm: 205,
                            lg: 192,
                        },
                        width: {
                            xs: '100%',
                            sm: '575px',
                            lg: '550px',
                        },
                        height: {
                            xs: '100%',
                            sm: 825,
                            lg: 930,
                        },
                        display: {
                            xs: 'none',  
                            sm: 'none',  
                            lg: 'block', 
                        },
                    }}
                >
                    {/* Content here */}
                </Grid>
            </Grid>

        </>
    )
}

export default LinkedInPostGenerator
