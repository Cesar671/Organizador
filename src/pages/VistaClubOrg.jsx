import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { equipos, jugadores } from '../data'
import { Box, useTheme } from '@mui/material'
import ButtonCustom from '../components/ButtonCustom'
import { Person, KeyboardDoubleArrowLeft, Edit } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import ModalLink from '../components/ModalLink'
import PerfilUsuarioOrg from '../components/PerfilUsuarioOrg'

const VistaClubOrg = () => {
    const { id } = useParams()
    const theme = useTheme()

    const [editMode, setEditMode] = useState(false)
    const [equipo, setEquipo] = useState(equipos.filter((data) => data.id == id)[0])
    const [players, setJugadores] = useState(jugadores.filter((data) => data.equipoId == id))
    
    const [nombre, setNombre] = useState(equipo.name)
    const [ descripcion, setDescripcion ] = useState(equipo.descripción)
    const [ imagen, setImagen ] = useState(equipo.image)
    const [newJugadores, setNewJugadores] = useState(players)
    
    const handleChange = () => setEditMode(!editMode)
    const handleNombre = (e) => setNombre(e.value)
    const handleDescripcion = (e) => setDescripcion(e.value)
    const handleImagen = (e) => {

    }

    const handleJugadores = (e) => {

    }


    const columns = [
        { field: 'id', headerName: '#', flex: 0.1, disableColumnMenu: true },
        { field: 'nombre', headerName: 'Nombre', flex: 0.3, disableColumnMenu: true ,
          renderCell: (params) => {
            const { id } = params.row
            return (
              <ModalLink nameButton={ params.value } Component={ PerfilUsuarioOrg } params = { params.row }/>
            )
          },},
        { field: 'carnetIdentidad', headerName: 'CI', flex: 0.1, disableColumnMenu: true },
        { field: 'fechaNacimiento', headerName: 'Fecha de Nacimiento', flex:0.2, disableColumnMenu: true },
        { field: 'image', headerName: 'Foto', flex:0.1, disableColumnMenu: true,
            renderCell: (params) => {
            return (
              <img
                src = { "../"+params.value }
                style={{
                    width: "24px",
                    height: "auto",
                    borderRadius: "20px",        
                }} 
              />
            )
          },}
      ];
  return (
    <Box
        sx = {{
            padding:"0 30px 30px 30px",
            display: "flex",
            flexDirection: "column",
            gap:"10px"
        }}
    >
        <Box
            sx={{
                display:"grid",
                gridTemplateColumns:"2fr 1fr",
                gap:"10px"
            }}
        >
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"5px",
                    
                }}
            >
                <h1>{(!editMode) ? (equipo) && <>{equipo.name}<Edit sx={{color:"blue"}} onClick= { handleChange } /></> : <input type='text' value={ nombre } onChange={handleNombre} /> }</h1>
                <label><strong>Fecha de Registro :</strong> {(equipo) && equipo.fechaRegistro }</label>
                <label><strong>Descripcion : </strong>{(!editMode) ? (equipo) && equipo.descripción: <textarea style={{ resize:"none", width:400, heigth: 100 }}>{ descripcion }</textarea> }</label>
                <label><strong>Campeonatos Ganados : </strong>0</label>
                <label><strong>Cantidad de jugadores : </strong>{ players.length }</label>
                <label><strong>Jugadores : </strong></label>
            </Box>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-around",
                    alignItems:"center",
                    padding:"10px",

                }}
            >
                <img 
                    src={(equipo) && "../"+equipo.image }
                    style={{
                        width:"200px",
                        height:"auto",
                    }}    
                />
                <ButtonCustom name="Director Tecnico" Icon={ Person } />
            </Box>
        </Box>
        
        <Box>
            <DataGrid
                disableColumnResize
                rows={ players }
                columns={ columns }
                pagination= {false}
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
            />
        </Box>
        <Box
            component={ Link }
            to="/equiposorg"
            sx={{
                
                display: "flex",
                alignItems: "center",
                fontSize:"30px",
                color:theme.palette.secondary.main,
                "&:hover":{
                    color:theme.palette.primary.main,
                    transition: "0.3s ease-in-out",
                }
            }}
        >
            <KeyboardDoubleArrowLeft sx = {{ fontSize:"70px" }}/>
            Atras
        </Box>
        
    </Box>
  )
}

export default VistaClubOrg