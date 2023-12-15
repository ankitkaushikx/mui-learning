import React from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  img,
  ImageListItem,
  ImageList,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={700}>
          Online Friends
        </Typography>
        <AvatarGroup total={5}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={700}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: "90%", height: 200 }} cols={2} rowHeight="200">
          {[...Array(2).keys()].map((i) => (
            <ImageListItem key={i + 1}>
              <img src={`https://picsum.photos/id/${i + 1}/200`} alt={`image ${i + 1}`} />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={700}>
          Latest Conversations
        </Typography>
        {/* ----------------------------------------------------------LIST */}
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default Rightbar;
