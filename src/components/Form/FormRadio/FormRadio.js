import React from 'react'; //reactowe komponenty
import styles from './FormRadio.module.scss';

const Radio = ({id, checked, changeFn, text}) => { //wyciągamy propsy przy użyciu destrukturyzacji (es6), żeby nie pisać props.id itd
 // const ImageTag = image ? 'img' : 'div' 
    
    return ( //daliśmy to return, żeby można było napisać to const na górze
      <label className={styles.radio}>
        <input className={styles.radio}
          id={id}
          type="radio"
          checked={checked}
          onChange={changeFn}
//za każym razem jak zostanie kliknięty wykona się funkcja changeFn, czyli handleRadioButtonChange (Wrócimy do komponentu wyżej)
        />
        <div className={styles.radioButton} /> 
        <h2 className = " ">{text}</h2>
      </label>
    )
}

export default Radio





