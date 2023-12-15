import React, { useState } from "react";
import { AppBar, InputBase, Toolbar, Typography, Badge } from "@mui/material";
import styled from "@emotion/styled";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
const StyledToolbar = styled(Toolbar)({ display: "flex", justifyContent: "space-between" });

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Mui
        </Typography>
        <AccountBalanceIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>{" "}
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>{" "}
          <Badge badgeContent={4} color="error">
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Ramesh Sheokand"
              src="https://www.pexels.com/photo/man-standing-on-street-839011/"
              onClick={(e) => setOpen(true)}
            />
          </Badge>
        </Icons>
        <UserBox>
          {" "}
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Ramesh Sheokand"
            src="https://www.pexels.com/photo/man-standing-on-street-839011/"
            onClick={(e) => setOpen(true)}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
export default Navbar;
