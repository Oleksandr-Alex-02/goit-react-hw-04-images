import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Modal from '../Modal/Modal'

import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css'

class App extends Component {
  state = {
    imageSearch: '',
  }

  hendelOnSubmit = imageSearch => {
    this.setState({ imageSearch })
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendelOnSubmit} />
        <ImageGallery imageSearch={this.state.imageSearch} />
        <ToastContainer />
      </div>
    )
  }
}

export default App;



