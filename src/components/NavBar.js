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
  const handleprimary=()=>{
    document.body.style.backgroundColor='#0D6EFD';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handlesecondary=()=>{
    document.body.style.backgroundColor='#6C757D';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handlesuccess=()=>{
    document.body.style.backgroundColor='#198754';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handledanger=()=>{
    document.body.style.backgroundColor='#DC3545';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handlewarning=()=>{
    document.body.style.backgroundColor='#FFC107';
    document.getElementsByClassName('heading')[0].style.color='black';
    document.getElementsByClassName('heading')[1].style.color='black';
    document.getElementById('button1').style.backgroundColor='primary';
    document.getElementById('button2').style.backgroundColor='primary';
    document.getElementById('button3').style.backgroundColor='primary';
    document.getElementById('button4').style.backgroundColor='primary';
    document.getElementById('button5').style.backgroundColor='primary';
  }
  const handlepurple=()=>{
    document.body.style.backgroundColor='#800080';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='primary';
    document.getElementById('button2').style.backgroundColor='primary';
    document.getElementById('button3').style.backgroundColor='primary';
    document.getElementById('button4').style.backgroundColor='primary';
    document.getElementById('button5').style.backgroundColor='primary';
  }
  const handlecyan=()=>{
    document.body.style.backgroundColor='#00FFFF';
    document.getElementsByClassName('heading')[0].style.color='red';
    document.getElementsByClassName('heading')[1].style.color='red';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handlepink=()=>{
    document.body.style.backgroundColor='#FFC0CB';
    document.getElementsByClassName('heading')[0].style.color='blue';
    document.getElementsByClassName('heading')[1].style.color='blue';
    document.getElementById('button1').style.backgroundColor='orange';
    document.getElementById('button2').style.backgroundColor='orange';
    document.getElementById('button3').style.backgroundColor='orange';
    document.getElementById('button4').style.backgroundColor='orange';
    document.getElementById('button5').style.backgroundColor='orange';
  }
  const handlebrown=()=>{
    document.body.style.backgroundColor='#A52A2A';
    document.getElementsByClassName('heading')[0].style.color='white';
    document.getElementsByClassName('heading')[1].style.color='white';
    document.getElementById('button1').style.backgroundColor='primary';
    document.getElementById('button2').style.backgroundColor='primary';
    document.getElementById('button3').style.backgroundColor='primary';
    document.getElementById('button4').style.backgroundColor='primary';
    document.getElementById('button5').style.backgroundColor='primary';
  }

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
    <nav className={`nv navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode=="dark"?"dark":"info"} text-${props.mode==="light"?"dark":"light"}`}  style={{display:'flex',flexWrap:'no-wrap',width:'max'}}>
          <Link to="/" style={{textDecoration:'none'}}><h2 className={`px-3 text-${props.mode==="light"?"dark":"light"}`}>{props.title}</h2></Link>
                <div className="container-fluid " style={{display:'block',flexWrap:'wrap'}}>
                    <div id="navbarSupportedContent">
                      <Link className="nav-link active" aria-current="page" to="/home" style={{fontWeight:'bolder',display:'flex',flexWrap:'wrap'}}>Home</Link>
                      <Link className="nav-link active mx-5" aria-current="page" to="/about" style={{fontWeight:'bolder'}}>{props.about}</Link>
                      <Link className="nav-link active" aria-current="page" to="/contact" style={{fontWeight:'bolder'}}>{props.contact}</Link>
                      
                      {/* color palette starts */}
                        <div style={{display:'flex',flexWrap:'wrap',height:'max-content'}}>
                              <h6 className=" mx-5 pt-2 " style={{fontWeight:'bolder'}}>Color mode palette:</h6>
                              
                              <div className='bg-style' tabIndex={"1"}>

                                    <div className="bg-primary blue-bg rounded mx-2" onClick={handleprimary} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                              </div>
                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="bg-secondary grey-bg rounded mx-2" onClick={handlesecondary} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                              </div>

                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="bg-success green-bg rounded mx-2" onClick={handlesuccess} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                              </div>

                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="bg-danger red-bg rounded mx-2" onClick={handledanger} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                              </div>
                              
                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="bg-warning bg-yellow rounded mx-2" onClick={handlewarning} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

                              </div>
                              
                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="rounded purple-bg mx-2" onClick={handlepurple} style={{height:'30px',width:'30px',backgroundColor:'purple',cursor:'pointer'}}></div>

                              </div>
                              
                              <div className='bg-style' tabIndex={"1"}>
                              
                                  <div className="rounded cyan-bg mx-2" onClick={handlecyan} style={{height:'30px',width:'30px',backgroundColor:'cyan',cursor:'pointer'}}></div>

                              </div>
                              
                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="rounded pink-bg mx-2" onClick={handlepink} style={{height:'30px',width:'30px',backgroundColor:'pink',cursor:'pointer'}}></div>

                              </div>
                              
                              <div className='bg-style' tabIndex={"1"}>

                                  <div className="rounded brown-bg mx-2" onClick={handlebrown} style={{height:'30px',width:'30px',backgroundColor:'brown',cursor:'pointer'}}></div>

                              </div>
                              
                          
                        </div>



                        
                    </div>
                </div>
                {/* if the props.mode==light then change to dark and text to light and vice versa */}
                <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                    {/* onlick on the switch calls the togglemode function which then changes the mode if it is light then to dark and vice versa */}
                    <input className="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{cursor:'pointer'}}></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode} mode enabled</label>
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