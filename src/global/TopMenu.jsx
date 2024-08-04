import React from 'react'
import { Box } from '@mui/material'
import { AccountCircle } from "@mui/icons-material"
import MigaDePan from '../components/MigaDePan'


const TopMenu = () => {
  return (
    <Box
        sx = {{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
            alignItems: "center"
        }}
    >
        <MigaDePan />
        <Box
            sx = {{
                display: "flex",
                alignItems: "center",
                gap: "5px",

            }}
        >
            Don Vlady
            <AccountCircle 
                sx={{
                    fontSize: "50px"
                }}
            />
        </Box>
    </Box>
  )
}

export default TopMenu