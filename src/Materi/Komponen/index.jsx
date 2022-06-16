import React from "react";
import ClassComponen from "./Pembahasan/ClassComponen";
import FunctionalComponen from "./Pembahasan/FunctionalComponen";

export default class Komponen extends React.Component{
    render() {
        return (
            <div>
                <ClassComponen />
                <FunctionalComponen />
            </div>
        )
    }
}





// import React from "react";
// import ClassComponen from "./Pembahasan/ClassComponen";
// import FunctionalComponen from "./Pembahasan/FunctionalComponen";

// export default class Komponen extends React.Component {

//     render() {
//         return (
//             <div>
//                 <ClassComponen nama="Syilvia Aydina"/>
//                 <FunctionalComponen />
//             </div>
//         )
//     }
// }