import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import styles from '../styles/DevUser.module.css'
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
const DevUser = () => {
    return (
        <div className={styles.cover}>
            <Container>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item xs={12} md={6} >
                        <div className={styles.Text}>
                            <Typography variant="h4" component="h2" >Developers</Typography><br />
                            <Typography variant="p" component="h3" >Free to Build. Freed from fixes.</Typography><br />
                            <Typography variant="p" component="h4" >Finally developers can build cool digital experiences faster with an agnostic framework that makes integrations across multiple channels a breeze.</Typography>
                            <br />
                            <Button variant="contained" color="secondary">
                                Developers
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={styles.TextSecond}>
                            <Typography variant="h4" component="h2" >Business Users</Typography> <br />
                            <Typography variant="p" component="h3" >Empowered to do more faster.</Typography> <br />
                            <Typography variant="p" component="h4" >Take control of content creation with an intuitive experience that lets you build more, publish faster, and get more results from your digital content strategy.</Typography><br />
                            <Button variant="contained" color="secondary">
                                Business
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default DevUser;