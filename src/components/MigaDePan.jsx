import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FullDataCtxt } from '../global/contexts/equipContext';
import { useTheme } from '@emotion/react';
const MigaDePan = () => {
    const theme = useTheme()
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const { setSelected } = useContext(FullDataCtxt)
  return (
    
    <Box
        sx={{
            display: "flex",
            fontSize:"25px",
            color:"#1E90FF!",
            gap:"3px",
            textDecorationColor:"#1E90FF" ,
        }}
    >
          <Link sx= {{ color:"#1E90FF !important" }} onClick={ () => { 
            const pth = window.location.href.split("/")[3]
            setSelected((pth === "") ? "inicio":pth) 
            }} to="/"><Box sx={{textDecorationColor:"#1E90FF" ,color:"#1E90FF", "&:hover":{ color:theme.palette.primary.main }}}>Inicio/</Box></Link><strong style={{color:'black', fontWeight: "bold"}}></strong>
        {pathnames.map((pathname, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <Box key={to}>
              <Link onClick={ () => { 
                const pth = window.location.href.split("/")[3]
                setSelected((pth === "") ? "inicio":pth) 
                }} to={to}><Box sx={{color:"#1E90FF", "&:hover":{ color:theme.palette.primary.main }}}>{pathname}/</Box></Link><strong style={{color:'black', fontWeight: "bold"}}></strong>
            </Box>
          );
        })}
    </Box>
  );
};

export default MigaDePan;