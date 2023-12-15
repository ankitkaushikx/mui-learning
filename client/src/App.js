import React, { useState } from "react";
import Home from "./pages/Homepage";
import Sidebar from "./components/SideBar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Container, Box, Stack, createTheme } from "@mui/material";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    pallette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
export default App;
