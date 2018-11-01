
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
import Navbar from './components/Navbar';
import Card from './components/Card';
import axios from 'axios';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      word:'Ejemplo',
      authores:[],
      list:[
        {id:1,title:'Ejemplo 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius lacinia sagittis. Nam quis lectus leo. In hac habitasse platea.'},
        {id:2,title:'Ejemplo 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus magna nec aliquet placerat. Donec pellentesque purus ac blandit imperdiet.'},
        {id:3,title:'Ejemplo 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ultricies metus. Praesent ac varius augue, quis ullamcorper velit. In.'}
      ]
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
      .then(response => {
        this.setState({
          authores:response.data
        })
      })
      .catch(err => console.log(err))
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  renderSubtitle = () => {
    return <h3>Subtitulo desde una función</h3>
  }

  renderCards = () => {
    if (this.state.authores.length === 0){
      return <h1>Cargando autores...</h1>
    }else{
      return this.state.authores.map((element) => <Card name={element.name} bio={element.biography}/>);
    }
  }

  render() {
    return (
      <div className="App">
      <Navbar/>
      <div className="p-5 row">
        {this.renderCards()}
      </div>
      </div>
    );
  }
}

export default App;