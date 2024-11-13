import { useEffect, useRef } from "react";
import { CameraControls } from '@react-three/drei';
import { useFrame } from "@react-three/fiber";
// import { easing } from 'maath';

const RocketCamera = ({ children, isMobile, actions }) => {
    const groupRef = useRef();

    // useEffect(() => {
    //   actions.Experiment.play();
    // }, [actions]);

    // useFrame((state, delta) => {
    //   actions;
    // })

    // useFrame((state, delta) => {
    //     easing.damp3(
    //         state.camera.position, 
    //         [0, 0, 20], 
    //         0.25, 
    //         delta
    //     );

    //     if(!isMobile) {
    //         easing.dampE(
    //             groupRef.current.rotation, 
    //             [
    //                 -state.pointer.y / 3, 
    //                 -state.pointer.x / 5, 
    //                 0
    //             ], 
    //             0.25, 
    //             delta
    //         );
    //     }
    // });

    return (
        <group ref={groupRef} scale={isMobile ? 1 : 1.3}>
            <CameraControls />
            {children}
        </group>
    )
}

export default RocketCamera;