import React from 'react'
import { useState } from 'react';
import TextForm from './TextForm';
import Alert from './Alert';

const Home = (props) => {
 
  
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000)
  }
  return (
    <div className="App" >

        <Alert alert={alert} />
         {/* <About />  */}
        <TextForm text="Enter your text" showAlert={showAlert} />
      </div>
  )
}

export default Home