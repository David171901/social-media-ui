import Sidebar from "./components/Sidebar"
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed"
import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import Navbar from "./components/Navbar"

function App() {

  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  )
}

export default App
