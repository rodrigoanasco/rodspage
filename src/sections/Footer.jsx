import React from 'react'

const Footer = () => {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen
        bg-black-200 border-t border-black-300">
        <div className='c-space mx-auto py-7 pb-3 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
            </div>
            
            <div className='flex gap-3'>
                <a href="https://github.com/rodrigoanasco" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
                </a>
                <a href="https://www.instagram.com/rodr_1201/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2'/>
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-anasco" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/linkedin.svg" alt="linkedin" className='w-1/2 h-1/2'/>
                </a>
            </div>

            <p className='text-white-500'>© 2025 Rodrigo Anasco. All rights reserved</p>
        </div>
    </section>
  )
}

export default Footer