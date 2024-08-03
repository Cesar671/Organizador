import { Box, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Edit, SaveAs  } from '@mui/icons-material'

const PerfilUsuarioOrg = ({params}) => {
    const theme = useTheme()
    const [editMode, setEditMode] = useState(false);
    const [nombre, setNombre] = useState(params.nombre)
    const [ci, setCi] = useState(params.carnetIdentidad)
    const [celular, setCelular] = useState(params.numeroCelular)
    const [genero, setGenero] = useState(params.genero)
    const [date, setDate] = useState(params.fechaNacimiento)
    const [posicion, setPosicion] = useState(params.posicion)

    const handleNombre = (e) => setNombre(e.value)
    const handleCi = (e) => setCi(e.value)
    const handleCelular = (e) => setCelular(e.value)
    const handleGenero = (e) => setGenero(e.value)
    const handleDate = (e) => setDate(e.value)
    const handlePosicion = (e) => setPosicion(e.value)

    const handleChangeMode = () =>{
        setEditMode(!editMode)
        console.log(editMode)
    }
  return (
    <Box
        sx={{
            width: "700px",
            height: "250px",
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
            <h1 style={{margin:0, padding:0}}> {(!editMode) ? params.nombre: <input type='text' value={ nombre } onChange={ handleNombre }/>} </h1>
            <label><strong>Fecha de Registro : </strong>{ params.fechaRegistro }</label>
            <label><strong>CI : </strong>{(!editMode) ? params.carnetIdentidad : <input type='number' value={ci} onChange={ handleCi }/>}</label>
            <label><strong>Celular : </strong>{ (!editMode) ?params.numeroCelular:<input type='tel' value={celular} onChange={ handleCelular}/>}</label>
            <label><strong>Genero : </strong>{(!editMode) ? params.genero : <select id="options" value = { genero } onChange={ handleGenero } name="options">
                <option value="Genero">Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>}</label>
            <label><strong>Fecha de Nacimiento : </strong>{(!editMode) ? params.fechaNacimiento :<input type='date' value={date} onChange={ handleDate }/>}</label>
            <label><strong>Posicion : </strong>{(!editMode) ? params.posicion :<select value = { posicion } onChange={ handlePosicion } id="options" name="options">
                <option value="Centro" selected>Centro</option>
                <option value="Receptor">Receptor</option>
                <option value="Liberti">Liberti</option>
            </select>}</label>
        </Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end"
            }}
        >
            <Box

                sx={{
                    width:"200px",
                    borderRadius:"100px",
                    overflow:"hidden",
                }}
                
            >
                <img style={{width:"100%", objectFit:"cover" }} src={'../'+params.image}/>
            </Box>
            
               {(!editMode) ? <Edit onClick = { handleChangeMode }/> : <SaveAs />} 
        </Box>
    </Box>
  )
}

export default PerfilUsuarioOrg