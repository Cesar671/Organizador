import React, { useContext, useEffect, useState } from 'react'
import { Typography, Box, useTheme } from "@mui/material"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon} from "@mui/icons-material"
import { HouseOutlined, GroupsSharp, GroupOutlined , Accessibility, SignLanguage, Campaign, SportsVolleyball, CalendarMonth,TableChart,Today,Diversity3Sharp } from '@mui/icons-material';
import 'react-pro-sidebar/dist/css/styles.css';
import { ModeContext } from '../theme/modeContext';
import { Link } from 'react-router-dom';
import { FullDataCtxt } from './contexts/equipContext';

const MenuItemCustom = ({Icon, title, link}) => {
  const {selected, setSelected} = useContext(FullDataCtxt)
  return (<>
    <MenuItem
    icon={ <Icon />}
    onClick={ () => { 
      const pth = window.location.href.split("/")[3]
      setSelected((pth === "") ? "inicio":pth) 
    }}
    active = { title.replace(/\s+/g, '').toLowerCase() === selected }
  >
    { title }
    <Link to={ link }/>
  </MenuItem>
  </>
  )
}

const AsideMenu = () => {
  const {selected, setSelected} = useContext(FullDataCtxt)
  const [ collapsed, setCollapsed ] = React.useState(true)
  const theme = useTheme()
  const { modeContext } = React.useContext(ModeContext);
  useEffect(() => {
    setSelected((selected === "") ? "inicio":selected)
  }, [])
  return (
      <Box  sx={{
        "& .pro-sidebar-inner": {
          background: theme.palette.primary.main,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 15px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#61dafb !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: `${ theme.palette.secondary.main } !important`
        },
        "& .pro-menu-item.active span": {
          color: ` ${ theme.palette.primary.main } !important`,
        },
        "& .pro-menu ul, .pro-menu": {
          height: "100%"
        },
        "& .pro-icon": {
          color: theme.palette.secondary.main
        },
        "& .pro-arrow-wrapper": {
          color: theme.palette.secondary.main
        },
        "& .pro-sub-menu > .pro-inner-item .pro-item-content, strong, .pro-arrow": {
          color: theme.palette.secondary.main,
          fontWeight: "bold"
        },
        "& .pro-item-content": {
          color: theme.palette.secondary.main,
        },

        "& .pro-sub-menu  .pro-inner-list-item ul":{
          borderLeft: "1px solid",
          color: theme.palette.secondary.main,
        },

      }}>
        
        <ProSidebar collapsed={ collapsed }
          style={{ position:"fixed" }}
        >
            <Menu iconShape='square'>
              <Box sx={{ height: "100%" }}>
                <Box>
                  <MenuItem
                    icon={ <MenuIcon /> }
                    onClick={ () => setCollapsed(!collapsed) }
                  >
                    {(!collapsed) && 
                    (<Box>
                      <Typography
                        variant='h5'
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <strong>Menu</strong>
                      </Typography>  
                    </Box>)}
                    
                  </MenuItem>
                </Box>
                <Box
                sx= {{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "92%"
                }}
                >
                    <Box
                      sx = {{
                        marginTop: "50px"
                      }}
                    >
                      <strong>
                        <MenuItemCustom Icon={ HouseOutlined } title="Inicio" link="/" setSelected={setSelected} selected={selected}/>
                      </strong>
                      
                      <SubMenu
                        title="Partidos"
                        icon= { <SportsVolleyball /> }
                        sx= {{
                          borderLeft: "2px solid",
                          borderColor: theme.palette.secondary.main
                        }}
                      >
                        <MenuItemCustom selected={selected} Icon={ CalendarMonth } title="Rol de partidos" link="/roldepartidos" setSelected={setSelected}/>
                        <MenuItemCustom selected={selected} Icon={ TableChart } title="Tabla de posiciones" link="/tabladeposiciones" setSelected={setSelected}/>
                        <MenuItemCustom selected={selected} Icon={ Today } title="Partidos del dia" link="/partidosdeldia" setSelected={setSelected}/>
                      </SubMenu>

                      <SubMenu
                        title="Clubes"
                        icon= { <Diversity3Sharp /> }
                      >
                        <MenuItemCustom selected={selected} Icon={ GroupsSharp } title="Equipos" link="/equipos" setSelected={setSelected}/>
                        <MenuItemCustom selected={selected} Icon={ Accessibility } title="Jugadores" link="/jugadores" setSelected={setSelected}/>
                        <MenuItemCustom selected={selected} Icon={ GroupOutlined } title="Equipos Org" link="/equiposorg" setSelected={setSelected}/>
                      </SubMenu>
                      <MenuItem
                        icon={ <SignLanguage />}
                        sx={{
                          whiteSpace: "nowrap"
                        }}
                        onClick={ () => { setSelected(window.location.href.split("/")[3]) }}
                        active = { "reglamento" === selected }
                      >
                        <Typography
                          variant='div'
                          sx={{
                            fontWeight: "bold",
                            wordBreak: "normal",
                            overflow: "hidden",
                            whiteSpace: (!collapsed) ? "normal":"none",
                            animation: "none"
                          }}
                        >
                          Reglamento y Gestos Arbitrales
                        </Typography>
                        <Link to="reglamento"/>
                      </MenuItem>
                      <strong>
                        <MenuItemCustom selected={selected} Icon={ Campaign } title="Noticias" link="/noticias" setSelected={setSelected}/>
                      </strong>
                    </Box>
                    <Box>
                      <MenuItem
                        onClick={ modeContext }
                        icon = { theme.palette.mode === "light" ? <LightModeOutlined /> : <DarkModeOutlined /> }
                      >
                        { (theme.palette.mode === "light" ? "Light Mode": "Dark Mode") }
                      </MenuItem>
                    </Box>
                    
                </Box>
                </Box>
                
             
            </Menu>
        </ProSidebar>
        <ProSidebar
            collapsed= {collapsed}
            style={{ zIndex:"-1" }}
          >

        </ProSidebar>
      </Box>
  )
}

export default AsideMenu