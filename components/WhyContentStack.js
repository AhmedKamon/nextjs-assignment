import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/WhyContentStack.module.css'
import Box from '@material-ui/core/Box';
import React from 'react';
import ReactPlayer from 'react-player'



const WhyContentStack = () => {
    return (
        <>
            <Container>
                <Typography variant="h2" component="h2" align='center' color='dark'> Why Choose Contentstack?</Typography>
                <Grid container direction="row" justify="space-between" alignItems="center" className={styles.videoNames} >
                    <Grid item xs={12} md={6}   >
                        <Grid className={styles.videoName} >
                            <Box my={5} p={1}>
                                <Typography variant="h4" component="h2" color='primary'>Creating Content Faster</Typography>
                                <Typography variant="p" component="h3" color='dark'>Intuitively designed so marketers can do more faster, flying solo - developers rejoice.</Typography>
                            </Box>
                        </Grid>
                        <Grid className={styles.videoName}>
                            <Typography variant="h4" component="h2" color='primary'>Managing Content Easier</Typography>
                            <Typography variant="p" component="h3" color='dark'>Get more content in more places with less hassle - on one platform.</Typography>
                        </Grid>
                        <Grid className={styles.videoName}>
                            <Typography variant="h4" component="h2" color='primary'>Made for the Enterprise</Typography>
                            <Typography variant="p" component="h3" color='dark'>Built in the cloud to scale with exceptional support to accelerate your digital strategy.</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </Grid>
                </Grid>

            </Container>

        </>
    );
}

export default WhyContentStack;