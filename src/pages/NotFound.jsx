import { div } from 'framer-motion/client'
import React from 'react'

function NotFound() {
  const stylebutton = {
    background: 'linear-gradient(to right, #ff0066, #9966ff)',
    borderRadius: '10px',
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 1.5rem',
    display: 'inline-block',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  }
  
  return (
    <div className='bg-black min-vh-100 d-flex align-items-center'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6 text-center'>
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1111968679/thumb/1.jpg?ip=x480"
              alt="responsive img"
              className='img-fluid rounded shadow'
              style={{ maxHeight: "70vh", objectFit: "contain" }}
            />
            <div className='mt-4'>
              <a href="/" style={stylebutton}>Go Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound