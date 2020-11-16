import React, { Component } from 'react';
import ItemLista from './ItemLista'
import Cabecalho from '../Cabecalho/index'

import '../styles/styles.scss'


class ToDoList extends Component {

    constructor(props) {

        super(props);

        this.state = {
            tarefa: '',
            listaTarefas: []

        }

        this.addTarefa = this.addTarefa.bind(this);

        this.removeTarefa = this.removeTarefa.bind(this)
    }

    addTarefa(event) {

        console.log(this._tarefaInput)
        let state = this.state;

        if (this._tarefaInput.value !== '') {
            let novaTarefa = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            this.setState({ listaTarefas: [...state.listaTarefas, novaTarefa] });
            this.setState({ tarefa: '' });

        }

        event.preventDefault();

    }

    removeTarefa(key) {
        let filtro = this.state.listaTarefas.filter((item) => {
            return (item.key !== key);
        });

        this.setState({ listaTarefas: filtro });

        // let state = this.state;

        // console.log(state.listaTarefas);


    }

    render() {

        return (
            <div className="container">
                <div className="container__row">
                    <Cabecalho />

                    <form onSubmit={this.addTarefa}>
                        
                        <input type="text" placeholder="Nova Tarefa" name="tarefa" value={this.state.tarefa} onChange={((event) => { this.setState({ tarefa: event.target.value }) })}
                            ref={((event) => { this._tarefaInput = event })}
                        />

                        <button type="submit">Adcionar Tarefa</button>
                    </form>

                    <ItemLista listaItens={this.state.listaTarefas} remove={this.removeTarefa} />
                </div>
            </div>
        )

    }

}

export default ToDoList;