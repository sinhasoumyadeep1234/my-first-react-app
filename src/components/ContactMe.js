import React from 'react'

 function ContactME(props) {
  return (
    <address className={`container text-${props.mode==="light"?"dark":"light"} hello py-3 my-5`} id='borderme' style={{border:'2px solid black'}}>
      <h1 className='hello px-5 py-3 heading' style={{backgroundColor:'violet'}}>Contact us</h1>
      <div className="hello heading">
            <h2 className='px-5 py-3' id='button1'>You can find us at here: <br /></h2>
            <h3 className='px-5' id='button2' >TextUtils <br /></h3>
            <h4 className='px-5' id='button3'>Ranaghat Nadia <br /></h4>
            <h4 className='px-5' id='button4'>West Bengal <br /></h4>
            <h5 className='px-5 py-3' id='button5'>pin: 741201 <br />
            Thank you❤️</h5>
            <h2 className='px-5' style={{backgroundColor:'magenta'}}>Contact the creator of this site: Mr.Soumyadeep Sinha💻❤️
            Mobile: 7001810880</h2>
      </div>
    </address>
  )
}

export default ContactME