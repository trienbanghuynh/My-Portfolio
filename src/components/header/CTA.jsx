import React from 'react'
// import CV from '../../assets/CV.pdf'
import {TfiNewWindow} from 'react-icons/tfi'
const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1IaM46j3uru7DzBjhRZVcUDBDNW1aaNl6/view?usp=sharing" target="_blank" rel="noreferrer"  className='btn'>View my resume <TfiNewWindow/></a>
        <a href='#contact' className='btn btn-primary'>Message me</a>
    </div>
  )
}

export default CTA