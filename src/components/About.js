import React from 'react'
import { Link } from 'react-router-dom'

function About(props) {
  return (
    <div className={`container text-${props.mode==="light"?"dark":"light"} hello my-10 py-3 my-5 `} id='borderme' style={{border:'2px solid black'}}>
            <h1 className='hello px-5 py-3 heading' id='button1'>About us</h1>
            <div className="container hello heading" id='button2'>
                <h2 className='px-5 py-3' id='button3'><strong>Text utils is India's largest free online platform for manipulating text</strong></h2>
                <h3 className='px-5 py-3' id='button4'><strong>Here you can easily modify your text</strong></h3>
                <h3 className='px-5 py-3' id='button5'><strong>Text utils is India's largest free online platform for manipulating text</strong></h3>
                <h3 className='px-5 py-3'>Try our website at:</h3>
                <h4 className='px-5 py-3'><Link to="/" style={{textDecoration:'none'}}>WWW.TextUtils.com❤️💻</Link></h4>
            </div>
    </div>
  )
}

export default About