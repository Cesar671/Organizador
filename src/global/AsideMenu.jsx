import React from 'react'
import { Typography, IconButton, Box, useTheme } from "@mui/material"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { ArrowBack, ArrowForward, Surfing, LightMode, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material"
import { HouseOutlined, Group,EmojiEvents, Campaign, Sports  } from '@mui/icons-material';
import 'react-pro-sidebar/dist/css/styles.css';
import { ModeContext } from '../theme/modeContext';


const AsideMenu = () => {

  const [ collapsed, setCollapsed ] = React.useState(true)
  const theme = useTheme()
  const { modeContext } = React.useContext(ModeContext);

  return (
      <Box  sx={{
        "& .pro-sidebar-inner": {
          background: theme.palette.primary.main,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#61dafb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
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
        "& .pro-item-content": {
          color: theme.palette.secondary.main
        }
      }}>
        <ProSidebar collapsed={ collapsed }>
            <Menu iconShape='square'>
              <Box sx={{ height: "100%" }}>
                <Box>
                  <MenuItem
                    icon={ (collapsed ? <ArrowForward/>:<ArrowBack />) }
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
                        Menu
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
                      <MenuItem
                        icon={ <HouseOutlined />}
                      >
                        Home
                      </MenuItem>
                      <MenuItem
                        icon={ <Group />}
                      >
                        Equipos
                      </MenuItem>

                      <SubMenu
                        title="Campeonato"
                        icon= { <EmojiEvents /> }
                      >
                        <MenuItem
                          icon={ <Surfing /> }
                        >
                          Button sub
                        </MenuItem>
                        <MenuItem
                          icon={ <LightMode  />}
                        >
                          Otro Botton
                        </MenuItem>
                      </SubMenu>
                      <SubMenu
                        title="Arbitraje y reglamento"
                        icon= { <Sports /> }
                      >
                        <MenuItem
                          icon={ <Surfing /> }
                        >
                          Button sub
                        </MenuItem>
                        <MenuItem
                          icon={ <LightMode  />}
                        >
                          Otro Botton
                        </MenuItem>
                      </SubMenu>
                      <MenuItem
                        icon={ <Campaign />}
                      >
                        Noticias
                      </MenuItem>
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
      </Box>
  )
}

export default AsideMenu