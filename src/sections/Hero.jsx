import { PerspectiveCamera } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import HackerRoom from "../components/HackerRoom"
import { Leva, useControls } from "leva"
import { calculateSizes } from "../constants"
import { useMediaQuery } from "react-responsive"
import Target from "../components/Target"
import Banana from "../components/Banana"
import Shyguy from "../components/Shyguy"
import Camera from "../components/Camera"
import HeroCamera from "../components/HeroCamera"


const Hero = () => {
    //use <Leva/> inside the canvas in order to be able to move the images with this controller
    const x = useControls('HackerRoom', {
    positionX: {
        value: 2.5,
        min: -10,
        max: 10 
    },
    positionY: {
        value: 2.5,
        min: -10,
        max: 10 
    },
    positionZ: {
        value: 2.5,
        min: -10,
        max: 10 
    },
    rotationX: {
        value: 0,
        min: -10,
        max: 10 
    },
    rotationY: {
        value: 0,
        min: -10,
        max: 10 
    },
    rotationZ: {
        value: 0,
        min: -10,
        max: 10 
    },
    scaleX: {
        value: 1,
        min: 0.1,
        max: 10 
    }
  })
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-mono">
                Hello, I'm Rodrigo! 
                <span className="waving-hand">🤙</span>
            </p>
            
            <p className="hero_tag text-gray_gradient text-center">
                Welcome to my place!
            </p>
        </div>
  
        <div className="w-full h-full absolute insert-0">
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        //scale={1.5} 
                        position={sizes.deskPosition} 
                        rotation={[0.68, -0.4, 0.03]}
                        scale={sizes.deskScale}
                        />
                    </HeroCamera>

                    <group>
                        <Target scale={0.1} position={sizes.targetPosition}/>
                        <Banana scale={2} rotation={[1, 1, 1]} position={sizes.reactLogoPosition}/>
                        <Shyguy scale={4} rotation={[0.5, -0.5, 0]} position={sizes.ringPosition} />
                        <Camera rotation={[0, 4.5, 0]} scale={13} position={sizes.cubePosition} />
                    </group>

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero