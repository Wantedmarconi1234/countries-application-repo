import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import React, { useState} from "react";

const Layout = () => {
    const [ isDarkTheme, setIsDarkTheme] = useState(false)

    const handleTheme = () => {
        setIsDarkTheme( prevTheme => !prevTheme)
    }

    const ThemeColor = {
        backgroundColor: isDarkTheme ? "#ffffff" : "#202c37",
        color: isDarkTheme ? "#111517" : "#ffffff"
    }

    return ( 
        <div className="layout-comp" style={ThemeColor}>
            <Navbar handleTheme={handleTheme} isDarkTheme={isDarkTheme}/>
            <Outlet context={{isDarkTheme}}/>   
        </div>
    );
}
 
export default Layout;