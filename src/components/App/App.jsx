import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import css from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
      </div>
    )
  }
}

export default App;