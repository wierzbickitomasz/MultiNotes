import React from 'react' //reactowe komponenty
import AppContext from "../../contex"
import List from "../../components/List/List"


const NotesView = () => (
    //tworzymy konsumera, żeby odebrać kontekst
    <AppContext.Consumer> 
        {(context) => ( //musi być funkcja wyciągająca kontekst z konsumera
            <List items = {context.note} />
//dajemy propsa komponentowi niżej, czyli jakby argument, w tym przypadku tablice itemów do zrenderowania
        )}
    </AppContext.Consumer>
)
export default NotesView

