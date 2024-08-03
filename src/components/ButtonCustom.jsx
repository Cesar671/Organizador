import React from 'react'
import { Box, Button, useTheme } from '@mui/material'
import { Add } from '@mui/icons-material'
const ButtonCustom = ({ name, Icon, event }) => {
 const theme = useTheme()
  return (
    <Box
        component={ Button }
        sx={{
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            padding: "10px",
            "&:hover":{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.secondary.main
            }
        }}
        startIcon = { <Icon /> }
        onClick = { event }
    >
        { name }
    </Box>
  )
}

export default ButtonCustom