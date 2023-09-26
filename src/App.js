import './App.css';
// importing router
import { HashRouter as Router,Routes,Route} from 'react-router-dom';
import Alert from './components/Alert';
import { NavBar } from './components/NavBar';
import {TextForm} from './components/TextForm';
import { useState } from 'react';
import ContactME from './components/ContactMe';
import Home from './components/Home';
import About from './components/About';

function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState({});

  const toggleMode=()=>{
    if(mode==='light'){
      setmode("dark");
      // we can also change the main body color
      document.body.style.backgroundColor='black';
      document.title="TextUtils | Dark Mode";
      document.getElementsByClassName('hello')[0].style.border='1px solid white';
      document.getElementsByClassName('hello')[1].style.border='1px solid white';
      document.getElementsByClassName('hello')[2].style.border='1px solid white';
      showAlert(" Dark mode has been enabled successfully !!","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor='white';
      document.getElementById('borderme').style.border='2px solid black';
      document.title="TextUtils | Light Mode";
      showAlert(" Light mode has been enabled successfully !!","primary");
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    // after 1sec remove every alerts
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  return (
    <>
    <Router>
        {/* here we are sending the state mode as light as props to the navbar and also the togglemode function so as it can be accessible in the button and can be passed into onclick function as props.togglemode similary we can also use our mode as props.mode as per our needs */}
        <NavBar title="TextUtils"  about="About us" contact="Contact us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/> 
        <Routes>
            <Route exact path='/about' element={<About mode={mode} showAlert={showAlert}/>} >
            </Route>
                  <Route exact path='/' element={<TextForm heading="Here you can manipulate the text according to the buttons action mentioned" mode={mode} showAlert={showAlert}/>} > 
                  </Route>
                        <Route exact path='/home' element={<Home mode={mode} showAlert={showAlert}/>}>
                        </Route>
                                <Route exact path='/contact' element={<ContactME mode={mode} showAlert={showAlert}/>} >
                                </Route>
        </Routes>

    </Router>
      </>
  );
}

export default App;
