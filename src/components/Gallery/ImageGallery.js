import { Component } from 'react';
import css from './ImageGallery.module.css'
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends  Component{

  render() {
    return(
      <ul className={css.ImageGallery}>
        {this.props.hits.map(el => {
        return  <ImageGalleryItem largeImg={el.largeImageURL} key={el.id}  webformatURL={el.webformatURL}/>
        })}
      </ul>
    )
  }
}

ImageGallery.propTypes = {
  onSubmit: PropTypes.arrayOf(PropTypes.shape)
}

export default ImageGallery;
