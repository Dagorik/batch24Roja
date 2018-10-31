import React, {Component} from 'react';

class Saludo extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <h2>{this.props.saludin} desde el componente Saludo</h2>
        )
    }
}

export default Saludo;