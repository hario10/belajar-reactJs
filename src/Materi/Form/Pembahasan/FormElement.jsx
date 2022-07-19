import React from 'react';

export default class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'Yes' : 'No'}
        `);
        this.setState({
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
        })
    }
    render () {
        return (
            <div style={{padding: '20px'}}>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Nama : <input type="text" name="nama" onChange={e => this.setState({nama: e.target.value})} value={this.props.nama}/>
                </label> <br />
                <label>
                    Jurusan: <select name="jurusan" onChange={e => this.setState({jurusan: e.target.value})} value={this.state.jurusan}>
                        <option value="">Pilih Jurusan</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                    </select>
                </label> <br />
                <label >
                    Jenis Kelamin:
                    <input type="radio" value="Laki Laki" name="gender" onChange={e => this.setState({gender: e.target.value})} defaultChecked={this.state.gender}/> Laki-Laki
                    <input type="radio" value="Perempuan" name="gender" onChange={e => this.setState({gender: e.target.value})} defaultChecked={this.state.gender}/> Perempuan
                </label> <br />
                <label>
                    Alamat: <br /><textarea  cols="30" rows="10" name="alamat" onChange={e => this.setState({alamat: e.target.value})} value={this.state.alamat}/>
                </label> <br />
                <label>
                    Member: <input type="checkbox" checked={this.state.member} name="member" onChange={e => this.setState({member: e.target.checked})} value={this.state.member}/>
                </label> <br /><br />
                <button type='submit'>Submit</button>
            </form>
            </div>
        )
    }
}