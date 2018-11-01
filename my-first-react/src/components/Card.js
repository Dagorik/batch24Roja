import React,{Component} from 'react';

class Card extends Component{

    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://picsum.photos/420/320/?random" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.bio}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default Card;