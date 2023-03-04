import { Component } from 'react';
import css from './Button.module.css'

class Button extends Component {


  render() {
    return(
      <button onClick={()=>this.props.handleOnClick()} className={css.Button} type="button">Load more</button>
    )
  }
}

export default Button
