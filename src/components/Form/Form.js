import React from 'react'; //reactowe komponenty
import Input from '../Input/Input'
import styles from './Form.module.scss' //import styles, tak wygląda dla scss modules
import Radio from '../../components/Form/FormRadio/FormRadio'
import AppContext from "../../contex"
//css modules, nadajemy te same nazwy klas w każdym z komponentów, np wrapper w Form i ListItem 
//npm install node-sass, trzeba to zainstalować



//Formularz, funkcyjny komponent
//const Form = ({ submitFn }) => ( //wyciągamy propsa (submitFn) przy użyciu destrukturyzacji (es6), żeby nie pisać props.submitFn itd
//  
//  );

const descriptions = {
  facebook: "favourite facebook account",
  article: "Article",
  note: "Note"
}

class Form extends React.Component { //klasowy komponent, ma własne stany
  state = { //stan pozwala na dynamiczną zmiane zawartosci komponentów

    
    activeOption: 'facebook',

    //tworzymy sobie takie puste wartosci dla każdego pola 
    image: '',
    title: '',
    description: '',
    link: ''
  }
  handleRadioButtonChange  = (type) => {
    this.setState({ //aktualizujemy stan używając wbudowanej funkcji setState i prevState
      activeOption: type
      })   
  }
  handleInputeChange  = (e) => {
    this.setState({ //aktualizujemy stan używając wbudowanej funkcji setState i prevState
      [e.target.name]: e.target.value //sprytnie zamieniamy pola, bo mają takie same klucze
      })

    console.log(`
    image: ${this.state.image},
    title: ${this.state.title},
    description: ${this.state.description},
    link: ${this.state.link}
    `)
  }


  

  render() { //renderowanie
    //const {isModalOpen} = this.state;
    const {activeOption} = this.state //destrukturyzacja, żeby nie pisać zawsze this.state.activeOptio
    return (
       //tworzymy konsumera, żeby odebrać dane
      <AppContext.Consumer>
        {(context) => ( //musi być funkcja odbierająca dane
          <div className={styles.wrapper}>{/*inna składnia w tym scss*/}

          {/*sprytnie, tablica descriptions na samej górze ma jako klucze to co przyjmuje activeOption */}
                <h2>Add new {descriptions[activeOption]}</h2> 
                
                <form autoComplete = "off" className={styles.form} onSubmit={(e) => context.addItem(e, this.state)} //przekazujemy wyżej event (żeby dać e.preventDefault i state)
                //za każym razem jak zostanie zasubmitowany to wykona się funkcja addItem wyciągnieta z kontekstu (Wrócimy do komponentu 2 poziomy wyżej, Roota)
                //Nie możemy normalnie z nawiazami zrobić, bo by się od razu wywołała. Robimy funkcje, która zwraca funckje 
                ><div className={styles.radioWrapper}>{/*inna składnia w tym scss*/}
                <Radio 
                  id = "facebook"
                  checked = {activeOption === "facebook"} //warunek kiedy jest zaznaczony, wysle true/fasle
                  changeFn = {() => this.handleRadioButtonChange("facebook")}
          //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje changeFn
          //Nie możemy normalnie z nawiazami zrobić, bo by się od razu wywołała. Robimy funkcje, która zwraca funckje
                  text = "facebook"
                ></Radio>
          
                <Radio 
                  id = "article"
                  checked = {activeOption === "article"} //warunek kiedy jest zaznaczony, wysle true/fasle
                  changeFn = {() => this.handleRadioButtonChange("article")}
          //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje changeFn
          //Nie możemy normalnie z nawiazami zrobić, bo by się od razu wywołała. Robimy funkcje, która zwraca funckje
                  text = "article"
                ></Radio>
          
                <Radio 
                  id = "note"
                  checked = {activeOption === "note"} //warunek kiedy jest zaznaczony, wysle true/fasle
                  changeFn = {() => this.handleRadioButtonChange("note")}
          //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje changeFn
          //Nie możemy normalnie z nawiazami zrobić, bo by się od razu wywołała. Robimy funkcje, która zwraca funckje
                  text = "note"
                ></Radio>
                </div>
          
                {/*Renderowanie warunkowe*/}
                {activeOption === "facebook" ? //jeśli aktywną opcją jest facebook, to renderujemy obrazek
                <Input  //kolejne, niższe komponenty, dajemy im propsy czyli jakby argumenty
                name="image"  
                label="Image"
                onChangeFn = {this.handleInputeChange}
                //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje onChangeFn
                value = {this.state.image} //to state mówi co jest wpisane
                /> :null
                }
               
                <Input
                  name="title"
                  label = {activeOption === "facebook" ? "facebook name" : "Title"} //znowu renderowanie warunkowe
                  maxLength={30}
                  onChangeFn = {this.handleInputeChange}
                  //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje onChangeFn
                  value = {this.state.title} //to state mówi co jest wpisane
                />
               
               
                <Input
                  tag="textarea"
                  name="description"
                  label="Description"
                  onChangeFn = {this.handleInputeChange}
                  //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje onChangeFn
                  value = {this.state.description} //to state mówi co jest wpisane
                />
          
                {/*Renderowanie warunkowe*/}
                {activeOption !== "note" ? //jeśli aktywną opcją jest nie notatka, to renderujemy link
                 <Input
                  name="link"
                  label = {activeOption === "facebook" ? "facebook link" : "Link"} //znowu renderowanie warunkowe
                  onChangeFn = {this.handleInputeChange}
                  //dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje onChangeFn
                  value = {this.state.link} //to state mówi co jest wpisane
                />: null
                }
              
                  <button className={styles.button}>add new item</button>
                </form>
              </div>
        )}
    
    </AppContext.Consumer>




    )
  }

  
}  


  export default Form;








 