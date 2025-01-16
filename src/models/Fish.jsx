import { useRef, useEffect } from 'react'

import fishScene from '../assets/3d/fish.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Fish = () => {
  const fishRef = useRef();
  const { scene, animations } = useGLTF(fishScene);
  const { actions } = useAnimations(animations, fishRef)
  

  useEffect(() => {
    actions['Armature|ArmatureAction'].play();

  }, []);

  useFrame(({clock, camera}) => {
    // fish movement simulation here
    fishRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if(fishRef.current.position.x > camera.position.x + 10) {
      fishRef.current.rotation.y = Math.PI;
    } else if(fishRef.current.position.x < camera.position.x - 10) { 
      fishRef.current.rotation.y = 0;
    }


    if(fishRef.current.rotation.y === 0) {
      fishRef.current.position.x += 0.01;
      fishRef.current.position.z -= 0.01;
    } else {
      fishRef.current.position.x -= 0.01;
      fishRef.current.position.z += 0.01; 
    }
  })

  return (
    <mesh 
    position={[-5, 2, 1]} 
    scale={[0.5, 0.5, 0.5]} 
    ref={fishRef}
    > 
        <primitive object={scene}/>
    </mesh>
  )
}

export default Fish