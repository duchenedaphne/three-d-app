
import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Rocket = (props) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('assets/models/rocket.glb');
    const { actions, mixer } = useAnimations(animations, group);
    const [isRotating, setIsRotating] = useState(false);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    const rotateAnimation = () => {
        setIsRotating(!isRotating);
        actions.current = {
            idle: mixer.clipAction(animations[0], group.current)
        }
        if (isRotating) {
            actions.current.idle.fadeIn(0.5).play();
            return () => animations.forEach((clip) => mixer.uncacheClip(clip));
        } else {
            actions.current.idle.fadeOut(0.5).stop();
        }
    }

    return (
        <group ref={group} {...props} dispose={null} onClick={rotateAnimation} >
            <group name="Scene" >
                <group name="Launch_Pad" position={[0, -5.701, 0]} scale={[4.875, 0.551, 4.875]} >
                    <mesh
                        name="Platform"
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform.geometry}
                        material={materials['Dark Brown']}
                    />
                    <mesh
                        name="Platform_1"
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_1.geometry}
                        material={materials['Light Brown']}
                    />
                    <mesh
                        name="Platform_2"
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2.geometry}
                        material={materials.Light}
                    />
                    <group name="Rocket" position={[-0.013, 20.124, -0.048]} scale={[0.205, 1.813, 0.205]}>
                        <mesh
                            name="Cube"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube.geometry}
                            material={materials['Orange Metal']}
                        />
                        <mesh
                            name="Cube_1"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_1.geometry}
                            material={materials['Dark Metal']}
                        />
                        <mesh
                            name="Circle"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle.geometry}
                            material={materials['Orange Metal']}
                            position={[0.023, 0.812, 0.929]}
                            rotation={[1.463, -0.001, 0.003]}
                            scale={0.423}
                        />
                        <mesh
                            name="Circle001"
                            castShadow
                            receiveShadow
                            geometry={nodes.Circle001.geometry}
                            material={materials.Window}
                            position={[0.023, 0.812, 0.929]}
                            rotation={[1.463, -0.001, 0.003]}
                            scale={0.423}
                        />
                        <mesh
                            name="Cube002"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002.geometry}
                            material={materials['Orange Metal']}
                            position={[-1.006, -2.744, 0.463]}
                            rotation={[0.023, 0.508, 3.121]}
                            scale={[-0.26, -0.24, -0.045]}>
                            <group
                                name="Cube001"
                                position={[-3.475, 2.299, -4.121]}
                                rotation={[Math.PI, 0, 0]}
                                scale={[1.967, 5.976, 7.661]}>
                                <mesh
                                    name="Cube001_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube001_1.geometry}
                                    material={materials['Orange Metal']}
                                />
                                <mesh
                                    name="Cube001_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube001_2.geometry}
                                    material={materials['Dark Metal']}
                                />
                            </group>
                        </mesh>
                        <group
                            name="Cube004"
                            position={[-0.941, -2.73, -0.017]}
                            rotation={[0, 0, -Math.PI]}
                            scale={[-0.26, -0.24, -0.045]}
                        />
                        <mesh
                            name="Cube005"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube005.geometry}
                            material={materials['Orange Metal']}
                            position={[-1.006, -2.744, 0.463]}
                            rotation={[0.023, 0.508, 3.121]}
                            scale={[-0.26, -0.24, -0.045]}>
                            <group
                                name="Cube003"
                                position={[-3.475, 2.299, -4.121]}
                                rotation={[Math.PI, 0, 0]}
                                scale={[1.967, 5.976, 7.661]}>
                                <mesh
                                    name="Cube007_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube007_1.geometry}
                                    material={materials['Orange Metal']}
                                />
                                <mesh
                                    name="Cube007_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube007_2.geometry}
                                    material={materials['Dark Metal']}
                                />
                            </group>
                        </mesh>
                        <mesh
                            name="Cube007"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube007.geometry}
                            material={materials['Orange Metal']}
                            position={[-0.05, -2.742, -1.084]}
                            rotation={[-2.249, -1.547, 0.88]}
                            scale={[-0.26, -0.24, -0.045]}>
                            <group
                                name="Cube006"
                                position={[-3.475, 2.299, -4.121]}
                                rotation={[Math.PI, 0, 0]}
                                scale={[1.967, 5.976, 7.661]}>
                                <mesh
                                    name="Cube009_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube009_1.geometry}
                                    material={materials['Orange Metal']}
                                />
                                <mesh
                                    name="Cube009_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube009_2.geometry}
                                    material={materials['Dark Metal']}
                                />
                            </group>
                        </mesh>
                        <mesh
                            name="Cube009"
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube009.geometry}
                            material={materials['Orange Metal']}
                            position={[0.812, -2.778, 0.517]}
                            rotation={[-3.14, 0.539, 0.021]}
                            scale={[-0.26, -0.24, -0.045]}>
                            <group
                                name="Cube008"
                                position={[-3.475, 2.299, -4.121]}
                                rotation={[Math.PI, 0, 0]}
                                scale={[1.967, 5.976, 7.661]}>
                                <mesh
                                    name="Cube011"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube011.geometry}
                                    material={materials['Orange Metal']}
                                />
                                <mesh
                                    name="Cube011_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Cube011_1.geometry}
                                    material={materials['Dark Metal']}
                                />
                            </group>
                        </mesh>
                    </group>
                    <mesh
                        name="Smoke"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smoke.geometry}
                        material={materials.Smoke}
                        position={[-0.014, 8.851, 0.002]}
                        scale={[0.205, 5.899, 0.205]}
                    />
                    <mesh
                        name="Smoke_Cloud"
                        castShadow
                        receiveShadow
                        geometry={nodes.Smoke_Cloud.geometry}
                        material={materials.Smoke}
                        position={[-0.331, 3.454, -0.011]}
                        scale={[0.168, 1.486, 0.168]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload('/models/rocket.glb');

export default Rocket;
