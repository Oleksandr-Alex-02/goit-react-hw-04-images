import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal'
import css from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
        <Modal />
      </div>
    )
  }
}

export default App;