import React,{ useState } from 'react'
import { Box, Button } from '@mui/material'
import {Switch, FormControlLabel } from '@mui/material'
import { GridView, FormatListBulleted  } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import Card from '../components/Card'
import FormRegistroEquipos from '../components/FormRegistroEquipos'
import ModalCustom from '../components/Modal'
import { Add } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { equipos , jugadores } from '../data'
import { Link } from 'react-router-dom'

const ClubesOrg = () => {
  const [ checked, setCheked ] = useState(false)
  const theme = useTheme()
  const columns = [
    { field: 'id', headerName: '#', flex: 0.1, disableColumnMenu: true },
    { field: 'name', headerName: 'Nombre', flex: 0.3, disableColumnMenu: true ,
      renderCell: (params) => {
        const { id } = params.row
        return (
          <Link
            to={`/equiposOrg/${id}`}
            style={{
              textDecoration: 'underline',
              color: 'blue',
              cursor: 'pointer',
            }}
          >
            {params.value}
          </Link>
        )
      },},
    { field: 'jugadores', headerName: 'Jugadores', flex: 0.1, disableColumnMenu: true },
    { field: 'fechaRegistro', headerName: 'Fecha de Registro', flex:0.2, disableColumnMenu: true }
  ];
  const handleChange = (e) => {
    setCheked(e.target.checked)
  }

  return (
  <Box
    sx = {{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "50px"
    }}
  >
    <h1> Lista de Equipos </h1>
    <Box
      sx = {{
        display:"flex",
        gap: "20px",
        justifyContent: "end",
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
        justifyContent: "left",
        alignItems: "initial",
      }}
    >
      {(!checked) ? equipos.map((item) => <Card id={ item.id } name= { item.name } image= { item.image } />):<DataGrid
                disableColumnResize
                rows={ equipos }
                columns={ columns }
                pagination= {false}
                componentsProps={{
                    pagination:{
                        sx: { display: "none" }
                    }
                }}
                sx={{
                    "& .MuiDataGrid-root" :{
                    backgroundColor: "#f5f5f5",
                    textAlign: "center",
                },
                "& .MuiDataGrid-cell": {

                    borderColor: "black",
                    border: "2px solid #ccc",
                    textAlign: "center"
                },
                }}
            /> }
    </Box>
    <Box
      sx={{
        display: "flex",
        marginTop: "20px",
        justifyContent: "end"
      }}
    > 
      <ModalCustom nameButton="Registrar Equipo" Icon={ Add } Component={ FormRegistroEquipos }/>
    </Box>
  </Box>
  )
}

export default ClubesOrg