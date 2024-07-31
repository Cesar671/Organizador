import React from 'react'
import { Box } from '@mui/material'
import { AccountCircle } from "@mui/icons-material"

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
        <div>Navegador/Navegador/Navegador</div>
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