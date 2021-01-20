import React, { Component } from 'react';
import firebase from '../../firebase'
import { Title, Input } from './style'
import './home.scss';

class Home extends Component {

    state = {
        posts: [],
        restaurantes: [],
        userNome: localStorage.nome
    }

    componentDidMount() {

        firebase.app.ref('users').once('value', (snapshot) => {

            let state = this.state;

            state.posts = [];

            snapshot.forEach((post) => {
                state.posts.push({

                    key: post.key,
                    titulo: post.val().titulo,
                    image: post.val().imagem,
                    descricao: post.val().descricao,
                    autor: post.val().autor
                });

            })

            state.posts.reverse();

            this.setState(state);

        })


        fetch("http://localhost:1337/restaurants/")
            .then(response => response.json())

            .then(data => data.forEach((restaurant) => {

                this.state.restaurantes.push({
                    nome: restaurant.name,
                    descricao: restaurant.description,
                    categoria: restaurant.categories

                })
            }))
    }


    render() {
        return (
            <section className="flex">
                {/* {this.state.posts.map((post) => {
                    return (
                        <article key={post.key} className="flex">
                            <header>
                                <div className="flex">
                                    <strong>{post.titulo}</strong>
                                    <span>{post.autor}</span>
                                </div>
                            </header>
                            <img src={post.image} alt="Capa do post" />
                            <p>{post.descricao}</p>
                        </article>
                    )
                })} */}
                <Input></Input>
                {
                    this.state.restaurantes.map((restaurante) => {
                        return (

                            <div key={restaurante.nome}>
                                < div className="content">
                                    <Title>{restaurante.nome}</Title>
                                    <h2>{restaurante.descricao}</h2>
                                    {restaurante.categoria.map((cat) => {
                                        return (
                                            <span key={cat.id}>
                                                {cat.name}
                                            </span>
                                        )
                                    })}
                                    {this.state.userNome ?
                                        <p>{this.state.userNome}</p>
                                        :
                                        <p>No user logged</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </section >
        )
    }
}

export default Home;