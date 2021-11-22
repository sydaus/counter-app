import React, { Component } from 'react';

// stateless functional component and destructing arguments
const NavBar = ({totalCounters}) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar 
                    <span className="badge rounded-pill bg-secondary" > 
                    {totalCounters} 
                    </span> 
                </a>
            </div>
        </nav>
    );
};
export default NavBar;



// stateless functional component

// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar 
//                     <span className="badge rounded-pill bg-secondary" > 
//                     {props.totalCounters} 
//                     </span> 
//                 </a>
//             </div>
//         </nav>
//     );
// };
// export default NavBar;



// class in a component

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar <span className="badge rounded-pill bg-secondary" > {this.props.totalCounters} </span> </a>
//                 </div>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;