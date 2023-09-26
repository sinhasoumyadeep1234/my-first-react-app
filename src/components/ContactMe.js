import React from 'react'

 function ContactME(props) {
  return (
    <address className={`container text-${props.mode==="light"?"dark":"light"} hello py-3 my-5`} id='borderme' style={{border:'2px solid black'}}>
      <h1 className='hello px-5 py-3'>Contact us</h1>
      <div className="hello">
            <h2 className='px-5 py-3'>You can find us at here: <br /></h2>
            <h3 className='px-5'>TextUtils <br /></h3>
            <h4 className='px-5'>Ranaghat Nadia <br /></h4>
            <h4 className='px-5'>West Bengal <br /></h4>
            <h5 className='px-5'>pin: 741201 <br /></h5>
            <h5 className='px-5'>Thank you❤️</h5>
            <h2 className='px-5'>Contact the creator of this site: Mr.Soumyadeep Sinha💻❤️</h2>
            <h3 className='px-5'>Mobile: 7001810880</h3>
      </div>
    </address>
  )
}

export default ContactME