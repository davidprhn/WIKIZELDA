import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

function Login() {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
       <Outlet />
    </Box>
  )
}

export default Login