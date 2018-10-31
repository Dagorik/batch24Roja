import React, {Component} from 'react';

class Despedida extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading:'false',
            despedida:this.props.bye
        }
    }
    
    render(){
        return (
            <div>
                <h2>{this.state.despedida} desde el componenete Despedida</h2>
                <p>El loading del estado esta en: {this.state.loading}</p>
            </div>
        )
    }

}

export default Despedida;