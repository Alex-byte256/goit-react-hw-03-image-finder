import { Component } from 'react';
import css from './Modal.module.css'

class Modal extends Component{
  componentDidMount() {
    window.addEventListener('keydown', e =>{
      if(e.code ==="Escape"){
        console.log('escape')
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

export default Modal;
