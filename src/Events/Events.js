import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./Events.css";
import Records from "./records.json";
const Events = (props) => {
  const [flag, setFlag] = React.useState(true);
  const [buttonText, setButtonText] = React.useState("Book");

  const eventList = Records.map((a) => a)
  console.log(eventList);

  const handleClick = () => {
    setButtonText("Booked!");
    setFlag(!flag);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {Records.map((data) => {
          return (
            <>
              <div className="event">
                {data.title}
                {data.location}
              </div>
            </>
          );
        })}
        <Button
          onClick={handleClick}
          type="submit"
          variant="contained"
          color={flag ? "primary" : "secondary"}
          sx={{ mt: 3, mb: 2 }}
        >
          {buttonText}
        </Button>{" "}
      </Box>
    </>
  );
};

export default Events;
