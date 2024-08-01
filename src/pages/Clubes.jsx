import React,{ useState } from 'react'
import { Box, Button } from '@mui/material'
import {Switch, FormControlLabel } from '@mui/material'
import { GridView, FormatListBulleted  } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import Card from '../components/Card'
import { equipos } from '../data'
import ButtonCustom from '../components/ButtonCustom'
const Clubes = () => {
  const [ checked, setCheked ] = useState(true)
  const theme = useTheme()
  const handleChange = (e) => {
    setCheked(e.target.checked)
  }

  return (
  <Box
    sx = {{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "20px"
    }}
  >
    <h1> Lista de Equipos </h1>
    <Box
      sx = {{
        display:"flex",
        gap: "20px",
        justifyContent: "end"
      }}
    >
      <Box
        sx = {{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          fontWeight: "bold"
        }}
      >
        <FormControlLabel 
          control={<Switch 
                    icon= {<GridView 
                             className='SwitchIcon'/>} 
                    checkedIcon = { <FormatListBulleted 
                                      className='SwitchIcon'/>} 
                    checked = { checked } 
                    onChange={ handleChange } 
                    />}
          sx={ {
            "& .SwitchIcon": {
              backgroundColor: (!checked) ? theme.palette.primary.main: theme.palette.secondary.main,
              borderRadius: "5px"
            }
          } }

        />
      </Box>
      
      <input type='search' placeholder='buscar'/>
    </Box>
    <Box
      sx = {{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      { equipos.map((item) => <Card name= { item.name } image= { item.image } />) }
    </Box>
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "end"
      }}
    > 
      <ButtonCustom />
    </Box>
  </Box>
  )
}

export default Clubes