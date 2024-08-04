import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, useTheme } from '@mui/material'
import { Person, KeyboardDoubleArrowLeft, Edit, Save, Add, Clear } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import ModalLink from '../components/ModalLink'
import PerfilUsuarioOrg from '../components/PerfilUsuarioOrg'
import ModalCustom from '../components/Modal'
import DT from '../components/DT'
import ConfirmDialog from '../components/ConfirmDialog'
import ModalCustomIcon from '../components/ModalIcon'
import { FullDataCtxt } from '../global/contexts/equipContext'
import ButtonCustom from '../components/ButtonCustom'

const VistaClubOrg = () => {
    const { equiposN, jugadoresN, setEquipos, setJugadores } = useContext( FullDataCtxt )
    const { id } = useParams()
    const theme = useTheme()

    const [response, setResponse] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [equipo, setEquipo] = useState(equiposN.filter((data) => data.id == id)[0])
    const [players, setPlayers] = useState(jugadoresN.filter((data) => data.equipoId == id))
    const [listaABorrar, setListaABorrar] = useState([])
    
    const [nombre, setNombre] = useState(equipo.name)
    const [ descripcion, setDescripcion ] = useState(equipo.descripción)
    const [ imagen, setImagen ] = useState(equipo.image)
    const [newJugadores, setNewJugadores] = useState([])
    
    const handleChange = () => setEditMode(!editMode)
    const handleNombre = (e) => setNombre(e.target.value)
    const handleDescripcion = (e) => setDescripcion(e.target.value)
    const handleImagen = (e) => {

    }
    console.log(equipo.image.split("."))
    const [nombreJugador, setNombreJugador] = useState("")
    const [ci, setCi] = useState("")
    const [dateJugador, setDateJugador] = useState("")
    const [genero, setGenero] = useState("Masculino")
    const [posicion, setPosicion] = useState("Central")

    const handlePosicion = (e) => setPosicion(e.target.value) 
    const handleNombreJugador = (e) => setNombreJugador(e.target.value)
    const handleCi = (e) => setCi(e.target.value)
    const handleDateJugador = (e) => setDateJugador(e.target.value)
    const handleGenero = (e) => setGenero(e.target.value)
    useEffect(() => {
        setEquipo(equiposN.filter((data) => data.id == id)[0])
        setPlayers(jugadoresN.filter((data) => data.equipoId == id))
    },[equiposN, jugadoresN])
    const addHandlerJugadores = () => {
        setNewJugadores([...newJugadores,{
            id: jugadoresN.length+10,
            nombre:nombreJugador,
            fechaRegistro:"20/14/24",
            carnetIdentidad: ci,
            numeroCelular: "",
            genero: genero,
            fechaNacimiento: dateJugador,
            posicion: posicion,
            equipoId: id,
            image:""
        }])
    }

    useEffect(() => {
        if(response){
            
            //Modifica o actualiza
            const data = Object.values(equiposN)
            const newData = data.map( equipo => 
                                equipo.id == id ? { ...equipo, 
                                    name: nombre,
                                    descripcion: descripcion,
                                }:equipo)
            //elimina
            
            let jugadoresFiltered = jugadoresN
            let jugadoresNFiltered = newJugadores
            listaABorrar.map((id) => {
                jugadoresFiltered = jugadoresFiltered.filter((jugador) => jugador.id != id)
                jugadoresNFiltered = jugadoresNFiltered.filter((jugador) => jugador.id != id)
            })

            //guarda
            setEquipos( newData )
            setJugadores([...jugadoresFiltered, ...jugadoresNFiltered])

            //limpia
            setNewJugadores([])
            setEditMode(!editMode)
            setResponse(false)
        }
    },[response])
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
          },
        },
        (editMode) && ({ field: '', headerName:"Eliminar", disableColumnMenu:true,
            renderCell: (params) => {
                const { id } = params.row
                const deleteHandler = () => {
                    setListaABorrar([...listaABorrar, params.id])
                    const filteredJugadores = players.filter((player) => player.id != id)
                    const filteredNewEquip = newJugadores.filter((jugador) => jugador.id != id)
                    setPlayers(filteredJugadores)
                    setNewJugadores(filteredNewEquip)
                }
                return (
                  <Clear onClick={ deleteHandler } sx={{ 
                        backgroundColor:"rgba(255,0,0, 0.6)", 
                        color:"white", 
                        borderRadius:"25px" }}/>
                )
              }
        })
          
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
                    {(!editMode) ? (equipo) && <h1>{equipo.name}<Edit sx={{color:"#1E90FF"}} onClick= { handleChange } /></h1> : 
                                            <strong style={{marginTop:"50px", display:"flex", alignItems:"center"}}>
                                                Nombre:<input type='text' style={{height:"25px"}} value={ nombre } onChange={handleNombre} />
                                                <ModalCustomIcon Icon={ Save } setResponse={ setResponse }  Component={ ConfirmDialog } text="¿Seguro que quiere guardar los cambios?"/>
                                            </strong> }
                    <label><strong>Fecha de Registro :</strong> {(equipo) && equipo.fechaRegistro }</label>
                    <Box
                        sx={{
                            display:"flex",
                            flexDirection:"column",
                        }}
                    >
                        <strong>Descripcion : </strong>
                        {(!editMode) ? (equipo) && equipo.descripción: 
                        <textarea onChange={ handleDescripcion } value={descripcion} style={{ resize:"none", width:"450px", height: "130px" }}/>}
                    </Box> 
                    <label><strong>Campeonatos Ganados : </strong>0</label>
                    <label><strong>Cantidad de jugadores : </strong>{ players.length }</label>
                    <hr />
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
                        src={(equipo) && (equipo.image.split(".").length>1) ? ("../"+equipo.image) : equipo.image }
                        style={{
                            width:"200px",
                            height:"auto",
                        }}    
                    />
                    <ModalCustom  nameButton="Director Tecnico" Icon={ Person } Component={ DT }/>
                </Box>
            </Box>
            
            <Box
            >
                <DataGrid
                    disableColumnResize
                    rows={ players.concat(newJugadores) }
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
                    }, '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                    },
                    '& .MuiDataGrid-columnHeader': {
                        border: "2px solid #ccc",
                        backgroundColor: "rgba(255,255,255,0.3)"
                    },
                    '& .MuiDataGrid-iconSeparator': {
                        color: theme.palette.secondary.main, // Color de los íconos
                    },
                    }}
                />
            </Box>
            
            {(editMode) &&
            <><strong>Añadir Nuevo Jugador</strong>
            <Box
                sx= {{
                    display:"flex",
                    gap: "5px",
                    width:"100%",
                    justifyContent:"space-between",
                    "& input,select":{
                        height:"25px"
                    }
                }}
            >
                <label>
                Nombre del jugador
                    <input placeholder='Nombre' value={ nombreJugador } onChange={ handleNombreJugador }/>
                </label>
                <label>
                Carnet
                    <input placeholder='Ci' type='number' style={{width:"80px"}} value={ci} onChange={handleCi}/>
                </label>
                <label>
                Genero
                    <select id="options" name="options" value={ genero } onChange={ handleGenero }>
                        <option value="Masculino" selected>Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </label>
                <label>
                    Fecha de Nacimiento
                    <input placeholder='fecha de nacimiento' type='date' value={dateJugador} onChange={handleDateJugador}/>
                </label>
                <label>
                    Posicion
                    <select id="options" name="options" value={ posicion } onChange={ handlePosicion }>
                        <option value="Acomodador" selected>Acomodador</option>
                        <option value="Central">Central</option>
                        <option value="Receptor">Receptor</option>
                        <option value="Libero">Libero</option>
                    </select>
                </label>
                <ButtonCustom event={ addHandlerJugadores } name="" Icon={ Add }/>
            </Box></>}
            <Box
                component={ Link }
                to="/equiposorg"
                sx={{
                    
                    display: "flex",
                    alignItems: "center",
                    fontSize:"30px",
                    width:"100px",
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