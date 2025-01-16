// Code to render the Waterlog model
import { a } from '@react-spring/three'
import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

import WaterlogScene from '../assets/3d/sea_shack.glb'


/* Rotation Function */
const Waterlog = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {

    const WaterlogRef = useRef() 
    
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(WaterlogScene)

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches ? 
      e.touches[0].clientX : 
      e.clientX;

      lastX.current = clientX;
    } 

    const handlePointerMove = (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (isRotating){
        const clientX = e.touches ? 
        e.touches[0].clientX : 
        e.clientX;
  
        const delta = (clientX - lastX.current) / viewport.width;
        WaterlogRef.current.rotation.y += delta * 0.01 * Math.PI;
        lastX.current = clientX;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    }

    const handlePointerUp = (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    }

    const handleKeyDown = (e) => {
      if(e.key === 'ArrowLeft'){
        if(!isRotating)setIsRotating(true);
        WaterlogRef.current.rotation.y += 0.01 * Math.PI;
      } else if(e.key === 'ArrowRight'){
        if(!isRotating)setIsRotating(true);
        WaterlogRef.current.rotation.y -= 0.01 * Math.PI;
      }
    }

    const handleKeyUp = (e) => {
      if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        setIsRotating(false);
        
      }
    }

    useFrame(() => {
      if(!isRotating){
        rotationSpeed.current *= dampingFactor;
        
        if(Math.abs(rotationSpeed.current) < 0.0001){
          rotationSpeed.current = 0;
      } 
      WaterlogRef.current.rotation.y += rotationSpeed.current;
      
      const rotation = WaterlogRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
      }
    } )


    useEffect(() => {
      const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown); 
      canvas.addEventListener('pointermove', handlePointerMove);
      canvas.addEventListener('pointerup', handlePointerUp);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      
      return () => {

        canvas.removeEventListener('pointerdown', handlePointerDown); 
        canvas.removeEventListener('pointermove', handlePointerMove);
        canvas.removeEventListener('pointerup', handlePointerUp);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }

      useGLTF.preload(WaterlogScene);
    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp])

// Mesh for the Waterlog model

  return (
    <a.group ref={WaterlogRef} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth4_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </a.group>
  )
}

export default Waterlog;