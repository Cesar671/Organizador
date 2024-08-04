import React, { useState } from 'react'
import { Modal } from '@mui/material';
import { Box, Button, useTheme } from '@mui/material'

const ModalCustom = ({ Component, nameButton, params }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme()
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (<>
        <Box
            variant="contained" 
            color="primary" 
            onClick={handleOpen} 
            sx={{
                alignContent: "center",
                textDecoration:"underline",
                color: "#0000FF",
                "&:hover":{
                    color: theme.palette.primary.main,
                }
            }}
        >
            { nameButton }
        </Box>
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
                    <Component params = { params } close = { handleClose } />
                </Box>
            </Modal>
  </>
    

  )
}

export default ModalCustom