import React from "react"

const Navbar = ({handleTheme, isDarkTheme}) => {
    return ( 
        <div className="navbar-comp">
              <nav>
                <ul className="nav-items">
                    <li className="page-title">Where in the world?</li>
                    <li className="themeToggle" onClick={() => handleTheme()}>{ isDarkTheme ? "Light Mode" : "Dark Mode"}</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;