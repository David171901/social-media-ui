import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Navbar from "../components/Navbar"
import { useState } from "react"

const Layout = () => {

    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
      palette: {
        mode: mode
      }
    })

  return (
    <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}></Sidebar>
            <Outlet />
            <Rightbar></Rightbar>
        </Stack>
        </Box>
    </ThemeProvider>
  )
}

export default Layout