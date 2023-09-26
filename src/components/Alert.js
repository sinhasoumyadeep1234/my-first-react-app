import React from 'react'

function Alert(props) {
  return (
    // if props.alert is null that is for the first case then && expression results false and next line of code is not executed
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role='alert'>
       <strong>{props.alert.msg}</strong>
    </div>
  )
}

export default Alert