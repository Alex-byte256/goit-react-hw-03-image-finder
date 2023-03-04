import {Component} from 'react';
import css from "./Searchbar.module.css"
import PropTypes from 'prop-types';


class Searchbar extends Component{
  state = {
    imgName: '',
  }

  handleOnChange=(e)=>{
    this.setState({imgName: e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    this.props.onSubmit(this.state.imgName);

    this.setState({imgName:''})
  }

  render() {
    return(
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imgName}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar;
