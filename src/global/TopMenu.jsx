import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { AccountCircle } from "@mui/icons-material"
import { Link } from 'react-router-dom'

const TopNav = ({ data, setSelected }) => {

    return (<Box
        sx = {{
            display: "flex",
            fontSize: "25px"
        }}
    >
    <Link onClick={ () => {
        setSelected("inicio")
    }} to="/">
        inicio
    </Link>
        /{(data.length > 0) && data.map((palabra, index) => <><Link to={ data.slice(0, data.length-index).join("/") }>{ palabra }</Link>/</>) }
    </Box>)
}

const TopMenu = ({ selected, setSelected }) => {
    const [ dir, setDir ] = useState(null)
    useEffect(() => {
        const dirs = window.location.href.split("/").slice(3)    
        setDir(dirs)  
    },[selected])
  return (
    <Box
        sx = {{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
            alignItems: "center"
        }}
    >
        <div>{(dir) && (<TopNav setSelected={setSelected} data={dir} />) }</div>
        <Box
            sx = {{
                display: "flex",
                alignItems: "center",
                gap: "5px",

            }}
        >
            Don Vlady
            <AccountCircle 
                sx={{
                    fontSize: "50px"
                }}
            />
        </Box>
    </Box>
  )
}

export default TopMenu