import React from 'react'
import './demo.css';
import { PropTypes } from 'prop-types'
import { useState } from 'react'
import {Link} from 'react-router-dom';
// import ContactME from './ContactMe';
// import Home from './Home';
// import About from './About';

export const NavBar = (props) => {
  const [myStyle,setMystyle]=useState({
    color:'black',
    backgroundColor:'white'
  })

  // const [btnText,setbtntext] = useState("Enable Dark Mode");

  // const toggleMode=()=>{
  //   if(myStyle.color=='black'){
  //     setMystyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setbtntext("Enable Day Mode");
  //   }
  //   else{
  //     setMystyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setbtntext("Enable Dark Mode");
  //   }
  // }
  return (
    // if props.mode===light then textcolor=dark else textcolor light
    // <Router>
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode=="dark"?"dark":"info"} text-${props.mode==="light"?"dark":"light"}`}>
    //       <h2 className={`px-3 text-${props.mode==="light"?"dark":"light"}`}>{props.title}</h2>
    //             <div className="container-fluid">
    //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <a className="nav-link active" aria-current="page"><Link to="/" style={{textDecoration:'none'}}>Home</Link></a>
    //                 <a className="nav-link active mx-5" aria-current="page"><Link to="/about "  style={{textDecoration:'none'}}>{props.about}</Link></a>
    //                 <a className="nav-link active" aria-current="page"><Link to="/contact us" style={{textDecoration:'none'}}>{props.contact}</Link></a>
    //                 </div>
    //             </div>
    //             {/* if the props.mode==light then change to dark and text to light and vice versa */}
    //             <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
    //                 {/* onlick on the switch calls the togglemode function which then changes the mode if it is light then to dark and vice versa */}
    //                 <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
    //                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} mode enabled successfully!</label>
    //             </div>
    // </nav>
    // <Router>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode=="dark"?"dark":"info"} text-${props.mode==="light"?"dark":"light"}`}>
          <Link to="/" style={{textDecoration:'none'}}><h2 className={`px-3 text-${props.mode==="light"?"dark":"light"}`}>{props.title}</h2></Link>
                <div className="container-fluid">
                    <div id="navbarSupportedContent">
                    <Link className="nav-link active" aria-current="page" to="/home" style={{fontWeight:'bolder'}}>Home</Link>
                    <Link className="nav-link active mx-5" aria-current="page" to="/about" style={{fontWeight:'bolder'}}>{props.about}</Link>
                    <Link className="nav-link active" aria-current="page" to="/contact" style={{fontWeight:'bolder'}}>{props.contact}</Link>
                    </div>
                </div>
                {/* if the props.mode==light then change to dark and text to light and vice versa */}
                <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                    {/* onlick on the switch calls the togglemode function which then changes the mode if it is light then to dark and vice versa */}
                    <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} mode enabled successfully!</label>
                </div>
    </nav>
//     <Routes>
//           <Route exact path='/' element={<Home/>}></Route>
//           <Route exact path='/about' element={<About/>}></Route>
//           <Route exact path='/contact us' element={<ContactME/>}></Route>
//     </Routes>
// </Router>
  )
}

NavBar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
NavBar.defaultProps={
    title:"Heaven",
    about:"Hell"
}