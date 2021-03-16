import React from 'react' //reactowe komponenty
import ReactDOM from 'react-dom' //paczka do wyrenderowania tego wszystkiego do htmla
import Root from './views/Root/Root'
import './views/Root/index.css'

ReactDOM.render(
  //element renderowany ///tagi htmlowe w reacie są tak naprawde jsx, czyli nakładką
  <Root/>, //tak się przyjęło, że nadrzędny element to App
  document.getElementById('root') //cel, czyli ten nasz div root
)




