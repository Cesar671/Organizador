import { Box, useTheme } from '@mui/material'
import React from 'react'

const ConfirmDialog = ({ text, setResponse, close }) => {
    const theme = useTheme()
    const handleCancel = () => {
        setResponse(false)
        close()
    }

    const handleConfirm = () => {
        setResponse(true)
        close()
    }
  return (
    <Box
        sx = {{
            width: 300,
            padding: "30px",
            backgroundColor: theme.palette.background.default,
            display:"flex",
            flexDirection:"column",
            gap:"10px",
            borderRadius:"10px"
        }}
    >
        <Box>
            <Box>
                {text}
            </Box>

        </Box>
        <Box
            sx = {{
                display: "flex",
                justifyContent: "center",
                gap:5
            }}
        >
            <Box
                onClick= {handleCancel}
                sx={{
                    backgroundColor:" rgba(255, 0,0,0.3)",
                    color:"white",
                    padding: "5px",
                    borderRadius:"5px",
                    "&:hover":{
                        backgroundColor: " rgba(255, 0,0,0.5)",
                        transition: "0.2s ease-in-out"
                    }
                }}
            >
                Cancelar
            </Box>
            <Box
                onClick={handleConfirm}
                sx={{
                    backgroundColor:" rgba(0, 0,255,0.4)",
                    color:"white",
                    padding: "5px",
                    borderRadius:"5px",
                    "&:hover":{
                        backgroundColor: " rgba(0, 0,255,0.6)",
                        transition: "0.2s ease-in-out"
                    }
                }}
            >
                Guardar
            </Box>
        </Box>
    </Box>
  )
}

export default ConfirmDialog