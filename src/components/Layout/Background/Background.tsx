import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud, OrbitControls } from "@react-three/drei";

const Background = () => {
    return (
        <div className="layout__background">
            <Canvas
                camera={{
                    zoom: 2,
                    scale: 64,
                }}
            >
                <React.Suspense fallback={null}>
                    <Cloud position={[-4, -2, 0]} args={[3, 2]} color={0xffffff}/>
                    <Cloud position={[-4, 2, 0]} args={[3, 2]} />
                    <Cloud args={[3, 2]} />
                    <Cloud position={[4, -2, 0]} args={[3, 2]} />
                    <Cloud position={[4, 2, 0]} args={[3, 2]} />
                </React.Suspense>
                <OrbitControls onZoom={(e: any) => console.log("zoom")} enablePan={true} zoomSpeed={0.5} minZoom={1.0} maxZoom={2.0}/>
            </Canvas>
        </div>
    );
};

export default Background;
