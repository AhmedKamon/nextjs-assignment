import styles from '../styles/care.module.css'
import { Container, Typography, Grid, Button } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player'

const Care = () => {

    return (

        <div className={styles.cover}>
            <Container >
                <br />
                <br />
                <Typography variant="h3" component="h4" className={styles.text}  >Integrations for Every Industry</Typography><br />
                <Grid container direction="row" justify="space-between" >
                    <Grid item xs={12} md={6}  >
                        <Typography variant="h3" component="h4" className={styles.textColor} >Were obsessed with <br /> our customers <br /> success</Typography><br />
                        <Typography variant="p" component="h2" className={styles.textColor} >Our Customer Care team provides exceptional whiteglove service with unprecedented response time to support customers goals.</Typography>
                        <br />
                        <Button variant="contained" color="secondary">
                            LEARN MORE ABOUT CUSTOMER
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <ReactPlayer url='https://www.youtube.com/watch?v=fxrkhf17fU0' />
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container direction="row" justify="space-between">
                    <Grid item xs={12} md={6}  >
                        <div className={styles.box}>
                            <div>
                                <Typography variant="h3" component="h4" className={styles.new}   >Ellie Mae</Typography>
                                <h2>Financial Service</h2>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a tempora laboriosam cum facere maiores sint quia, ducimus adipisci similique?</h4>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <div className={styles.box}>
                            <div>
                                <Typography variant="h3" component="h4" className={styles.new}   >Iceland Air</Typography>
                                <h2>Travel</h2>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit a tempora laboriosam cum facere maiores sint quia, ducimus adipisci similique?</h4>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <br /><br />
            </Container>
        </div>
    );
}

export default Care;