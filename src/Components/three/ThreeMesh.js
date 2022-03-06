import GetGeometry from "./GetGeometry";
import GetMaterial from "./GetMaterial";

const ThreeMesh = ({ object }) => {
  return (
    <mesh
      // ref={mesh}
      position={object.position}
      scale={object.scale}
      rotation={object.rotation}
    >
      <GetGeometry geoData={object.geometry} />
      <GetMaterial matData={object.material} />
    </mesh>
  );
};

export default ThreeMesh;
