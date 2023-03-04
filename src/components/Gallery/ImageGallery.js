import { Component } from 'react';
import css from './ImageGallery.module.css'
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends  Component{

  render() {
    console.log(this.props.hits)
    return(
      <ul className={css.ImageGallery}>
        {this.props.hits.map(el => {
        return  <ImageGalleryItem largeImg={el.largeImageURL} key={el.id}  webformatURL={el.webformatURL}/>
        })}
      </ul>
    )
  }
}

export default ImageGallery;
