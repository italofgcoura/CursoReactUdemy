import React, { Component } from 'react';
import firebase from '../../firebase'

import './home.scss';

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        firebase.app.ref('posts').once('value', (snapshot) => {
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
    }

    render() {
        return (
            <section className="flex">
                {this.state.posts.map((post) => {
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
                })}
            </section>
        )
    }
}

export default Home;