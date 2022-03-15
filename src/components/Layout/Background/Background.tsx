import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, OrbitControls } from "@react-three/drei";
import * as THREE from 'three'
import { BufferGeometry } from "three";

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

    const Rain = () => {
        const vertices = [];

        const geoRef = React.useRef<BufferGeometry>()

     

        for (let i = 0; i < 6000; i ++) {
            const x = Math.random() * 400 - 200;
            const y = Math.random() * 500 - 250;
            const z = Math.random() * 400 - 200;
            vertices.push(x, y, z);
        }


       return (
            <mesh>
                <bufferGeometry ref={geoRef}>
                    <bufferAttribute 
                        attachObject={["attributes", "position"]}
                        array={vertices}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial color={0xaaaaaa} size={0.1} transparent={true} />
            </mesh>
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
                    <Rain />
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
