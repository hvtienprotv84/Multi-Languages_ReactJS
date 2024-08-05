import React from 'react'
import { Text } from '../Text';
import '../../src/App.css'; 

export default function Footer() {
  return (
    <div className='container_copyright'>

    <div className='copyright_myname'>
        <span>&copy; <Text tid="copyright" /></span>
    </div>
    
    <div className='copyright_version'>
        <span><Text tid="version" /></span>
    </div>
    
    </div>
  )
}
