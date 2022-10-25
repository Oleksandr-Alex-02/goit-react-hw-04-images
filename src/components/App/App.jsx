import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
      </div>
    )
  }
}

export default App;