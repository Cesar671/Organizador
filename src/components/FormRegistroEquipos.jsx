import React,{ useEffect, useState } from 'react'
import { Box, useTheme, Button, Pagination } from '@mui/material'
import { UploadFile, Add } from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid'
import ButtonCustom from '../components/ButtonCustom'
const FormRegistroEquipos = () => {
    const theme = useTheme()
    const [image, setImage] = useState("imgdefault.webp")
    const columns = [
        { field: 'col1', headerName: '#', width: 50, disableColumnMenu: true },
        { field: 'col2', headerName: 'Nombre', width: 130, disableColumnMenu: true },
        { field: 'col3', headerName: 'Ci', width: 80, disableColumnMenu: true },
        { field: 'col4', headerName: 'Fecha de Nacimiento', width: 150, disableColumnMenu: true },
        { field: 'col5', headerName: 'Genero', width: 70, disableColumnMenu: true },
        { field: 'col6', headerName: 'Foto', width: 50, disableColumnMenu: true },
      ];
    const rows = []
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          const reader = new FileReader();
    
          reader.onload = (e) => {
            setImage(e.target.result);
          };
    
          reader.readAsDataURL(file);
        }
      };
  return (  
    <Box
        sx={{ 
            width: 600,
            height: 700,
            bgcolor: theme.palette.background.default,
            border: '2px solid #000',
            padding: "30px",
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
                <h1>Registrar Equipo</h1>
                <label>Nombre : <input placeholder='Nombre del equipo'/></label>
                <label>Descripcion :</label>
                <textarea type="" style={{ resize: "none", width:"260px", height:"100px"}} placeholder='descripcion del equipo'/>
            </Box>
            <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"10px",
                }}
            >
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
                rows={ rows }
                columns={ columns }
                pageSize={5}
                pagination= {false}
                rowsPerPageOptions={[5]}
                componentsProps={{
                    pagination:{
                        sx: { display: "none" }
                    }
                }}
                sx={{
                    backgroundColor: "white",
                    "& .MuiDataGrid-root" :{
                    backgroundColor: "#f5f5f5"
                },
                "& .MuiDataGrid-cell": {
                    borderColor: "black",
                    border: "1px solid #ccc"
                },
                }}
            />
        </Box>
        <Box
            sx= {{
                display:"flex",
                gap: "5px"
            }}
        >
            <input placeholder='Nombre'/>
            <input placeholder='Ci' type='number' style={{width:"80px"}} />
            <input placeholder='fecha de nacimiento' type='date'/>
            <select id="options" name="options">
                <option value="Genero" selected>Genero</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
            </select>
            <ButtonCustom name="" Icon={ Add }/>
        </Box>
        <ButtonCustom name="Guardar" Icon={ Add }/>
    </Box>
  )
}

export default FormRegistroEquipos