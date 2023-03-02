import {Component} from 'react';
import "./Searchbar.css"


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
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
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


export default Searchbar;
