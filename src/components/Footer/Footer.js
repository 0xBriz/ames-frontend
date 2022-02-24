import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { ReactComponent as IconTwitter } from '../../assets/img/twitter.svg';
import { ReactComponent as IconGithub } from '../../assets/img/github.svg';
import { ReactComponent as IconDiscord } from '../../assets/img/discord.svg';
import { ReactComponent as IconAudit } from '../../assets/img/audited.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    color: 'white',
    backdropFilter: 'blur(16px)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    height: '1.3rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '30px',
    height: '30px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '24px',
    height: '24px',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" color="textPrimary" align="left">
              {'Copyright © '}
              <Link color="inherit" href="/">
                bsc-quartz-defi.app
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right', height: '50px' }}>
            <a
              href="https://twitter.com/quartz_defi"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <IconTwitter style={{ fill: 'black', height: '30px' }} />
            </a>
            <a
              href="https://github.com/quartz-defi/"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <IconGithub style={{ fill: 'black', height: '30px' }} />
            </a>

            <a href="https://discord.gg/8uRemBBdzS" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconDiscord style={{ fill: 'black', height: '27px' }} />
            </a>

            {/* <a className={classes.link} href="https://github.com/0xGuard-com/audit-reports/blob/master/quartz/Quartz_final-audit-report.pdf" rel="noopener noreferrer" target="_blank">
              <IconAudit style={{ height: '30px', width: 'auto' }} />
            </a> */}
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
