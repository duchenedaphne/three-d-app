
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, CameraControls } from '@react-three/drei';
import { Suspense } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import Button from '../components/Button';
import Rocket from '../components/Rocket';

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white-500 text-center font-generalsans'>
                    Bonjour ! <span className='waving-hand'>👋</span>
                </p>
                {/* <p className='hero_tag text-gray_gradient'>
                    Marques et Produits créés
                </p> */}
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                    <CameraControls />

                    <Suspense fallback={<CanvasLoader />}>
                        <Rocket
                            position={[0, -2, 0]}
                            scale={0.6}
                        />
                    </Suspense>

                    <Suspense fallback={<CanvasLoader />}>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>
                    </Suspense>

                    <ambientLight intensity={2.2} />
                    <directionalLight
                        position={[10, 10, 10]}
                        intensity={4}
                    />
                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name="Collaborons ensemble" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero;
