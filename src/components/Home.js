import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    <div className={`container text-${props.mode==="light"?"dark":"light"} hello py-3 my-5`} id='borderme' style={{border:'2px solid black'}}>
        <h1 className='hello px-5 py-3 heading'>Welcome to TextUtils</h1>
        <div className="hello">
              <h2 className='px-5 py-3 heading'>It is India's Largest Text manipulating platform</h2>
              <h3 className='px-5 py-3' id='button1'>You can manipulate your text according to your need based on the options given in buttons below the text box</h3>
              <h3 className='px-5 py-3' id='button2'>That too for absolutely free!!</h3>
              <h4 className='px-5 py-3'id='button3'>Go and try our open source product</h4>
              <h5 className='px-5 py-3' id='button4'>Visit : <Link to="/" style={{textDecoration:'none'}}>www.TextUtils.com❤️💻</Link></h5>
              <h5 className='px-5 py-3' id='button5'>Thank you for your visit❤️</h5>
        </div>
        
    </div>
  )
}

export default Home