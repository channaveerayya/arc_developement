import React from "react"
import { Link } from "react-router-dom"
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles"
import animationData from "../animations/landinganimation/data"
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import ButtonArrow from "../components/UI/ButtonArrow"
import CustomSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileIcon from "../assets/mobileIcon.svg"
import websiteIcon from "../assets/websiteIcon.svg"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground from "../assets/infoBackground.svg"
import CallToAction from "./UI/CallToAction"
const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "70em",
    minWidth: "45em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      minWidth: "21em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnBtnHero: {
    ...theme.typography.learnBtn,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1rem",
  },
  icon: {
    marginLeft: "10em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}))

const LandingPage = () => {
  const classes = useStyles(),
    theme = useTheme(),
    matchesSM = useMediaQuery(theme.breakpoints.down("sm")),
    matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimate}
                  variant="contained"
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnBtnHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} width="100%" height="100%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save money
            </Typography>
            <Typography variant="subtitle1">
              Complete Digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
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
              alt="CustomSoftwareIcon"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
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
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img className={classes.icon} src={mobileIcon} alt="mobileIcon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed{" "}
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
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
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img className={classes.icon} src={websiteIcon} alt="websiteIcon" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          style={{ height: "80em", marginTop: "10em" }}
          container
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item style={{ textAlign: "center" }}>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnBtnHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ height: "60em" }}
        >
          <Grid
            item
            container
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
            style={{
              position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/about"
                    variant="outlined"
                    className={classes.learnBtnHero}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Conatct Us
                </Typography>
                <Typography variant="subtitle2">Say Hello!</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    className={classes.learnBtnHero}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More </span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground}></div>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  )
}

export default LandingPage
