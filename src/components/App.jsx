import Searchbar from './Gallery/Searchbar'
import {Component} from 'react';

export class App extends Component{

  handleSubmit =(name) => {
    console.log(name)

    fetch("https://pixabay.com/api/?q=cat&page=1&key=32190831-932b1a3f6204f940916e3fe08&image_type=photo&orientation=horizontal&per_page=12")
      .then(el => el.json()).then(console.log)
  }
render() {
  return (
    <div className="App">
      <Searchbar onSubmit={this.handleSubmit}/>
    </div>
  );
}
};
