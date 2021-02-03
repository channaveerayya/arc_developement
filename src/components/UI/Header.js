import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/styles"
import logo from "../../assets/logo.svg"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"
function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "20px",
    height: "45px",
  },
}))

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const handleChange = (e, value) => {
    setValue(value)
  }
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1)
    } else if (window.location.pathname === "/revolutions" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/aboutus" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4)
    }
  }, [value])
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              // indicatorColor="primary"
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                className={classes.tab}
              />
              <Tab
                label="Services"
                component={Link}
                to="/services"
                className={classes.tab}
              />
              <Tab
                label="The Revolution"
                component={Link}
                to="revolutions"
                className={classes.tab}
              />
              <Tab
                label="About Us"
                component={Link}
                to="aboutus"
                className={classes.tab}
              />
              <Tab
                label="Contact Us"
                component={Link}
                to="contact"
                className={classes.tab}
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
