import { PerspectiveCamera } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import HackerRoom from "../components/HackerRoom"
import { Leva, useControls } from "leva"
import { calculateSizes } from "../constants"
import { useMediaQuery } from "react-responsive"


const Hero = () => {
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
            <Leva />
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                    <HackerRoom 
                    //scale={1.5} 
                    position={sizes.deskPosition} 
                    rotation={[0.6, -0.35, 0.1]}
                    scale={sizes.deskScale}
                    />
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero