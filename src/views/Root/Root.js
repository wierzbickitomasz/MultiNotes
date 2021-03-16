import React from 'react'; //reactowe komponenty
import ReactDOM from 'react-dom'; //paczka do wyrenderowania tego wszystkiego do htmla
//import facebookAccounts from '../../data/facebookAccounts'

import FacebooksView from '../FacebooksView/FacebooksView'
import ArticlesView from '../ArticlesView/ArticlesView'
import NotesView from '../NotesView/NotesView'

import Header from '../../components/Header/Header'
import Modal from "../../components/Modal/Modal"

import AppContext from '../../contex'


import { BrowserRouter, Route, Switch } from "react-router-dom"
/*npm install --save react-router-dom
React Router
To on decyduje co dostaje użytkownik w przeglądarce
nie jest już to tak proste jak użytkownik - serwer*/



class Root extends React.Component { //klasowy komponent, ma własne stany
  state = { //stan pozwala na dynamiczną zmiane zawartosci komponentów

    facebook: [], //zamiast liczby mnogiej
    article: [],
    note: [],

    //items:  [...facebookAccounts], //nasze elementy listy, wkładamy bazowe dane do tablicy i rozstrzeliwujemy je spreadem
    isModalOpen: false,  //czy modal (okienko z formularzem jest otwarte)
    name: "roman"
  }
  addItem  = (e, newItem) => {
    e.preventDefault(); //zapobiegamy standardowemu przeładowaniu strony po kliknieciu w submit
    console.log("a");

   
  this.setState(prevState => ({ //aktualizujemy stan używając wbudowanej funkcji prevState
    [newItem.activeOption]: [...prevState[newItem.activeOption], newItem] 
    //sprytnie
    //newItem.activeOption to będzie facebook
    //prevState[newItem.activeOption] to będzie prevState.facebook, czyli poprzedni stan facebook
    //newItem będzie to AtiveOption i wypełnione pola 
  }))



    this.closeModal()
  }

  openModal  = () => { 
    this.setState({ //aktualizujemy stan używając wbudowanej funkcji setState i prevState
      isModalOpen: true
      })
  }
  closeModal  = () => { 
    this.setState({ //aktualizujemy stan używając wbudowanej funkcji setState i prevState
      isModalOpen: false
      })
  }


  render() { //renderowanie
    //const {isModalOpen} = this.state;

    const contextElement = { //robimy obiekt który wyślemy jako "value" w AppContext.Provider
      ...this.state, //przyda się state
      addItem: this.addItem //przyda się addItem
    }

    return (
      <BrowserRouter> {/*Komponent routera, nawigowanie po aplikacji*/}
        <AppContext.Provider value = {contextElement}> {/*Komponenty wpakowywujemy w AppContext.Provider, wysyłamy im dane w "value*/} 
          <Header openModalFn = {this.openModal}></Header>
          {/*dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje openModalFn*/}
          {/*<h1>Hello World</h1>*/}

          <Switch> {/*dzieki switchowi bedzie renderować tylko jeden komponent*/}
            {/*Jezeli jesteśmy na "/" czyli ścieżce głównej, to wyświetlamy komponent {FacebooksView}*/}
            <Route exact path = "/"component = {FacebooksView} ></Route>

            {/*Jezeli jesteśmy na "/articles" , to wyświetlamy komponent {ArticlesView}*/}
            <Route exact path = "/articles"component = {ArticlesView} ></Route>

            {/*Jezeli jesteśmy na "/notes" , to wyświetlamy komponent {NotesView}*/}
            <Route exact path = "/notes"component = {NotesView} ></Route>

          </Switch>
            {/*renderowanie warunkowe elementu*/}
            { this.state.isModalOpen && <Modal closeModalFn = {this.closeModal}></Modal>} 
            {/*dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje closeModalFn*/}
        </AppContext.Provider>
      </BrowserRouter>




    )
  }

  
}
export default Root;

{/*dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku renderowane elementy*/}
{/*dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku funkcje submitFn*/}



        