import { useState } from "react"

const FunctionalComponen = () => {
    const [value, setValue] = useState(0);

    const klikAngka = () =>{
        setValue(value + 1);
    } 
    return (
        <div>
            <span>Daya tangkap: {' '}</span>
           
            <button onClick={klikAngka}>Nilai</button>
            <span>{' '} = </span>
            <span>{' '}{value}</span>
        </div>
    )
}

export default FunctionalComponen;






// import { useState } from "react";

// const FunctionalComponen = ({nama}) => {
//     const [value, setValue] = useState(0);

//     const hundlePlus = () => {
//         setValue(value + 1);
//     }
//     const hundleMinus = () => {
//         if(value > 0){
//             setValue(value - 1);
//         }
      
//     }
//     return (
//         <div>
//             <h1>Membuat komponen dengan functional componen</h1>
//             <h2>Hello {nama}, selamat belajar</h2>
//             <button onClick = {hundleMinus}>-</button>
//             <span>{' '}{value}{' '}</span>
//             <button onClick={hundlePlus}>+</button>
//         </div>
//     )
// }

// FunctionalComponen.defaultProps = {
//     nama: 'User'
// } 

// export default FunctionalComponen;