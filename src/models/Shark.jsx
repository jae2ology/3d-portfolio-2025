import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import sharkScene from "../assets/3d/shark.glb";

const Shark = ({ isRotating, ...props })  => {

  
  const ref = useRef();
  const { scene, animations } = useGLTF(sharkScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log({isRotating});
    if (isRotating) {
      actions["swim"].play();
    } else {
      actions["swim"].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Shark