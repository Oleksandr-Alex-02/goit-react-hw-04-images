import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import css from './App.module.css';
import { useEffect, useState } from 'react';


export default function App() {
  const [page, setPage] = useState(1);
  const [per_page, setPer_page] = useState(12);
  const [photo, setPhoto] = useState([]);
  const [photoName, setPhotoName] = useState('');
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [searchTotal, setSarchTotal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlerFormSubmit = () => {
    if (!photoName) {
      setPhotoName({ photoName, page: 1 });
      setPhoto({ photo: [] })
      // toast.success(`We found it for you ${photoName}`)
      return;
    }
    else {
      toast.info(`Sorry image ${photoName} not found`, {
        theme: "colored",
      });
    }

  };

  const onOpenModalWithLargeImage = url => {
    setCurrentLargeImageURL({
      currentLargeImageURL: url,
    });
  };

  const onModalClose = () => {
    setCurrentLargeImageURL({
      currentLargeImageURL: '',
    });
  };

  const hendlerMoreClick = () => {
    setPage(prevState => ({ page: prevState.page + 1 }));
  };

  useEffect(() => {
    const key = 'key=29453019-5a69b6c7b2f01a070c80deb0c'

    // if (!photoName) {
    //   setPhoto(photo)
    // };
    if (!photoName || !page) {
      setLoading(true)
    };

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
        setPhoto(prevState => ({
          photo: [...prevState.photo, ...photo.hits],
          searchTotal: photo.total,
        }))
      )
      .catch(error => setError(error))
      .finally(setLoading(false))

  }, [page, per_page, photo, photoName]);

  return (
    <section className={css.app}>
      <Searchbar onSubmit={handlerFormSubmit} page={page} />

      {!photo && <ImageGallery
        photoName={photo}
        onClick={onOpenModalWithLargeImage}
      />
      }

      {currentLargeImageURL && (
        < Modal closeModal={onModalClose} url={currentLargeImageURL} />
      )}
      {loading && <Loader />}
      {!loading && searchTotal > 12 && <Button onClick={hendlerMoreClick} />}
      <ToastContainer autoClose={2500} />
    </section>
  );
}


// class App extends React.Component {

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevState.photoName;
//     const prevPage = prevState.page;
//     const { photoName, page, per_page } = this.state;
    // const key = 'key=29453019-5a69b6c7b2f01a070c80deb0c'

    // if (photoName !== prevName) {
    //   this.setState({ photo: [] });
    // }
    // if (prevName !== photoName || prevPage !== page) {
    //   this.setState({ loading: true });}

//       // setTimeout(() => {
      // fetch(
      //   `https://pixabay.com/api/?q=${photoName}&page=${page}&${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      // )
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json();
      //     }
      //     return Promise.reject(new Error());
      //   })
      //   .then(photo =>
      //     this.setState(prevState => ({
      //       photo: [...prevState.photo, ...photo.hits],
      //       searchTotal: photo.total,
      //     }))
      //   )
      //   .catch(error => this.setState({ error }))
      //   .finally(this.setState({ loading: false }));
//       // }, 2000);
//     }
//   }

