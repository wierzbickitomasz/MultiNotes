import React from 'react'; //reactowe komponenty
import {NavLink} from 'react-router-dom' //zamiast początkowego {Link}

import styles from './HeaderNavigation.module.scss'
const HeaderNavigation = () => (
    <nav>
        <ul className = {styles.wrapper}>  {/*"NavLink to, lub Link to" zamiast <a href></a>, strona nie będzie się przeładowywać, "single page app"*/}
            <li 
                className = {styles.navItem}>
                    <NavLink exact //NavLink jest jak Link, ale przyjmuje dodatkowego propsa, klase która będzie aktywowana jak klikniemy w element 
                        activeClassName = {styles.navItemLinkActive} //klasa aktywowana jeżeli klikniemy w element
                        className = {styles.navItemLink} to = "/">Facebooks
                    </NavLink>
            </li> 
            
            <li 
                className = {styles.navItem}>
                    <NavLink exact //NavLink jest jak Link, ale przyjmuje dodatkowego propsa, klase która będzie aktywowana jak klikniemy w element 
                        activeClassName = {styles.navItemLinkActive} //klasa aktywowana jeżeli klikniemy w element
                        className = {styles.navItemLink} to = "/Articles">Articles
                    </NavLink>
            </li> 

            <li 
                className = {styles.navItem}>
                    <NavLink exact //NavLink jest jak Link, ale przyjmuje dodatkowego propsa, klase która będzie aktywowana jak klikniemy w element 
                        activeClassName = {styles.navItemLinkActive} //klasa aktywowana jeżeli klikniemy w element
                        className = {styles.navItemLink} to = "/Notes">Notes
                    </NavLink>
                   
            </li> 
        </ul>
    </nav>
  
)

export default HeaderNavigation