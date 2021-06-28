import styles from '../styles/LogoSlider.module.css'
import Image from 'next/image'
import webimg from '../public/WaveChart_Homepage.jpg'
import { Container, Grid } from '@material-ui/core'
import { Button } from '@material-ui/core'

const LogoSlider = () => {
    return (
        <div className={styles.main} >
            <Container className={styles.container}>
                <div className={styles.allText}>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center" >
                        <Grid item xs={12} md={6} >
                            <Image src={webimg} height={400} width={400} alt="Picture of the author" />
                        </Grid>
                        <Grid item xs={12} md={6} className={styles.more}>
                            <h1>Contentstack named a Strong Performer in the Forrester Wave for Agile CMS</h1>
                            <h4>Contentstack named a Strong Performer in the Forrester Wave™ : Agile Content Management Systems (CMSes), Q1 2021</h4>
                            <Button variant="contained" color="secondary">
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default LogoSlider;