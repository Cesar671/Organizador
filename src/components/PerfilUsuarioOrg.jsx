import { Box, useTheme } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Edit, SaveAs, Warning, Close  } from '@mui/icons-material'
import ModalCustom from './ModalIcon'
import ConfirmDialog from './ConfirmDialog'
import { FullDataCtxt } from '../global/contexts/equipContext'

const PerfilUsuarioOrg = ({params, close}) => {
    const { jugadoresN, setJugadores } = useContext(FullDataCtxt)

    const theme = useTheme()
    const [editMode, setEditMode] = useState(false);
    const [nombre, setNombre] = useState(params.nombre)
    const [ci, setCi] = useState(params.carnetIdentidad)
    const [celular, setCelular] = useState(params.numeroCelular)
    const [genero, setGenero] = useState(params.genero)
    const [date, setDate] = useState(params.fechaNacimiento)
    const [posicion, setPosicion] = useState(params.posicion)
    const [response, setResponse] = useState(false)

    const handleNombre = (e) => setNombre(e.target.value)
    const handleCi = (e) => setCi(e.target.value)
    const handleCelular = (e) => setCelular(e.target.value)
    const handleGenero = (e) => setGenero(e.target.value)
    const handleDate = (e) => setDate(e.target.value)
    const handlePosicion = (e) => setPosicion(e.target.value)

    const handleChangeMode = () =>{
        setEditMode(!editMode)
    }

    useEffect(() => {

        if(response){
            const data = Object.values(jugadoresN)
            const newData = data.map( jugador => 
                                jugador.id == params.id ? { ...jugador, 
                                    nombre: nombre,
                                    carnetIdentidad: ci,
                                    numeroCelular: celular,
                                    genero: genero,
                                    fechaNacimiento: date,
                                    posicion: posicion
                                }:jugador)
            setJugadores( newData)
            handleChangeMode()
            setResponse(false)
        }
    },[response])

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
            <Close onClick = { close }/>
            <Box

                sx={{
                    width:"170px",
                    height:"170px",
                    borderRadius:"100px",
                    overflow:"hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                }}
                
            >
                <img style={{width:"100%", objectFit:"cover" }} src={'../'+params.image}/>
            </Box>
            
               {(!editMode) ? <Edit 
                                onClick = { handleChangeMode }/> : <ModalCustom 
                                                                            Component={ ConfirmDialog } 
                                                                            Icon={ SaveAs } 
                                                                            text = { "¿Está seguro de guardar los cambios?" }
                                                                            response={ response }
                                                                            setResponse = { setResponse }
                                                                                    />} 
        </Box>
    </Box>
  )
}

export default PerfilUsuarioOrg