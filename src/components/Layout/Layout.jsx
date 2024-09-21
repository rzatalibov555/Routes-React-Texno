import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'
import { CustomLinkHook } from '../CustomHooks/CustomLinkHook'

const setActive = ({isActive}) => isActive ? "myCustomActive" : ""

// const setStyle = ({isActive}) => ({color: isActive? "blue" : "red"})

const Layout = () => {
    return(
        
        <>
            {/* --------------------------  Custom navlink  ---------------------------------------------------------- */}

            <header className='disFx'>
                <ul>
                    <li><CustomLinkHook to="/">Home</CustomLinkHook></li>
                    <li><CustomLinkHook to="/movies">Movies</CustomLinkHook></li>
                    <li><CustomLinkHook to="/tv-shows">Tv Shows</CustomLinkHook></li>
                    <li><CustomLinkHook to="/contact">Contact</CustomLinkHook></li>
                </ul>
            </header>

            {/* ---------------------------  NavLink With Class  --------------------------------------------------------- */}

            {/* <header className='disFx'>
                <ul>
                    <li><NavLink className={setActive} to="/">Home</NavLink></li>
                    <li><NavLink className={setActive} to="/movies">Movies</NavLink></li>
                    <li><NavLink className={setActive} to="/tv-shows">Tv Shows</NavLink></li>
                    <li><NavLink className={setActive} to="/contact">Contact</NavLink></li>
                </ul>
            </header> */}

            {/* ---------------------------------  NavLink With style  --------------------------------------------------- */}

            {/* <header className='disFx'>
                <ul>
                    <li><NavLink style={setStyle} to="/">Home</NavLink></li>
                    <li><NavLink style={setStyle} to="/movies">Movies</NavLink></li>
                    <li><NavLink style={setStyle} to="/tv-shows">Tv Shows</NavLink></li>
                    <li><NavLink style={setStyle} to="/contact">Contact</NavLink></li>
                </ul>
            </header> */}


            
        

            <div className="container">
                <div className="main">
                    <Outlet/>
                </div>
            </div>


            <footer>Texnolab 2024</footer>
        </>


        
    )
}

export default Layout