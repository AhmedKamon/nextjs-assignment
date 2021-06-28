import { Container, Grid, Typography, Button } from "@material-ui/core";
import styles from '../styles/Recommended.module.css'
import MACH from '../public/MACH_Alliance_logo.svg'
import Image from "next/dist/client/image";
import CaseStudies from '../public/CaseStudies_thumb.jpg'
import Docs from '../public/Docs_thumb.jpg'
import Blog from '../public/Blog_tile.jpg'

const Recommended = () => {
    return (
        <>
            <Container>
                <div className={styles.upperSection}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Image src={MACH} height={300} width={300} alt="Picture of the author" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="p" component="h3" color='dark'>Contentstack is a founding member of the MACH Alliance, providing the industry leading best-of-breed CMS and Experience Management solutions via microservices, API-first, cloud-native SaaS, and headless technologies.</Typography>
                            <br />
                            <Button variant="contained" color="secondary">
                                see All Integrations
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <Typography variant="h2" component="h3" color='primary' align='center'>Recommended Resources.</Typography>
                <div>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={4} className={styles.lowerSection}>
                            <Image src={CaseStudies} height={200} width={350} alt="Picture of the author" />
                            <Typography variant="p" component="h3"  >Case studies that illustrate how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} className={styles.lowerSection}>
                            <Image src={Docs} height={200} width={350} alt="Picture of the author" />
                            <Typography variant="p" component="h3"  >Case studies that illustrate how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} className={styles.lowerSection}>
                            <Image src={Blog} height={200} width={350} alt="Picture of the author" />
                            <Typography variant="p" component="h3"  >Case studies that illustrate how Contentstack’s headless CMS helps global corporations create better digital experiences faster, and why your organization should never settle for inferior content experience platforms.</Typography>
                        </Grid>

                    </Grid>
                </div>

            </Container>
            <div className={styles.lowerPArt}>
                <Typography variant="h2" component="h2" align='center' >TRY IT TO BELIEVE IT</Typography>
                <Grid container direction="row" justify="center" alignItems="center" className={styles.typeLogo}>
                    <Grid item xs={12} md={6} align='end' className={styles.btn2} >
                        <Button variant="contained" color="secondary">
                            GET A DEMO
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} align="start"  >
                        <Button variant="contained" color="secondary">
                            FREE TRILE
                        </Button>
                    </Grid>

                </Grid>
            </div>
        </>
    );
}

export default Recommended;