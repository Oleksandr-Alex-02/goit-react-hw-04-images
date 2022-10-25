import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import css from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <ImageGallery />
        {/* <ImageGalleryItem /> */}
      </div>
    )
  }
}

export default App;