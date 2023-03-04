import { Component } from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';


class ImageGalleryItem extends Component{
  state = {
    modal:false
  }

  handleOnClick=()=>{
    this.setState({modal:true})
  }

  keyClose=()=>{
    this.setState({modal:false})
  }

  handleOnClickClose=(e)=>{
    if(e.target === e.currentTarget){
      this.setState({modal:false})
    }
  }





  render() {
    return(
<>
  <li onClick={this.handleOnClick} className="ImageGalleryItem">
    <img src={this.props.webformatURL} alt="" />
  </li>
  {this.state.modal?<Modal keyClose={this.keyClose} onClickOverlay={this.handleOnClickClose} largeImg={this.props.largeImg}/>:""}
</>

    )
  }
}

ImageGalleryItem.propTypes = {
  largeImg: PropTypes.string,
  webformatURL: PropTypes.string,
}

export default ImageGalleryItem
