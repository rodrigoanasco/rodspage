import {useState} from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText('ro.anasco.s@gmail.com')
        setHasCopied(true);
        setTimeout(() => {setHasCopied(false);}, 2000);
    }
  
    return (
    <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/me_in_victoria.jpg" alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>Hi, I'm Rodrigo</p>
                        <p className='grid-subtext'>
                            I’m a Computer Science student at Simon Fraser University, originally from Peru and now living in Canada. I’m passionate about Computer Vision, 
                            AI, and full-stack development. Currently working on Unify (a mobile app supporting immigrants) and SubVision Robotics (where I am in chare of implementing
                            a neural-inspired path planning project). I love exploring new challenges and collaborating on impactful AI and machine learning projects.
                        </p>
                    </div>
                </div>
            </div>

        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src="/assets/grid2.png" alt='grid-2' className='w-full sm:w-[276px] h-fit pl-14 pt-8 pb-6 object-contain'/>
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>
                        My tech stack covers a mix of AI, data science, and full-stack development. I work with C, C++, 
                        Java, Python, JavaScript, and TypeScript, and build apps using React, React Native, Node.js, and 
                        MongoDB. I also enjoy working with machine learning tools like TensorFlow, PyTorch, NumPy, Pandas, 
                        and Scikit-learn, and use MySQL for database management. For design and front-end styling, I use 
                        TailwindCSS, Bootstrap, and Figma, while Git, GitHub, and Linux are part of my everyday workflow.
                    </p>
                </div>
            </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe 
                    height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    />
                </div>
                <div>
                    <p className='grid-headtext'>
                        Currently living in Vancouver
                    </p>
                    <p className='grid-subtext pb-5'>
                        I moved to Canada in the summer of 2022 and instantly fell in love with Vancouver, a city that perfectly
                        blends innovation, culture, and breathtaking nature. Living here has been an incredible experience that 
                        fuels both my curiosity and creativity. As I continue to grow in my career, I’m excited to keep exploring 
                        more of Canada (and the world), meeting inspiring people, and discovering new opportunities along the way.
                    </p>
                    <Button name="Contact Me" isBeam containerClass="w-full"/>
                </div>
            </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-2'>
            <div className='grid-container'>
                <img src='/assets/grid3.png' alt='grid-3'
                className='w-full sm:h-[266px] h-fit object-contain'/>

                <div>
                    <p className='grid-headtext'>
                        My Passion for Coding
                    </p>
                    <p className='grid-subtext'>
                        I love coding problems and building things through code...
                    </p>
                </div>
            </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
                <img src='assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                <div className=' pt-10 space-y-2'>
                    <p className='grid-subtext text-center'>
                        Contact me
                    </p>
                    <div className='copy-container' onClick={handleCopy}>
                        <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt='copy'/>
                        <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>ro.anasco.s@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </section>
  )
}

export default About