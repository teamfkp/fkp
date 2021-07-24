import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "../images/blacklogo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Stack from "@material-ui/core/Stack";

function Footer() {
  return (
    <div className="Footer">
      <Container maxWidth="large">
        <Grid container={true} justify="center" alignItems="center">
          <Grid item xs={4}>
            <Divider />
            <List>
              <ListItemButton>
                <ListItemText primary="Home" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="About us" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Portfolio" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid
            item
            xs={4}
            container={true}
            justifyContent="center"
            alignItems="center"
          >
            <img src={logo} alt="" width="100%" />
            <Stack direction="row" spacing={8}>
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" sx={{ color: "blue" }} />
              <YouTubeIcon fontSize="large" sx={{ color: "red" }} />
            </Stack>
            <Divider />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "center" }}>
            <Divider />
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              spacing={2}
            >
              <List>
                <ListItemButton>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="About us" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemText primary="contact us" />
                </ListItemButton>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
