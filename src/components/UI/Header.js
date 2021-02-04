import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  Tab,
  Tabs,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/styles"
import logo from "../../assets/logo.svg"
import MenuIcon from "@material-ui/icons/Menu"

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  meuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    padding: "4px 0",
    "&:hover": {
      opacity: 0,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    width: "50px",
    height: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (e, value) => {
    setValue(value)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }
  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile Software Development", link: "/mobileapps" },
    { name: "Website Software Development", link: "/websites" },
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) setValue(0)
        break
      case "/services":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case "/customsoftware":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case "/mobileapps":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case "/websites":
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(3)
        }
        break
      case "/revolutions":
        if (value !== 2) setValue(2)
        break
      case "/aboutus":
        if (value !== 3) setValue(3)
        break
      case "/contact":
        if (value !== 4) setValue(4)
        break
      case "/estimate":
        if (value !== 5) setValue(5)
        break
      default:
        break
    }
  }, [value])

  const headerMenu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "The Revolution",
      to: "/revolutions",
    },
    {
      name: "About Us",
      to: "/aboutus",
    },
    {
      name: "Contact Us",
      to: "/contact",
    },
  ]
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        // indicatorColor="primary"
      >
        {headerMenu.map((menu, i) => {
          if (menu.to === "/services")
            return (
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                label="Services"
                component={Link}
                onMouseOver={(e) => handleClick(e)}
                to="/services"
                className={classes.tab}
                key={i}
              />
            )
          return (
            <Tab
              key={i}
              label={menu.name}
              component={Link}
              to={menu.to}
              className={classes.tab}
            />
          )
        })}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        classes={{ paper: classes.menu }}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((opt, i) => (
          <MenuItem
            key={i}
            onClick={(e) => {
              handleMenuItemClick(e, i)
              setValue(1)
              handleClose()
            }}
            component={Link}
            to={opt.link}
            classes={{ root: classes.menuItem }}
            selected={i === selectedIndex && value === 1}
          >
            {opt.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {headerMenu.map((menu, i) => (
            <ListItem
              key={i}
              component={Link}
              to={menu.to}
              divider
              button
              onClick={() => setOpenDrawer(false)}
              className={classes.drawerItem}
            >
              <ListItemText disableTypography>{menu.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            component={Link}
            to="/estimate"
            divider
            button
            onClick={() => setOpenDrawer(false)}
            className={classes.drawerItemEstimate}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header
