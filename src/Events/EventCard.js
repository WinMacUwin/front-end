import Button from "@mui/material/Button";
import "./Events.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from "@mui/material/TextField";

const EventCard = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
    author: "",
    location: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  // useEffect(() => {
  //   axios.get("http://localhost:5000/winmac/eventList").then((response) => {
  //     setData(response.data);
  //     console.log(response.data);
  //   });
  // }, []);
  // function handleClick(event) {
  //   const url = "http://localhost:5000/winmac/eventBook/book";
  //   const data = { eventBooked: event, username: "chauha45" };

  //   axios
  //     .post(url, data)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("This is error: ", error);
  //     });
  // }

  return (

      <Card sx={{ maxWidth: 345 , mx: 'auto'}}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. fdjsfnksd dfjkshlas adkjkala djaksl das;a
            dasdjas dkasd sadj
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, marginLeft : 15 }}
          >
            Book
          </Button>{" "}
         
        </CardActions>
      </Card>

  );
};

export default EventCard;
