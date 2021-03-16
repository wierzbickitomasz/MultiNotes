import React from 'react'; //reactowe komponenty
import styles from './Input.module.scss' //import styles, tak wygląda dla scss modules
import PropTypes from 'prop-types'

const Input = ({tag: Tag, name, label, maxLength, onChangeFn, value}) => ( //wyciągamy propsy przy użyciu destrukturyzacji (es6), żeby nie pisać props.name itd
  //tag: Tag, bo w wyjątkowym miejscu, wiec zmieniamy nazwe propsa tym dwukropkiem
    <div className={styles.formItem}> 
          <Tag /*wyjątkowo w ten sposob, To już nie komponent?? Tylko np div, input itd, */
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            //jesli Tag to textarea to dajemy mu klase textarea, jak nie to klase input
            type="text" //podajemy normalnie parametry tego diva, czy tam inputa, tym razem to już nie propsy
            name={name}
            id={name}
            required
            maxLength = {maxLength}
            placeholder = " "
            onChange = {onChangeFn}
//za każym razem jak zostanie kliknięty wykona się funkcja onChangeFn, czyli handleInputeChange (Wrócimy do komponentu wyżej)
            value = {value} //możemy kontrolować nawet co jest wpisane w okienku
          />
          <label className={styles.label} htmlFor={name}> {/*html for: ustawiamy label dla danego elementu*/}
            {label}
          </label>
          <div className={styles.formItemBar} />
        </div>
)

//PropTypes - pozwala na weryfikacje tego czy props który podaliśmy do komponentu jest odpowiedniego typu
Input.propTypes = { 
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number
}
Input.defaultProps = { //defaultowy props
    tag: 'input', //jezeli nie bedzie taga w propsach to bedzie to input
    maxLength: 200
}

export default Input