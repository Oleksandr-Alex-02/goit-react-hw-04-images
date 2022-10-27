import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photoName, onClick }) => (
    <ul className={css.imageGallery}>
        {photoName.map(photo => (
            <ImageGalleryItem
                key={photo.id}
                photo={photo}
                onClick={onClick}
            />
        ))}
    </ul>
);
ImageGallery.propTypes = {
    photoName: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;