
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      word:'Ejemplo'
    }
  }

  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(()=>{
      this.setState({
        word:'Se modifico el estado'
      })
    },3000)
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  renderSubtitle = () => {
    return <h3>Subtitulo desde una función</h3>
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <h1>Hola desde el componente App</h1>
        <p>{this.state.word}</p>
        {this.renderSubtitle()}
        <Saludo saludin='Que onda'/>
        <Despedida bye='Sale chido'/>
      </div>
    );
  }
}

export default App;