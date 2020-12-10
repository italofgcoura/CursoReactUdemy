import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './new.scss';

class New extends Component {

    constructor(props) {

        super(props);

        this.state = {
            titulo: '',
            descricao: '',
            imagem: null,
            url: '',
            alert: '',
            progress: 0
        }

        this.cadastrar = this.cadastrar.bind(this);

        this.handleFile = this.handleFile.bind(this);

        this.handleUpload = this.handleUpload.bind(this);

    }

    componentDidMount() {

        if (!firebase.getCurrent()) {
            this.props.history.replace('/');
            return null;
        }

    }

    cadastrar = async (e) => {

        e.preventDefault();

        if (this.state.titulo !== '' && this.state.descricao !== '' && this.state.imagem !== '' && this.state.url !== '') {

            let posts = firebase.app.ref('posts');

            let chave = posts.push().key;

            await posts.child(chave).set({
                titulo: this.state.titulo,
                imagem: this.state.url,
                descricao: this.state.descricao,
                autor: localStorage.nome
            })

            this.props.history.push('/dashboard')

        }
        else {
            this.setState({ alert: 'Preencha todos os campos.' })
        }
    }

    handleFile = async (e) => {

        if (e.target.files[0]) {

            const image = e.target.files[0];

            if (image.type === "image/png" || image.type === "image/jpeg") {
                await this.setState({ imagem: image });
                this.handleUpload();
            }
            else {
                alert("Imagem png ou jpeg");

                this.setState({ imagem: null });

                return null;
            }
        }

    }

    handleUpload = async () => {

        const { imagem } = this.state;
        const currentUid = firebase.getCurrentUid();
        console.log(currentUid)
        const uploadTask = firebase.storage.ref(`images/${currentUid}/${imagem.name}`).put(imagem);

        await uploadTask.on('state_changed', (snapshot) => {
            //progress
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

            this.setState({ progress });

        },
            (error) => {
                console.log(error)
            }, () => {
                //sucesso
                firebase.storage.ref(`images/${currentUid}`)
                    .child(imagem.name).getDownloadURL().then(url => {
                        this.setState({ url })
                    })
            })
    }

    render() {

        return (
            <div className="newpost">
                <header>
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <span>{this.state.alert}</span>
                <form onSubmit={this.cadastrar}>

                    <label>Imagem:</label>
                    <input type="file" onChange={this.handleFile}/>

                    {this.state.url !== null ?
                        <img src={this.state.url} width="250" height="250" alt="Capa do post" />
                        :
                        <progress value={this.state.progress} max="100" />
                    }

                    <label>Título:</label>
                    <input type="text" placeholder="Título do post" value={this.state.titulo} autoFocus onChange={(e) => this.setState({ titulo: e.target.value })}></input>

                    <label>Descrição do post:</label>
                    <textarea type="text" placeholder="Descrição do post" value={this.state.descricao} onChange={(e) => this.setState({ descricao: e.target.value })}></textarea>

                    <button type="submit">Cadastrar Post</button>
                </form>
            </div>
        )
    }

}

export default withRouter(New);