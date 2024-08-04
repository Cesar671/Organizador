import React, { useState } from 'react'
import { Modal } from '@mui/material';
import { Box, Button, useTheme } from '@mui/material'

const ModalCustom = ({ Component, nameButton, Icon, setResponse, text }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (<>
        <Button
            variant="contained" 
            color="primary" 
            onClick={handleOpen} 
            Icon={ Icon }
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
        >
            { nameButton }
        </Button>
        <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{ position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                }}        
                >
                    <Component close = { handleClose } text = { (text) && text } setResponse = { (setResponse) && setResponse }/>
                </Box>
            </Modal>
  </>
    

  )
}

export default ModalCustom