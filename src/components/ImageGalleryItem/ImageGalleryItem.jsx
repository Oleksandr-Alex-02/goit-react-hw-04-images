// import React, { Component } from 'react'
// import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ photo }) => (

    <div>
        {photo.map(phot => (
            < li >
                console.log(photo)
                <img src={phot.webformatURL} alt="" />
            </li>
        ))}
    </div >
);

export default ImageGalleryItem;