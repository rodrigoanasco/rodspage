import React from 'react'

const About = () => {
  return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Hi, I'm Rodrigo</p>
                        <p className='grid-subtext'>Student at Simon Fraser University passionate about [...]</p>
                    </div>
                </div>
            </div>

        <div className='col-span1 xl:row-span-3'>
            <div className='grid-container'>
                <img src="/assets/grid2.png" alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>I specialize in [...]</p>
                </div>
            </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">

                </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default About