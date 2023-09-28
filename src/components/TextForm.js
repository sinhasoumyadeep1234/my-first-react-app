import React from 'react'
import { useState } from 'react'
export const TextForm = (props) => {

  const [text,setText]=useState(""); //creating a state
  // const [myStyle,setMystyle]=useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })

  // const [btnText,setbtntext] = useState("Enable Dark Mode");

  // // darkmode-lightmode toggle
  // const toggleMode1=()=>{
  //   // enable dark mode
  //   if(myStyle.color==='black'){
  //     setMystyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border:'1px solid white'
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
  // copy text to clipboard
  const copyText=()=>{
    var text1=document.getElementById("floatingTextarea2");
    text1.select();
    document.getSelection().removeAllRanges(); //removes the text selected animation
    if(text1.value===""){
      props.showAlert(" Write something in the text area before copying","danger");
    }
    else{
      navigator.clipboard.writeText(text1.value);
      props.showAlert(" Text copied to clipboard successfully!!","success");
    }
  }

  // remove extra spaces from the inputted text
  const ExtraSpaceremoval=()=>{
    let newtext=text;
    if(newtext.length==" "){
      props.showAlert(" Text box is already empty no extra space to remove","danger");
    }
    else{
          let ans=prompt("Do you sure want to remove all the extra spaces type-y/n or Y/n?");
          if(ans==='y'||ans==='Y'){
            var regexPattern=/\s+/g;
            newtext=text.replace(regexPattern," ");
            setText(newtext);
            props.showAlert("Extra spaces removed successfully!!","success")
          }
          else if(ans==='n'||ans==='N'){
            props.showAlert(" Operation cancelled by user!!","danger");
          }
          else{
            props.showAlert(" Invalid character entered by user!!","danger");
          }
    }
  }
  // change to uppercse
  const onhandleUp=()=>{
    let newtext=text;
    if(newtext.length==" "){
      props.showAlert(" Write something in the text area before converting to uppercse","danger");
    }
    else{
      newtext=text.toUpperCase();
      setText(newtext);
      props.showAlert(" Text converted to uppercase successully!!","success");
    }
  }
  // change to lowercase
  const onhandlelow=()=>{
    let newtext=text;
    if(newtext.length==" "){
      props.showAlert(" Write something in the text area before converting to lowercse","danger");
    }
    else{
      newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert(" Text converted to lowercse successully!!","success");
    }
  }
  // clear the text area
  const onhandleclear=()=>{
    let newtext=text;
    if(newtext.length==" "){
      props.showAlert(" Text box is already empty","danger");
    }
    else{
        let ans=prompt("Do you sure want to remove all the text entered type-y/n or Y/n?");
        if(ans==='y'||ans==='Y'){
          newtext="";
          setText(newtext);
          props.showAlert("Text box cleared successfully!!","success")
        }
        else if(ans==='n'||ans==='N'){
          props.showAlert(" Operation cancelled by user!!","danger");
        }
        else{
          props.showAlert(" Invalid character entered by user!!","danger");
        }
    }
    
  }
  // enable writing in the textarea
  const onchangeHandler=(event)=>{
    setText(event.target.value);
  }
  return (
    <>
    
    <div className={`maincontainer mx-4 py-4 my-5 text-${props.mode==="light"?"dark":"light"} hello py-3 my-5`} id='borderme' style={{border:'2px solid black'}} >
        <div className="container py-3 hello" >
          <h2 className='py-2 heading'>{props.heading}</h2>
              <div className="mb-3 ">
                <textarea class="form-control" style={{backgroundColor:props.mode==="dark"?"lightgray":"white",height: "100px"}} placeholder="Start Typing" value={text} onChange={onchangeHandler} id="floatingTextarea2"></textarea>
              </div>
              <button className="btn btn-primary mx-1 my-1" id='button1' onClick={onhandleUp} style={{border:'1px solid black'}}>Convert to uppercase</button>
              <button className="btn btn-primary mx-1 my-1" id='button2' onClick={onhandlelow} style={{border:'1px solid black'}}>Convert to lowercase</button>
              {/* <button className="btn btn-primary mx-1 my-1"  onClick={toggleMode1}>{btnText}</button> */}
              <button className="btn btn-primary mx-1 my-1" id='button3' onClick={ExtraSpaceremoval} style={{border:'1px solid black'}}>Remove extra spaces</button>
              <button className="btn btn-primary mx-1 my-1" id='button4' onClick={copyText} style={{border:'1px solid black'}}>Copy text to clipboard</button>
              <button className="btn btn-primary mx-1 my-1" id='button5' onClick={onhandleclear} style={{border:'1px solid black'}}>Clear</button>
        </div>
        <div className="container my-2 py-2 px-20 hello heading" >
        <h4>Summary of the text you entered</h4>
        <p>Words typed: {text.split(/\s+/).filter((element)=>{return element.length!=0}).length}   and  Letters typed: {text.length-text.split(/\s+/).length+1}</p>
        <p>Average time to be taken to read the text you entered is {0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} mins</p>
        <h4>Preview of the text you entered</h4>
        <p className='my-0 '>{text.length>0?text:"**Please write something in the textbox first and then it will be previewed here**"}</p>
        </div>
    </div>
        <h5 className={`text-${props.mode==="light"?"dark":"light"} `} style={{textAlign:'right'}}>@ Made with love by Soumyadeep Sinha 🤗❤️ :)</h5>
  
    </>
  )
}
