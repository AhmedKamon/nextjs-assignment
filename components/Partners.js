import { Container, Typography, Grid, Button } from "@material-ui/core";
import Image from "next/dist/client/image";
import algolia from '../public/algolia.png'
import commercetools from '../public/commercetools.png'
import dynamic from '../public/dynamic-yield-logo.png'
import epam from '../public/epam-systems.png'
import styles from '../styles/Partners.module.css'
const Partners = () => {
    return (
        <Container>
            <div className={styles.type}>
                <Typography variant="h2" component="h3" align='center' color='primary'  >Our Partners are Catalysts for Success
                </Typography>
                <Typography variant="p" component="h2" align='center'  >Industry-leading Technologies and Service Providers
                </Typography>
            </div>

            <Grid container direction="row" justify="center" alignItems="center" className={styles.typeLogo}>
                <Grid item xs={6} md={3} align="center"  >
                    <Image src={algolia} height={100} width={200} alt="Picture of the author" />
                </Grid>
                <Grid item xs={6} md={3} align="center"  >
                    <Image src={commercetools} height={100} width={200} alt="Picture of the author" />
                </Grid>
                <Grid item xs={6} md={3} align="center"  >
                    <Image src={dynamic} height={100} width={200} alt="Picture of the author" />
                </Grid>
                <Grid item xs={6} md={3} align="center"  >
                    <Image src={epam} height={100} width={200} alt="Picture of the author" />
                </Grid>
            </Grid>
            <div className={styles.type}>
                <Typography variant="p" component="h2" align='center'  >Our Catalysts are partners with years of experience accelerating projects with some of the industrys best-of-breed technologies.</Typography>
            </div>
            <Grid container direction="row" justify="center" alignItems="center" className={styles.typeLogo}>
                <Grid item xs={12} md={6} align='end' className={styles.btn2} >
                    <Button variant="contained" color="secondary">
                        FIND A PARTNER
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} align="start"  >
                    <Button variant="contained" color="secondary">
                        PARTNER OVERVIEW
                    </Button>
                </Grid>

            </Grid>

        </Container>
    );
}

export default Partners;