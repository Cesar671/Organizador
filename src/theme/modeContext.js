import { createContext, useMemo, useState } from "react"
import { createTheme } from "@mui/material"
import { PRIMARY, SECONDARY, BACKGROUND, PRIMARY_DARK, SECONDARY_DARK, BACKGROUND_DARK } from "./colors"

export const ModeContext = createContext({
    modeContext: () => {}
})

export const useMode = () => {
    const [ mode, setMode ] = useState("light")
    const modeMemo = useMemo(() => ({
        modeContext: () => setMode((newMode) => (newMode === "light" ? "dark": "light") )
    }),[])

    const theme = useMemo(() => createTheme({
        palette:{
            mode:mode,
            primary:{
                main: PRIMARY
            },
            secondary:{
                main: SECONDARY
            },
            background:{
                default: BACKGROUND
            },
            ...(mode === 'dark' && {
                background:{
                    default: BACKGROUND_DARK
                },
                primary:{
                main: PRIMARY_DARK
                },
                secondary:{
                    main: SECONDARY_DARK
                },
            })
        }
    }),[mode])
    return [theme, modeMemo]
}