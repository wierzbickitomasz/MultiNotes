import React from 'react' //reactowe komponenty
import styles from "./ListItem.module.scss"; //import styles, tak wygląda dla scss modules
import PropTypes from 'prop-types'

//komponent prywatny, bedzie z niego korzystał tylko ListWrapper
const ListItem = ({image, title, description, link}) => { //wyciągamy propsy przy użyciu destrukturyzacji (es6), żeby nie pisać props.image itd
    const ImageTag = image ? 'img' : 'div' //jesli image jest podany to znacznik bedzie img, a jak nie to div
    
    return ( //daliśmy to return, żeby można było napisać to const na górze
        <li className = {styles.wrapper}

            //renderowanie warunkowe {jeśli jest && to wtedy}
            >{image && //jesli mamy image, to renderujemy obiekt
                <ImageTag src = {image} className = {image ? styles.image : styles.imageNone} ></ImageTag>}
                                                    {/*jeśli nie ma image to ma inna klase*/}
            
            <div>
                <h2 className = {styles.name}>{title}</h2> {/*tytul jest zawsze*/}
                <p className = {styles.description}>{description}</p> {/*opis jest zawsze*/}

                {link && //jesli mamy link, to renderujemy obiekt
                    <a href={link} target = "_blank" className = {styles.button} rel = "noopener noreferrer" >visit Twitter page</a>
                    }{/*renderowanie warunkowe {jeśli jest && to wtedy (1 opcja)}*/}
               
            </div>
        </li>
    )
   
};

//PropTypes - pozwala na weryfikacje tego czy props który podaliśmy do komponentu jest odpowiedniego typu
ListItem.propTypes = { 
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}
ListItem.defaultProps = { //defaultowy props
    //description: 'deafault description',
    image: null,
    link: null
}
export default ListItem



/*1111111
const ListItem = (props) => ( //dodajemy klase z cssa //blok to list item, element to wrapper ??
    <li className = "listItem__wrapper">  
        <img src = {props.image} className = "listItem__image" ></img>
        <div>
            <h2 className = "listItem__name">{props.name}</h2>
            <p className = "listItem__description">{props.description}</p>
            <a href={props.link} className = "listItem__button">visit Twitter page</a>
        </div>
    </li>
);*/