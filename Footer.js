import React from 'react'

const Footer = (props) => {
  return (
    <footer className="footer"  style = {{backgroundColor: props.mode === 'dark'?'white':'gray'}} >
        <h2 style = {{color: props.mode === 'dark'?'white':'black'}}>Copy Rights 2023</h2>
      </footer>
  )
}

export default Footer