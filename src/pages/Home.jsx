import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HomeInfo from '../components/HomeInfo'
import Loader from '../components/Loader'
import Waterlog from '../models/Waterlog'
import Sky from '../models/Sky'
import Fish from '../models/Fish'
import Shark from '../models/Shark'



const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);


 /* Waterlog Screen Size */
  const adjustWaterForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -1, -40];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1.5, 1.5, 1.5];
    }

    return {screenScale, screenPosition, rotation};
  }

  const { screenScale: WaterlogScale, screenPosition: WaterlogPosition, rotation: WaterlogRotation } = adjustWaterForScreenSize();

  /* Shark Screen Size */

  const adjustSharkForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, -4, -6];
    }

    return {screenScale, screenPosition};
  }

  const { screenScale: SharkScale, screenPosition: SharkPosition } = adjustSharkForScreenSize();

  return (
    <section className="w-full h-screen relative">
      
    <div className ="absolute top-28 left-0 right-0 z-10 flex 
    items-center justify-center">
      {currentStage && <HomeInfo currentStage={currentStage}/>}
    </div>

      <Canvas 
      className={`w-full h-screen bg-transparent ${isRotating ? 
        'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position = {[3, 10, 1]} intensity={4}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={5} />

          <Fish />

          <Shark 
            SharkScale={SharkScale}
            SharkPosition={SharkPosition}
            isRotating={isRotating} 
            rotation={[0, 20, 0]}
            scale={[10, 10, 10]}
            position={[0, 0, -6]}
          />

          <Sky isRotating={isRotating}/>

          <Waterlog 
            position={WaterlogPosition}
            scale={WaterlogScale}
            rotation={WaterlogRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home