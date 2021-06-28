import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import styles from '../styles/Integrations.module.css'
import { Button } from "@material-ui/core";
import Image from 'next/image'
import Cloud from '../public/cloudinary-icon-logo.png'
import elasticsearch from '../public/elasticsearch-thumb-logo.png'
import commercetools from '../public/commercetools-logo-thumb-icon.png'
import thumb from '../public/thumb-icon-ga.png'
import shopify from '../public/thumb-icon-shopify.png'
import bynder from '../public/bynder-icon-logo.png'
import { TypographyVariant } from "@material-ui/core";


const Integrations = () => {
    return (
        <Container>
            <div className={styles.boldText}>
                <Typography variant="h3" component="h4" color='primary' align='center'  >Integrations for Every Industry</Typography><br />
                <Typography variant="h6" component="p" color='dark' align='center'  >IOur API-first headless CMS makes it easy. Easily integrate your preferred business and marketing technologies to meet <br /> your needs.</Typography>
                <br />
                <Grid align='center'>
                    <Button variant="contained" color="secondary">
                        see All Integrations
                    </Button>
                </Grid>
                <br />
            </div>

            <Grid container direction="row" justify="center" alignItems="center" className={styles.logos}>
                <Grid item xs={6} md={2} align="center"  >
                    <Image src={Cloud} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={elasticsearch} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Elasticsearch</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={commercetools} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>commercetools</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={thumb} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Google Analytics</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={bynder} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Bynder</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={shopify} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Shopify</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={Cloud} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={elasticsearch} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={commercetools} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={thumb} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={bynder} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
                <Grid item xs={6} md={2} align="center">
                    <Image src={shopify} height={100} width={100} alt="Picture of the author"/>
                    <Typography variant="p" component="h3" align='center' color='dark'>Cloudinary</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Integrations;