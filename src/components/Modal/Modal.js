import React from 'react'; //reactowe komponenty
import styles from "./Modal.module.scss"
import Form from '../Form/Form'

const Modal = ({closeModalFn}) => (  //wyciągamy propsa (closeModalFn) przy użyciu destrukturyzacji (es6), żeby nie pisać props.closeModalFn itd
    <div className = {styles.wrapper}>
        <button className={styles.closeButton} onClick = {closeModalFn}></button>
{/*za każym razem jak zostanie kliknięty to wykona się funkcja closeModalFn, czyli closeModal (Wrócimy do komponentu wyżej)*/}
        <Form></Form>
    </div>
)

export default Modal