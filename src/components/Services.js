import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ButtonArrow from './ui/ButtonArrow'
import mobileIcon from '../assets/mockupIcon.svg'
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg'
import websiteIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles((theme) => ({
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: '0.7rem',
    height: 35,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1rem',
  },
  icon: {
    // marginLeft: "10em",
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '8em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}))
const Services = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid container direction='column'>
      <Grid
        item
        align={matchesSM ? 'center' : undefined}
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
      >
        <Typography
          variant='h2'
          gutterBottom
          align={matchesSM ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              width: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              variant='outlined'
              className={classes.learnBtn}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>

              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : '5em',
            }}
          >
            <img
              className={classes.icon}
              src={mobileIcon}
              alt='mobileIcon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              width: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save money
            </Typography>
            <Typography variant='subtitle1'>
              Complete Digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              variant='outlined'
              className={classes.learnBtn}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>

              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={CustomSoftwareIcon}
              alt='CustomSoftwareIcon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              //   marginLeft: matchesSM ? 0 : "5em",
              width: matchesSM ? undefined : '35em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed{' '}
            </Typography>
            <Button
              component={Link}
              to='/websites'
              variant='outlined'
              className={classes.learnBtn}
            >
              <span style={{ marginRight: 10 }}>Learn More </span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : '5em',
            }}
          >
            <img
              className={classes.icon}
              src={websiteIcon}
              alt='websiteIcon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
