import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { ListItemText } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import BookIcon from "@mui/icons-material/Book";
import Hidden from "@mui/material/Hidden";
import EventIcon from "@mui/icons-material/Event";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import uwinLogo from "./uwindsor_logo.png";
import ContactPageIcon from "@mui/icons-material/ContactPage";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const linkStyleHeaderNav = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "white",
  };

  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "black",
  };

  const img = {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  };
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "ButtonText" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div style={img}>
            <img
              src={uwinLogo}
              alt="Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
          </div>
          <Hidden smDown>
            <Link to="/DashBoard" style={linkStyleHeaderNav}>
              <Typography variant="h6">DashBoard</Typography>
            </Link>
            <Link to="/MyBooking" style={linkStyleHeaderNav}>
              <Typography variant="h6">My Booking</Typography>
            </Link>
            <Link to="/Events" style={linkStyleHeaderNav}>
              <Typography variant="h6">Event</Typography>
            </Link>
            <Link to="/Attendance" style={linkStyleHeaderNav}>
              <Typography variant="h6">Attendance</Typography>
            </Link>
            <Link to="/contact-us" style={linkStyleHeaderNav}>
              <Typography variant="h6">Contact-Us</Typography>
            </Link>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link to="/DashBoard" style={linkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="DashBoard" />
              </ListItem>
            </Link>
            <Link to="/mybooking" style={linkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="My Booking" />
              </ListItem>
            </Link>
            <Link to="/Events" style={linkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Event" />
              </ListItem>
            </Link>
            <Link to="/contact-us" style={linkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </Link>
            <Link to="/Attendance" style={linkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Attendance" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
