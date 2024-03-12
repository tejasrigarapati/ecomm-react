import React from 'react'
export default function App19child(props) {
  return (
    <div style={{backgroundColor:'pink'}}>
      <div style={{color:'white'}}></div>
        {props.children}
    </div>
  )
}