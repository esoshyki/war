import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, OrbitControls } from "@react-three/drei";

const Background = () => {

    // useFrame(() => {

    // })

    const Cloudes = () => {

        const cloudes = React.useRef<any>();

        useFrame(() => {
            if (!cloudes.current) return;

            cloudes.current.rotation.z += 0.001;
        })

        return (
            <group ref={cloudes}>
                <Cloud position={[-4, -2, 0]} args={[3, 2]} color={0xffffff}/>
                <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                <Cloud args={[3, 2]} />
                <Cloud position={[4, -2, 0]} args={[3, 2]} />
                <Cloud position={[4, 2, 0]} args={[3, 2]} />
            </group>
        )
    }


    return (
        <div className="layout__background">
            <Canvas
                camera={{
                    zoom: 2,
                    scale: 64,
                }}
            >
                <React.Suspense fallback={null}>
                    <Cloudes />
                </React.Suspense>
                <OrbitControls 
                    enablePan={true} 
                    zoomSpeed={0.5} 
                    minZoom={1.0} 
                    maxZoom={2.0}/>
            </Canvas>
        </div>
    );
};

export default Background;
