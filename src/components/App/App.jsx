import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import css from './App.module.css';

class App extends React.Component {
  state = {
    page: 1,
    per_page: 12,
    photo: [],
    photoName: '',
    currentLargeImageURL: '',
    searchTotal: null,
    loading: false,
    error: null,
  };

  handlerFormSubmit = photoName => {
    this.setState({ photoName, page: 1 });
  };

  onOpenModalWithLargeImage = url => {
    this.setState({
      currentLargeImageURL: url,
    });
  };

  onModalClose = () => {
    this.setState({
      currentLargeImageURL: '',
    });
  };

  hendlerMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.photoName;
    const prevPage = prevState.page;
    const { photoName, page, per_page } = this.state;
    const key = 'key=29453019-5a69b6c7b2f01a070c80deb0c'

    if (photoName !== prevName) {
      this.setState({ photo: [] });
    }
    if (prevName !== photoName || prevPage !== page) {
      this.setState({ loading: true });

      // setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${photoName}&page=${page}&${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error());
        })
        .then(photo =>
          this.setState(prevState => ({
            photo: [...prevState.photo, ...photo.hits],
            searchTotal: photo.total,
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
      // }, 2000);
    }
  }

  render() {
    const {
      photoName,
      page,
      loading,
      photo,
      currentLargeImageURL,
      searchTotal,
    } = this.state;
    return (
      <section className={css.app}>
        <Searchbar onSubmit={this.handlerFormSubmit} page={page} />

        {searchTotal === 0 ? (
          <p >No "{photoName}" image was found</p>
        ) : (
          <ImageGallery
            photoName={photo}
            onClick={this.onOpenModalWithLargeImage}
          />
        )}

        {loading && <Loader />}
        {currentLargeImageURL && (
          <Modal closeModal={this.onModalClose} url={currentLargeImageURL} />
        )}
        {!loading && searchTotal > 12 && <Button onClick={this.hendlerMoreClick} />}
        <ToastContainer theme="" autoClose={2500} />
      </section>
    );
  }
}
export default App;