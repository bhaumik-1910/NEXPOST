// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, Box, Container } from '@mui/material';
// import { Link } from 'react-router-dom';

// const MyCard = () => {
//     return (
//         <Container sx={{ marginBottom: '90px' }}>
//             <Typography sx={{ marginBottom: '20px' }}>
//                 Our generator for the LinkedIn
//             </Typography>

//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderRadius: '16px' }} elevation={0}>

//                 <Link to="/LinkdinPost" style={{ textDecoration: 'none' }}>
//                     <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                         <CardContent>
//                             <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                                 <CardMedia
//                                     sx={{ height: 120, background: '#E7E7E7' }}
//                                     image="/static/images/cards/contemplative-reptile.jpg"
//                                     title="lizard-thumbnail"
//                                 />
//                             </Card>
//                             <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                                 LinkedIn Carousal Generator
//                             </Typography>
//                             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                 Create a fun carousel with some cool and unique content!
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Link>

//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             LinkedIn Carousal Generator
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Creare a fun carousel with some cool and unique content!
//                         </Typography>
//                     </CardContent>
//                 </Card>

//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             LinkedIn Bio Maker
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Revamp your Linkedln bio with some awesome content!
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Box>

//             <hr style={{ Color: '#E7E7E7' }} />

//             <Typography sx={{ marginBottom: '20px' }}>
//                 Our generator for other social media
//             </Typography>

//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderRadius: '16px' }}>
//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             Facebook Post Generator
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Post your insights on facebook with awesome content!
//                         </Typography>
//                     </CardContent>
//                 </Card>

//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             Instagram Post Generator
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Post your insights on instagram with awesome content!
//                         </Typography>
//                     </CardContent>
//                 </Card>

//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             Reddit Post Generator
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Post your insights on Reddit with awesome content!
//                         </Typography>
//                     </CardContent>
//                 </Card>

//                 <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
//                     <CardContent>
//                         <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
//                             <CardMedia
//                                 sx={{ height: 120, background: '#E7E7E7' }}
//                                 image="/static/images/cards/contemplative-reptile.jpg"
//                                 title="lizard-thumbnail"
//                             />
//                         </Card>
//                         <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
//                             Blog Generator
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                             Create an eye-catching and original blog that stands out.
//                         </Typography>
//                     </CardContent>
//                 </Card>
//             </Box>
//         </Container>
//     );
// };

// export default MyCard;


import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const MyCard = () => {
    return (
        <Container sx={{ marginBottom: '90px' }}>
            <Typography
                sx={{
                    marginBottom: '20px',
                    '@media (max-width: 468px)': {
                        margin: {
                            fontSize:'1.1rem',
                            position: 'relative',
                            bottom: 90,
                            right: 15,
                        },
                    },
                }}>
                Our generator for the LinkedIn
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    borderRadius: '16px',
                    '@media (max-width: 468px)': {
                        margin: {
                            position: 'relative',
                            bottom: 98,
                            right: 15,
                        },
                    },
                }} elevation={0}>

                <Link to="/LinkdinPost" style={{ textDecoration: 'none' }}>
                    <Card
                        sx={{
                            width: 270,
                            // minWidth: 250,
                            height: 250,
                            '@media (max-width: 468px)': {
                                width: 331,
                                height: 87,
                                borderRadius: 3,
                            },
                        }} elevation={0}>
                        <CardContent>
                            <Card
                                sx={{
                                    // maxWidth: 260,
                                    // maxHeight: 200,
                                    width: 235,
                                    height: 120,
                                    background: '#E7E7E7',
                                    '@media (max-width: 468px)': {
                                        width: 110,
                                        height: 70,
                                        borderRadius: 2,
                                        margin: {
                                            position: 'relative',
                                            bottom: 7,
                                            right: 8,
                                        },
                                    },
                                }} elevation={0}>
                                {/* <CardMedia
                                    sx={{
                                        height: 120,
                                        background: '#E7E7E7',
                                    }}
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="lizard-thumbnail"
                                /> */}
                            </Card>
                            <Typography gutterBottom component="div"
                                sx={{
                                    color: '#2E2E2E',
                                    marginTop: 2,
                                    '@media (max-width: 468px)': {
                                        fontSize: '0.9rem',
                                        margin: {
                                            position: 'relative',
                                            bottom: 88,
                                            left: 110,
                                        },
                                    },
                                }}>
                                LinkedIn Carousal Generator
                            </Typography>
                            <Typography variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    '@media (max-width: 468px)': {
                                        fontSize: '0.7rem',
                                        margin: {
                                            width: 200,
                                            position: 'relative',
                                            bottom: 88,
                                            left: 110,
                                        },
                                    },
                                }}>
                                Post your insights on LinkedIn with awesome content!
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>

                {/* <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            LinkedIn Carousal Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Creare a fun carousel with some cool and unique content!
                        </Typography>
                    </CardContent>
                </Card> */}

                {/* <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            LinkedIn Bio Maker
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Revamp your Linkedln bio with some awesome content!
                        </Typography>
                    </CardContent>
                </Card> */}
            </Box>

            {/* <hr style={{ Color: '#E7E7E7' }} /> */}

            {/* <Typography sx={{ marginBottom: '20px' }}>
                Our generator for other social media
            </Typography> */}

            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderRadius: '16px' }}>
                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Facebook Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on facebook with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Instagram Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on instagram with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Reddit Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on Reddit with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Blog Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Create an eye-catching and original blog that stands out.
                        </Typography>
                    </CardContent>
                </Card>
            </Box> */}
        </Container >
    );
};

export default MyCard;
