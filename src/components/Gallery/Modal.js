import { Component } from 'react';
import css from './Modal.module.css'
import PropTypes from 'prop-types';


class Modal extends Component{
  componentDidMount() {
    window.addEventListener('keydown', e =>{
      if(e.code ==="Escape"){
        this.props.keyClose();
      }
    })
  }

  render() {
    return(
      <div  onClick={this.props.onClickOverlay} className={css.overlay}>
        <div className={css.modal}>
          <img src={this.props.largeImg} alt="" />
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  keyClose: PropTypes.func,
  onClickOverlay: PropTypes.func,
  largeImg: PropTypes.string
}

export default Modal;
