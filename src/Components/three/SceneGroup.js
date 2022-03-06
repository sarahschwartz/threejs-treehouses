import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Tube } from "@react-three/drei";
import ThreeMesh from "./ThreeMesh";
import ThreeGroup from "./ThreeGroup";

const SceneGroup = ({ treehouseScene }) => {
  const groupRef = useRef();
  const [meshes, setMeshes] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    treehouseScene.forEach((el) => {
      if (el.type === "mesh") {
        setMeshes((m) => [...m, el]);
      } else if (el.type === "group") {
        setGroups((g) => [...g, el]);
      }
    });
  }, []);

  useFrame((state, delta) => (groupRef.current.rotation.y += 0.01));

  const path = [
    new THREE.Vector3(1.8, 1.8, -0.58),
    new THREE.Vector3(1.8, 1.1, -0.66),
    new THREE.Vector3(0.74, -1.54, -0.23),
    new THREE.Vector3(0.94, -2.74, 0.37),
    new THREE.Vector3(1.16, -4.86, 0.68),
    new THREE.Vector3(2.1, -5.86, 0.82),
    new THREE.Vector3(2.18, -7.86, -0.84),
    new THREE.Vector3(1.14, -9.74, -0.8)
  ];
  const pathBase = new THREE.CatmullRomCurve3(path);

  return (
    <group ref={groupRef} position={[0, -2, 0]}>
      {meshes.map((object) => (
        <ThreeMesh key={object.name} object={object} />
      ))}

      {groups.map((group) => (
        <ThreeGroup key={group.name} group={group} />
      ))}

      <Tube
        scale={[1, 1, 1]}
        position={[0, 3, -0.1]}
        args={[pathBase, 64, 0.03, 8]}
      >
        <meshStandardMaterial attach="material" color="rgb(80,0,0)" />
      </Tube>
    </group>
  );
};

export default SceneGroup;
