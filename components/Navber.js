import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 5,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href='/'>ContentStack</Link>
          </Typography>
         <Button><Link href='/about' color="inherit">About</Link></Button>
         <Button><Link href='/about' color="inherit">Product</Link></Button>
         <Button><Link href='/about' color="inherit">More</Link></Button>
         <Button><Link href='/about' color="inherit">Contact</Link></Button>
         <Button><Link href='/about' color="inherit">Demo </Link></Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
