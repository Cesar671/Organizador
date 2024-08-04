import React,{ useContext, useEffect, useState } from 'react'
import { Box, useTheme, Button, Pagination } from '@mui/material'
import { UploadFile, Add, Save, Clear, Close } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import ButtonCustom from '../components/ButtonCustom'
import { FullDataCtxt } from '../global/contexts/equipContext'
import ConfirmDialog from './ConfirmDialog'
import Modal from './Modal'

const FormRegistroEquipos = ({ close }) => {
    const { jugadoresN, setJugadores, equiposN, setEquipos } = useContext( FullDataCtxt )
    const theme = useTheme()

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const [nombreJugador, setNombreJugador] = useState("")
    const [ci, setCi] = useState("")
    const [dateJugador, setDateJugador] = useState("")
    const [genero, setGenero] = useState("Masculino")

    const handleNombre = (e) => setNombre(e.target.value)
    const handleDescripcion = (e) => setDescripcion(e.target.value)
    const handleNombreJugador = (e) => setNombreJugador(e.target.value)
    const handleCi = (e) => setCi(e.target.value)
    const handleDateJugador = (e) => setDateJugador(e.target.value)
    const handleGenero = (e) => setGenero(e.target.value)
    const [newJugadores, setNewJugadores] = useState([])
    const [result, setResult] = useState(false)
    const [imagen, setImagen] = useState(null)

    const addHandlerJugadores = () => {
        setNewJugadores([...newJugadores,{
            id: jugadoresN.length+10+newJugadores.length,
            nombre:nombreJugador,
            fechaRegistro:"20/14/24",
            carnetIdentidad: ci,
            numeroCelular: "",
            genero: genero,
            fechaNacimiento: dateJugador,
            posicion: "",
            equipoId: "",
            image:""
        }])
    }

    const [image, setImage] = useState("imgdefault.webp")
    const columns = [
        { field: 'id', headerName: '#', flex: 0.1, disableColumnMenu: true },
        { field: 'nombre', headerName: 'Nombre', flex: 0.3, disableColumnMenu: true },
        { field: 'carnetIdentidad', headerName: 'CI', flex:0.2, disableColumnMenu: true },
        { field: 'genero', headerName: 'genero', flex:0.14, disableColumnMenu: true },
        { field: 'fechaNacimiento', headerName: 'Nacimiento', flex:0.2, disableColumnMenu: true },
        { field: '', headerName:"Eliminar", disableColumnMenu:true,flex:0.16,
            renderCell: (params) => {
                const { id } = params.row
                const deleteHandler = () => {

                }
                return (
                  <Clear onClick={ deleteHandler } sx={{ 
                        backgroundColor:"rgba(255,0,0, 0.6)", 
                        color:"white", 
                        borderRadius:"25px" }}/>
                )
              }
        },
      ];

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          const reader = new FileReader();
          const imageUrl = URL.createObjectURL(file);
          console.log(imageUrl)
          reader.onload = (e) => {
            setImage(e.target.result);
          };
    
          reader.readAsDataURL(file);
        }
      };
      useEffect(() => {
        if (result){

            const fechaActual = new Date()
            const id = equiposN.length+1
            const año = fechaActual.getFullYear();
            const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); 
            const día = fechaActual.getDate().toString().padStart(2, '0');
            const fechaFormateada = `${año}-${mes}-${día}`;
            const jugadoresArreglados = newJugadores.map((jugador) => ({... jugador, equipoId: id}))
            const nuevoEquipo = {
                id: id,
                name: nombre,
                descripcion: descripcion,
                image: image,
                jugadores: jugadoresArreglados.length,
                fechaRegistro: fechaFormateada
            }
            
            setEquipos([... equiposN, nuevoEquipo])
            console.log(equiposN)
            setJugadores([...jugadoresArreglados, ... jugadoresN])
            close()
        }
      },[result])

  return (  
    <Box
        sx={{ 
            width: 600,
            height: 700,
            bgcolor: theme.palette.background.default,
            border: '2px solid #000',
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap:"5px"
            }}    
    >
        <Box
            sx = {{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                width: "100%",
            }}
        >
            <Box
                component= "form"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent: "start",
                    gap:"5px",

                }}
            >
                <h1 style={{padding:0, margin:0}}>Registrar Equipo</h1>
                <label><strong>Nombre : </strong><input placeholder='Nombre del equipo' value={ nombre } onChange={ handleNombre }/></label>
                <label><strong >Descripcion : </strong></label>
                <textarea value={descripcion} onChange={ handleDescripcion } type="" style={{ resize: "none", width:"260px", height:"100px"}} placeholder='descripcion del equipo'/>
            </Box>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"end",
                    gap:"10px",
                }}
            >
                <Close onClick = { close }/>
                <img src={ image } style={{height: "150px", width:"auto"}} id="inputModal"/>
                <input
                    accept="image/*"
                    id="upload-image"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
               <label htmlFor="upload-image">
            <Button variant="contained" component="span" startIcon= { <UploadFile /> } >
                Seleccionar Imagen
            </Button>
            </label>
            </Box>
        </Box>
        <Box
            m="10px 0 0 0"
            height="70vh"
            sx = {{
                "& .MuiDataGrid-root" :{
                    backgroundColor: "#f5f5f5"
                },
                "& .MuiDataGrid-cell": {
                    borderColor: "black",
                    border: "1px solid #ccc"
                },
                "& .name-column--cell": {

                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: theme.palette.secondary.main,

                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: "white",
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop: "none",
                    backgroundColor: theme.palette.background.default
                },
                "& .MuiCheckbox-root":{
                    color: ` ${theme.palette.secondary.main} !important`
                }
            }}
        >
            <DataGrid
                disableColumnResize
                pagination
                autoPageSize
                rows={ newJugadores }
                pageSizeOptions={[0]}
                columns={ columns }
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
                        textAlign:"center"
                    },
                    '& .MuiDataGrid-columnHeader': {
                        border: "2px solid #ccc",
                        backgroundColor: "rgba(255,255,255,0.3)",
                        textAlign:"center"
                    },
                    '& .MuiDataGrid-iconSeparator': {
                        color: theme.palette.secondary.main,
                    },
                    '& .MuiDataGrid-footerContainer': {
                        border: "2px solid #ccc",
                        textAlign:"center",

                    }
                    }}
            />
        </Box>
        <strong>Añadir Nuevo Jugador</strong>
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
                    Nacimiento
                    <input placeholder='fecha de nacimiento' type='date' value={dateJugador} onChange={handleDateJugador}/>
                </label>
                <ButtonCustom event={ addHandlerJugadores } name="" Icon={ Add }/>
            </Box>
        <Modal  text = "¿Esta seguro de Registrar el equipo?" setResponse = { setResult } nameButton = "Registrar Equipo" Icon = { Save } Component = { ConfirmDialog }/>
    </Box>
  )
}

export default FormRegistroEquipos