import React from 'react'
import { Box, useTheme } from '@mui/material'
import { Close } from '@mui/icons-material'

const DT = ({ close }) => {
    const theme = useTheme()
  return (
    <Box
        sx={{
            width: "700px",
            height: "280px",
            backgroundColor: theme.palette.background.default,
            padding: "30px",
            display: "flex",
            gap:"10px",
            justifyContent:"space-between"
        }}
    >
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1 style={{margin:0, padding:0}}> Abelardo Bustillos </h1>
            <label><strong>Fecha de Registro : </strong> 22/09/2019 </label>
            <label><strong>CI : </strong>9827345</label>
            <label><strong>Celular : </strong>+591 69283146</label>
            <label><strong>Descripcion : </strong> M </label>
            <label><strong>Facebook : </strong></label>
            <label><strong>Instagram : </strong></label>
            <label><strong>Twitter : </strong></label>
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end"
            }}
        >
            <Close onClick = { close } />
            <Box

                sx={{
                    width:"200px",
                    height:"200px",
                    borderRadius:"100px",
                    overflow:"hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                }}
                
            >
                <img style={{width:"100%", objectFit:"cover" }} src={'../foto perfiles/perfil 7.jpg'}/>
            </Box>
        </Box>
    </Box>
  )
}

export default DT