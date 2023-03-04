import { Component } from 'react';
import css from './Button.module.css'
import PropTypes from 'prop-types';

class Button extends Component {


  render() {
    return(
      <button onClick={()=>this.props.handleOnClick()} className={css.Button} type="button">Load more</button>
    )
  }
}

Button.propTypes = {
  handleOnClick: PropTypes.func
}

export default Button
