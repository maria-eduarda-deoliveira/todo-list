import React, { Component } from "react";
import "./App.css";

class Todo extends Component {
  state = {
    tarefa: "",
    lista: []
  };

  remove = (id) => {
    this.setState({
      lista: this.state.lista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  add = (event) => {
    if (this.state.tarefa.length > 0) {
      this.setState({
        lista: this.state.lista.concat({
          tarefa: this.state.tarefa,
          id: Date.now()
        }),
        tarefa: ""
      });
    }
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.add} className="corpo">
        <h1 className="titulo">Lista de Tarefas</h1>
        <input value={this.state.tarefa} onChange={this.handleChange} placeholder="Escreva aqui..." className="colocar"/>
        <button onClick={this.add} className="botao1">Adicionar</button>
        <ol>
          {this.state.lista.map((item) => (
            <li className="listinha">
              {item.tarefa}{" "}
              <button onClick={() => {this.remove(item.id);}} className="botao2">Apagar</button>
            </li>
          ))}
        </ol>
      </form>
    );
  }
}
export default Todo;