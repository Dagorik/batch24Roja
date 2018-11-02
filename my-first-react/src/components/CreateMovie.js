import React, {Component} from 'react'
import axios from 'axios';
class CreateMovie extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo:'',
            director:'',
            descripcion:'',
            portada:'',
            genero:''
        }
    }

    onChangeInput = (e) => {
        let {id,value} = e.target
        this.setState({
            [id]:value
        })
    }
    
    onSubmitHandle = (e) => {
        e.preventDefault()
        console.log(this.state);
        const json = {
            titulo:this.state.titulo,
            director:this.state.director,
            descripcion:this.state.descripcion,
            portada:[this.state.portada],
            genero:this.state.genero
        }
        axios.post('https://rojacinta24.herokuapp.com/api/v1/pelicula',json)
        .then(() => {
            alert('Tu peli se guardo exitosamente!! <3')
        }).catch(err => {
            console.log(err)
            alert('Tuvimos un error guardando tu pelicula!! :(')
        })
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandle}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Titulo</label>
                    <input type="text" className="form-control" 
                    id="titulo" placeholder="Enter Titulo"
                    onChange={this.onChangeInput}
                    value={this.state.titulo}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Director</label>
                    <input type="text" className="form-control" id="director" 
                    placeholder="Enter Director"
                    onChange={this.onChangeInput}
                    value={this.state.director}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Portda url</label>
                    <input type="text" className="form-control" id="portada" 
                    placeholder="Enter Portada"
                    onChange={this.onChangeInput}
                    value={this.state.portada}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Descripcion</label>
                    <input type="text" className="form-control" id="descripcion" 
                    placeholder="Enter Descripcion"
                    onChange={this.onChangeInput}
                    value={this.state.descripcion}
                    />
                </div>
                <div className="form-group">
                <label for="exampleFormControlSelect1">Genero select</label>
                    <select className="form-control" id="genero"
                    onChange={this.onChangeInput}
                    value={this.state.genero}
                    >
                    <option>comedia</option>
                    <option>drama</option>
                    <option>terror</option>
                    </select>
                </div>
                <button type="submit" className="btn-success">Guardar peli</button>
            </form>
        )
    }
}

export default CreateMovie;