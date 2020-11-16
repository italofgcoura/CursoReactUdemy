import React, { Component } from 'react';
import '../styles/styles.scss'
class ItemLista extends Component {

    render() {
        return (
            <div className="container-list">
                <ul>

                    {this.props.listaItens.map((tarefa) => {
                        return (

                            <li onClick={() => this.props.remove(tarefa.key)} key={tarefa.key}>
                                {tarefa.text}
                            </li>

                        )
                    })

                    }

                </ul>

            </div >
        )
    }
}

export default ItemLista;