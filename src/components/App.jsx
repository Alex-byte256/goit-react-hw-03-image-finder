import Searchbar from './Gallery/Searchbar'
import {Component} from 'react';
import ImageGallery from './Gallery/ImageGallery';
import Button from './Gallery/Button';
import Loader from './Gallery/Loader';

export class App extends Component{

  state ={
    hits: [],
    page:1,
    name: '',
    loading: false
  }

  handleOnClick =()=>{
    this.setState({page: this.state.page + 1});
    this.handleSubmit(this.state.name);
  }

  handleSubmit =(name) => {
    if(name !== this.state.name){
      this.setState({hits:[],page:1})
    }
    this.setState({name,loading:true})
    fetch(`https://pixabay.com/api/?q=${name}&page=${this.state.page}&key=32190831-932b1a3f6204f940916e3fe08&image_type=photo&orientation=horizontal&per_page=12`)
      .then(el => el.json()).then(el => {
        if(el.hits){
          this.setState({hits: [...this.state.hits,...el.hits],loading:false})
        }
      })
  }
render() {
  return (
    <div className="App">
      <Searchbar onSubmit={this.handleSubmit}/>
      <ImageGallery hits={this.state.hits}/>
      {this.state.hits.length?<Button handleOnClick={this.handleOnClick}/>:""}
      {this.state.loading?<Loader/>:''}
    </div>
  );
}
};
