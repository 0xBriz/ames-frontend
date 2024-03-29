import React, { useMemo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  Divider,
  InputLabel,
  Select,
  FormControl,
  MenuItem
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';
import useBombStats from '../../hooks/useBombStats';
import useBtcStats from '../../hooks/useBtcStats';
import useShareStats from '../../hooks/usebShareStats';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

import bombLogo from '../../assets/img/logo4.svg';
import { roundAndFormatNumber } from '../../0x';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    backgroundColor: 'transparent',
    backdropFilter: 'blur(16px)',
    padding: '10px',
    marginBottom: '32px',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: 'Be Vietnam Pro',
    fontSize: '0px',
    flexGrow: 1,
  },
  link: {
    fontSize: '16px',
    marginTop: '15px',
    color: 'black',
    margin: theme.spacing(10, 1, 1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const bombStats = useBombStats();
  const btcStats = useBtcStats();
  const shareStats = useShareStats();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const btcPriceInDollars = useMemo(() => (btcStats ? Number(btcStats).toFixed(2) : null), [btcStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const sharePriceInDollars = useMemo(
    () => (shareStats ? Number(shareStats.priceInDollars).toFixed(2) : null),
    [shareStats],
  );

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: '0' }} className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">Bomb Money</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img alt="bomb.money" src={bombLogo} height="80px" />
              </Link>
            </Typography>
            <Box style={{ paddingLeft: '15px', fontSize: '1rem', flexGrow: '1', marginTop: '12px' }}>
              <Link color="textPrimary" to="/farm" className={'navLink ' + classes.link}>
                Farm
              </Link>
              <Link color="textPrimary" to="/boardroom" className={'navLink ' + classes.link}>
                Boardroom
              </Link>
              <Link color="textPrimary" to="/nodes" className={'navLink ' + classes.link}>
                Quarry
              </Link>
              <Link color="textPrimary" to="/campaign" className={'navLink ' + classes.link}>
                Peg Campaign
              </Link>
              
              <a
                color="textPrimary"
                href="https://quartz-tools-ui.vercel.app/vaults"
                target="_blank"
                rel="noopener noreferrer"
                className={'navLink ' + classes.link}
              >
                Autocompounder
              </a>
              {/* <Link color="textPrimary" to="/migrator" className={'navLink ' + classes.link}>
                Migrator
               </Link> */}
              
              <Link color="textPrimary" to="/polisher" className={'navLink ' + classes.link}>
                Polisher 
              </Link>
              <FormControl variant="filled" style={{marginLeft:'15px'}}>
              <InputLabel style={{color:'#000',height:'20px',margin:0, padding:0, transform:"translate(5px,2px)"}} id="demo-simple-select-autowidth-label1">More</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label1"
                disableUnderline={true}
                label="More"
                style={{background:'rgba(0,0,0,0)',height:'20px',width:'70px',margin:0, padding:0}}
              >
                <MenuItem><Link color="textPrimary" to="/bond" className={'navLink ' + classes.link}>Bond</Link></MenuItem>
                <MenuItem><Link color="textPrimary" to="/strategy" className={'navLink ' + classes.link}>Strategy</Link></MenuItem>
                <MenuItem><Link color="textPrimary" to="/addresses" className={'navLink ' + classes.link}>Addresses</Link></MenuItem>
                <MenuItem><a
                  color="textPrimary"
                  href="https://aalto-defi.notion.site/Ames-defi-Docs-7b7320e304c3475786487c60ca31d4d9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={'navLink ' + classes.link}
                >
                  Docs
                </a></MenuItem>
              </Select>
              </FormControl>
              {/* <Link color="textPrimary" to="/share-swap" className={'navLink ' + classes.link}>
                Get Aalto
              </Link> */}
              {/* <Link color="textPrimary" to="/compensation" className={'navLink ' + classes.link}>
                Compensation
              </Link> */}
            </Box>

            <Box
              style={{
                flexGrow: '0',
                paddingLeft: '15px',
                fontSize: '1rem',
                paddingRight: '15px',
                height: '30px',
                display: 'flex',
              }}
            >
              <div className="navTokenIcon quartz"></div>{' '}
              <div className="navTokenPrice">${roundAndFormatNumber(Number(bombPriceInDollars), 2)}</div>
              <div className="navTokenIcon qshare"></div>{' '}
              <div className="navTokenPrice">${roundAndFormatNumber(Number(sharePriceInDollars), 2)}</div>
              <div className="navTokenIcon UST"></div>{' '}
              <div className="navTokenPrice">${roundAndFormatNumber(Number(btcPriceInDollars), 2)}</div>
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <img
              alt="bomb.money"
              src={bombLogo}
              style={{ height: '40px', marginTop: '-10px', marginLeft: '10px', marginRight: '15px' }}
            />
            {/* <AccountButton text="Connect" /> */}
            <Drawer
              className={classes.drawer}
              onClose={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? (
                    <ChevronRightIcon htmlColor="white" />
                  ) : (
                    <ChevronLeftIcon htmlColor="white" />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  <AccountButton text="Connect" />
                </ListItem>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Farm" to="/farm" />
                <ListItemLink primary="Boardroom" to="/boardroom" />
                <ListItemLink primary="Quarry" to="/nodes" />
                {/* <ListItemLink primary="Get Aalto" to="/share-swap" /> */}
                {/* <ListItemLink primary="Compensation" to="/compensation" /> */}
                <ListItemLink primary=" Peg Campaign" to="/campaign" />
                <ListItemLink primary="Bond" to="/bond" />
                <ListItemLink primary="Strategy" to="/strategy" />
                <ListItemLink primary="Addresses" to="/addresses" />
                <ListItemLink primary="Polisher" to="/polisher" />
                <li>
                  <ListItem button>
                    <a
                      style={{ color: 'black', textDecoration: 'none' }}
                      href="https://aalto-defi.notion.site/Ames-defi-Docs-7b7320e304c3475786487c60ca31d4d9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Docs
                    </a>
                  </ListItem>
                </li>
                <li>
                  <ListItem button>
                    <a
                      style={{ color: 'black', textDecoration: 'none' }}
                      href="https://quartz-tools-ui.vercel.app/vaults"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vaults
                    </a>
                  </ListItem>
                </li>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
