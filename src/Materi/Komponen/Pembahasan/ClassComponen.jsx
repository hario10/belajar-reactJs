import React from "react";

class ClassComponen extends React.Component {
   state = {
        value: 0
   }
   klikAngka = () =>{
        this.setState({value: this.state.value + 1});
   }
   render() {
        return (
            <div>
                <h2>Perkenalan</h2>
                <p>Nama saya, Hario Soedirman, tinggal di Bukittinggi, sehari-hari megikuti kelas programming di Eduwork, saya menikmatinya, dan saya sangat berbahagia bila ada kakak cantik yang menemani saya belajar, hehe.</p>
                <h3>Hasil nilai saya selama belajar</h3>
                <span>Kerajinan: {' '}</span>
                <button onClick={this.klikAngka}>Nilai</button>
                <span>{' '}=</span>
                <span>{' '}{this.state.value}</span>
               <p></p>
            </div>
            
        )
   }
}


export default ClassComponen;






// constructor (props){
//     super(props)
//         this.state = {
//             value: 0
//         }
//         this.klikAngka = this.klikAngka.bind(this);
//    } 
// import React from "react";
// import PropTypes from "prop-types";

// class ClassComponen extends React.Component {
//     state = {
//         value: 0
//     }
//     handlePlus = () => {
//         this.setState({value: this.state.value + 1});
//     }
//     handleMinus = () => {
//         if(this.state.value > 0){
//             this.setState({value: this.state.value - 1});
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Komponen ini dibuat dengan class component</h1>
//                 <h2>Hello {this.props.nama}</h2>
//                 <button onClick={this.handleMinus}>-</button>
//                 <span>{' '}{this.state.value}{' '}</span>
//                 <button onClick={this.handlePlus}>+</button>
//             </div>
//         )
//     }
// }
// ClassComponen.propTypes = {
//     nama: PropTypes.string.isRequired
// }
// export default ClassComponen;