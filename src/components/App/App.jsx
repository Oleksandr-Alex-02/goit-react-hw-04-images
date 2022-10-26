import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Modal from '../Modal/Modal'
import css from './App.module.css'

// const axios = require('axios').default;

class App extends Component {
  state = {
    // photo: null,
    imageSearch: '',
    // page: 1,
    // error: null,
    // loader: false,
  }

  hendelOnSubmit = imageSearch => {
    this.setState({ imageSearch })
    console.log(imageSearch)
  }

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.hendelOnSubmit} />
        {this.state.loader && (<h1>загрузкa...</h1>)}
        {this.state.photo && (<ImageGallery />)}
        <ToastContainer />
      </div>
    )
  }
}

export default App;



//   async componentDidMount() {
//   const key = 'key=29453019-5a69b6c7b2f01a070c80deb0c'
//   const page = 'this.state.page'

//   this.setState({ loader: true })
//   await fetch(`https://pixabay.com/api/?q=cat&${page}&${key}&image_type=photo&orientation=horizontal&per_page=12`)
//     .then(res => res.json())
//     .then(photo => this.setState({ photo }))
//     .catch(error => this.setState({ error }))
//     .finally(this.setState({ loader: false }));
// }