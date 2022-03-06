import ThreeMesh from "./ThreeMesh";

const ThreeGroup = ({ group }) => {
  return (
    <group
      position={group.position ? group.position : [0, 0, 0]}
      scale={group.scale ? group.scale : [1, 1, 1]}
      rotation={group.rotation ? group.rotation : [0, 0, 0]}
    >
      {group.meshes.map((object) => (
        <ThreeMesh key={object.name} object={object} />
      ))}
    </group>
  );
};

export default ThreeGroup;
