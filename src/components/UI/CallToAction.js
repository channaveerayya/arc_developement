import React from "react"
import { Link } from "react-router-dom"
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import ButtonArrow from "../UI/ButtonArrow"
import background from "../../assets/background.jpg"
import mobileBackground from "../../assets/mobileBackground.jpg"
const useStyles = makeStyles((theme) => ({
  learnBtn: {
    ...theme.typography.learnBtn,
    fontSize: "0.7rem",
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}))

const CallToAction = () => {
  const classes = useStyles(),
    theme = useTheme(),
    matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software,
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              take advantage of the 21st Century
            </Typography>
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnBtn}
              >
                <span style={{ marginRight: 5 }}>Learn More </span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimate}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  )
}

export default CallToAction
