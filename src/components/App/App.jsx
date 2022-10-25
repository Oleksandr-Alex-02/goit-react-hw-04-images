import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import Modal from '../Modal/Modal'
import css from './App.module.css'

// const axios = require('axios').default;

class App extends Component {

  // async componentDidMount() {
  //   await fetch('https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(console.log)
  // }


  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        {/* <ImageGallery /> */}
        {/* <Modal /> */}
      </div>
    )
  }
}

export default App;