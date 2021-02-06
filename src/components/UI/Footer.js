import React from "react"
import { Link } from "react-router-dom"
import { Grid, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import FooterAdornment from "../../assets/Footer Adornment.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "<relative></relative>",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}))
const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item component={Link} to="/" className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/services"
                item
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                component={Link}
                to="/constomsoftware"
                item
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                component={Link}
                to="/mobileapps"
                item
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                component={Link}
                to="/websites"
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/revolutions"
                item
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid component={Link} to="/visson" item className={classes.link}>
                Vision
              </Grid>
              <Grid
                component={Link}
                to="/technology"
                item
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                component={Link}
                to="/process"
                item
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/aboutus"
                item
                className={classes.link}
              >
                About us
              </Grid>
              <Grid
                component={Link}
                to="/history"
                item
                className={classes.link}
              >
                History
              </Grid>
              <Grid component={Link} to="/team" item className={classes.link}>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                to="/contact"
                item
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={FooterAdornment} alt="Footer" className={classes.adornment} />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="http://wwww.facebook.com"
          rel="noopener noreferrer"
          target="_blanck"
        >
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://wwww.twitter.com"
          rel="noopener noreferrer"
          target="_blanck"
        >
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="http://wwww.instagram.com"
          rel="noopener noreferrer"
          target="_blanck"
        >
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
