import styles from '../styles/Header.module.css'
import React from 'react';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h1>How Does Traditional <br /> CMS Manage to Manage So <br /> Badly?</h1>
                <h4>See how to empower teams, free developers, and get more done faster with headless, <br /> agile CMS.</h4>
                <Button variant="contained" color="secondary">
                    Demo video
                </Button>
            </div>
            <div className={styles.sideText}>
                <h2>Never Settle. Next Your CMS™</h2>
            </div>

        </div>
    );
}

export default Header;