import React from 'react'
// import CV from '../../assets/CV.pdf'
import {TfiNewWindow} from 'react-icons/tfi'
const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://www.dropbox.com/s/kti0cankyhlkwmz/my%20resume.pdf?dl=0" target="_blank" rel="noreferrer"  className='btn'>View my resume<TfiNewWindow/></a>
        <a href='#contact' className='btn btn-primary'>Message me</a>
    </div>
  )
}

export default CTA