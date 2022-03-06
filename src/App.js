import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import SceneGroup from "./Components/three/SceneGroup";
import styles from "./styles.css";

// import treehouseScene from "./Components/Scene/scene1";
// import treehouseScene from "./Components/Scene/scene2";
// import treehouseScene from "./Components/Scene/scene3";
// import treehouseScene from "./Components/Scene/scene4";
// import treehouseScene from "./Components/Scene/scene5";
// import treehouseScene from "./Components/Scene/scene6";
// import treehouseScene from "./Components/Scene/scene7";
import treehouseScene from "./Components/Scene/scene8";

function App() {
  return (
    <div>
      <Canvas
        camera={{ fov: 55, near: 0.1, far: 100, position: [3, 4, 12] }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity="0.6" />
          <directionalLight position={[1.2, 11.6, 7.5]} intensity="0.6" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <Sky
            turbidity={20}
            distance={450000}
            inclination={0.6}
            azimuth={0.6}
          />

          <SceneGroup treehouseScene={treehouseScene} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
