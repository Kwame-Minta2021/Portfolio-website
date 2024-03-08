import React, {Suspense} from 'react'
import { useGLTF, OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from './Loader'

const Arduino = () => {

    const arduino = useGLTF('arduino/scene.gltf')

    return (
        <Canvas frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={CanvasLoader}>
                <mesh>
                    <hemisphereLight intensity={1.15} groundColor='black' />
                    <primitive object={arduino.scene}
                    scale={1}
                    position={[0, -1, 2]}
                    rotation={[1.4, 0.1, -0.3]}/>
                    <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}/>
                </mesh>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Arduino
