import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import reactDom from "react-dom";
import axios from "axios";
import { serverApi } from "./config";

const ContactUs = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    date: "",
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let formData = values;
    axios.post(`${serverApi}/contact-us`, formData).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "-moz-initial",
            fontSize: "5vh",
            paddingTop: '5vh'
          }}
        >
          LET’S CONNECT
        </h1>
        {/* <div>
        <h4>{values.name}</h4>
        <h4>{values.email}</h4>
        <h4>{values.subject}</h4>
        <h4>{values.message}</h4>
        <h4>{values.date}</h4>
      </div> */}
        <br />
        <div>
          <Container >
            {/* <Box sx={{ backgroundColor: "azure" }}> */}
            <Grid container spacing={4} justifyContent="center" alignItems="center" display="flex">
              <Grid item sx={12} md={6}>
                <img
                  src="images/contactus.jpg"
                  alt=""
                  style={{ width: "18rem", height: "auto" }}
                />
              </Grid>
              <Grid item sx={12} md={6}>
                {/* <Box sx={{ backgroundColor: "white", height: "65vh" }}> */}
                <h2
                  style={{ fontFamily: "-moz-initial", textAlign: "center" }}
                >
                  SEND A MESSAGE
                </h2>
                <form >
                  <TextField
                    value={values.name}
                    onChange={changeHandler}
                    id="standard-basic"
                    fullWidth
                    label="Name"
                    variant="standard"
                    size="medium"
                    margin="dense"
                    name="name"
                  />{" "}
                  <br />
                  <TextField
                    value={values.mail}
                    onChange={changeHandler}
                    id="standard-basic"
                    fullWidth
                    label="Email"
                    variant="standard"
                    size="medium"
                    margin="dense"
                    name="email"
                  />{" "}
                  <br />
                  <TextField
                    value={values.subject}
                    onChange={changeHandler}
                    id="standard-basic"
                    fullWidth
                    label="subject"
                    variant="standard"
                    name="subject"
                    size="medium"
                    margin="dense"
                  />{" "}
                  <br />
                  <TextField
                    value={values.message}
                    onChange={changeHandler}
                    id="standard-multiline-flexible"
                    rows={4}
                    multiline
                    fullWidth
                    label="message"
                    name="message"
                    variant="standard"
                    size="medium"
                    margin="dense"
                  />{" "}
                  <br />
                  <TextField
                    id="datetime-local"
                    fullWidth
                    values={values.date}
                    onChange={changeHandler}
                    label="Event Date and Time"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    margin="dense"
                    name="date"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br />
                  <br />
                  <button
                    className="custom-btn btn-5"
                    onClick={submitHandler}
                    type="submit"
                  >
                    <span>Submit</span>
                  </button>
                </form>
                {/* </Box> */}
              </Grid>
            </Grid>
            {/* </Box> */}
          </Container>
        </div>
        <br /></Grid>
    </Grid>
  );
};

export default ContactUs;
