import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Tooltip, Button, Modal, Typography, Avatar, TextField, Stack } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ImageIcon from "@mui/icons-material/Image";
import PersonAdd from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DateRange from "@mui/icons-material/DateRange";
import ButtonGroup from "@mui/material/ButtonGroup";
const StyledModal = styled(Modal)({ display: "flex", alignItems: "center", justifyContent: "center" });
const UserBox = styled(Box)({ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" });

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", sm: "calc(30%)", md: 20 } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={400} bgcolor="white" padding={5} borderRadius={5}>
          <Typography varient="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Ankit Kaushik" />
            <Typography>Ankit Kaushik</Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            placeholder="What's On Your Mind"
            rows={2}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <VideoCameraBackIcon color="success" />
            <ImageIcon color="secondary" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
