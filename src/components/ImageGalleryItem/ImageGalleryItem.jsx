import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css'

class ImageGalleryItem extends Component {
    render() {
        return (
            <li className={css.ImageGalleryItem} >
                <img src="" alt="" />
            </li>
        )
    }
}

export default ImageGalleryItem;