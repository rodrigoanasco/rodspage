import React from 'react'
import { Canvas } from '@react-three/fiber'
import { workExperiences } from '../constants'
import { div } from 'three/tsl'

const Experience = () => {
  return (
    <section className='c-space my-20' id='work'>
        <div className="w-full text-white-600">
            <h3 className='head-text'>
                Work & Volunteer Experience!
            </h3>
            <div className='work-container'>
                <div className='flex flex-col justify-center items-center bg-black-200 rounded-2xl border border-black-300 p-10 text-center'>
                <h4 className='text-white text-xl font-semibold mb-4'>More details here!</h4>
                <div className='w-full max-w-[300px] h-[400px] mb-6'>
                    <img 
                    src="/assets/goofy.png" 
                    alt="CV Preview" 
                    className='w-full h-full object-contain rounded-lg shadow-lg'
                    />
                </div>
                
                <a 
                href="/assets/Rodrigo_Anasco_CV.pdf" 
                download 
                className='bg-white text-black font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300'
                >
                Download CV
                </a>
          </div>

                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id, name, pos, icon, duration, title, animation}) => (
                            <div key={id} className='work-content_container group'>
                                <div className='flex flex-col h-full justify-start items-center py-2'>
                                    <div className='work-content_logo'>
                                        <img src={icon} alt="logo" className='w-full h-full'/>
                                    </div>
                                    <div className='work-content_bar'/>
                                </div>
                                <div className='sm:p-5 px-2.5 py-5'>
                                    <p className='font-bold text-white-800'>{name}</p>
                                    <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                    <p className='group-hover:text-white transition ease-in-out duration-500'>
                                        {title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
        
    </section>
  )
}

export default Experience