import { PerspectiveCamera } from "@react-three/drei"
import CanvasLoader from "../components/CanvasLoader"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import HackerRoom from "../components/HackerRoom"
import { Leva, useControls } from "leva"


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
        value: 2.5,
        min: -10,
        max: 10 
    },
    rotationY: {
        value: 2.5,
        min: -10,
        max: 10 
    },
    rotationZ: {
        value: 2.5,
        min: -10,
        max: 10 
    },
    scaleX: {
        value: 2.5,
        min: -10,
        max: 10 
    }
  })
    return (
    <section className="min-h-screen w-full flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-mono">
                Hello, I'm Rodrigo! 
                <span className="waving-hand">🤙</span>
            </p>
            
            <p className="hero_tag text-gray_gradient text-center">
                Come and see my portfolio!
            </p>
        </div>

        <div className="w-full h-full absolute insert-0">
            <Leva />
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <HackerRoom 
                    //scale={1.5} 
                    position={[x.positionX, x.positionY, x.positionZ]} 
                    rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                    scale={[x.scaleX, x.scaleX, x.scaleX]}
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