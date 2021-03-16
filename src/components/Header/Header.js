import React from 'react'; //reactowe komponenty
import HeaderNavigation from '../Header/HeaderNavigation/HeaderNavigation'
import styles from '../Header/Header.module.scss'
import logoImage from '../../assets/images/logo.svg'
const Header = ({openModalFn}) => (  //wyciągamy propsa (openModalFn) przy użyciu destrukturyzacji (es6), żeby nie pisać props.openModalFn itd
    <header className = {styles.wrapper}>

       <HeaderNavigation></HeaderNavigation>
{/*za każym razem jak zostanie kliknięty wykona się funkcja openModalFn, czyli openModal (Wrócimy do komponentu wyżej)*/}
       <button onClick = {openModalFn} className={styles.button}>New item</button>
    </header>
)

export default Header