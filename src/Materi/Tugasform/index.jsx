import React from 'react';
import Input from './Input';
import ShowError from './Error';

export default class Tugasform extends React.Component {
    state = {
        nama: '',
        email: '',
        password: '',
        konfirmasi: '',
        error: []
    }
    tangkapSubmit = event => {
        event.preventDefault();
        const {nama, email, password, konfirmasi} = this.state;

        let pesan = [];

        if(nama.length === 0){
           pesan = [...pesan, 'Nama tidak boleh kosong'];
        }

        if(email.length === 0){
            pesan = [...pesan, 'Email tidak boleh kosong'];
        }

        if(password.length === 0){
            pesan = [...pesan, 'Password tidak boleh kosong'];
        }

        if(konfirmasi.length === 0){
            pesan = [...pesan, 'Konfirmasi tidak boleh kosong'];
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())) {
            pesan = [...pesan, 'Email tidak valid'];
        }

        if(nama.length < 5) {
            pesan = [...pesan, 'Nama minimal harus lima huruf'];
        }

        if(password.length < 6) {
            pesan = [...pesan, 'Password terlalu pendek'];
        }

        if(password.length !== konfirmasi.length) {
            pesan = [...pesan, 'Password harus sama'];
        }

        if(pesan.length > 0){
            this.setState({
                errors: pesan
            });
        } else {
            alert(`
                Selamat bergabung ${this.state.nama}

                nama: ${this.state.nama}
                email: ${this.state.email}
                password: ${this.state.password}
                konfirmasi: ${this.state.konfirmasi}
            `);
            this.setState({
                errors: []
            })
        }

        
       
    }
    render () {
        const style = {
            width: '400px',
            border: '1px solid black',
            margin: '100px auto 0',
            padding: '20px',
            textAlign: 'center'
        }
        return (
            <div style={style}>
                {
                   this.state.errors && <ShowError errors={this.state.errors}/>
                }
                <h2 style={{textDecoration: 'underline'}}>REGISTRASI</h2>
                <form onSubmit={this.tangkapSubmit}>
                    <Input type="text" name="nama" label="Nama" onChange={value => this.setState({nama: value})}/>
                    <Input type="text" name="email" label="Email" onChange={value => this.setState({email:value})}/>
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})}/>
                    <Input type="password" name="konfirmasi" label="Konfirmasi password" onChange={value => this.setState({konfirmasi: value})}/>
                    <br />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}