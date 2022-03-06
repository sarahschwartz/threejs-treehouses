import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const GetMaterial = ({ matData }) => {
  let material;
  let texture;
  const floorTexture = useLoader(TextureLoader, "floor.jpg");
  const barkTexture = useLoader(TextureLoader, "bark.jpg");
  const heartsTexture = useLoader(TextureLoader, "hearts.png");
  const bearTexture = useLoader(TextureLoader, "bear.jpeg");
  const spaceTexture = useLoader(TextureLoader, "space.jpeg");
  const smileyTexture = useLoader(TextureLoader, "smiley.png");
  const palmTexture = useLoader(TextureLoader, "palm.png");
  const woodTableTexture = useLoader(TextureLoader, "wood-texture1.jpeg");
  const plantsTexture = useLoader(TextureLoader, "plant-wall.jpeg");
  const linesTexture = useLoader(TextureLoader, "pattern1.jpeg");

  function getPhysicalMaterial() {
    return (
      <meshPhysicalMaterial
        color={matData.color ? matData.color : "red"}
        clearcoat={matData.clearcoat ? matData.clearcoat : 0}
        clearcoatRoughness={
          matData.clearcoatRoughness ? matData.clearcoatRoughness : 0
        }
        emissive={matData.emissive ? matData.emissive : "black"}
        emissiveIntensity={
          matData.emissiveIntensity ? matData.emissiveIntensity : 1
        }
        ior={matData.ior ? matData.ior : 1.5}
        metalness={matData.metalness ? matData.metalness : 0}
        roughness={matData.roughness ? matData.roughness : 0}
        reflectivity={matData.reflectivity ? matData.reflectivity : 0}
        sheen={matData.sheen ? matData.sheen : 0}
        sheenRoughness={matData.sheenRoughness ? matData.sheenRoughness : 0}
        sheenColor={matData.sheenColor ? matData.sheenColor : 0}
        transmission={matData.transmission ? matData.transmission : 0}
        wireframe={matData.wireframe ? matData.wireframe : false}
      />
    );
  }

  switch (matData ? matData.type : "none") {
    case "meshPhysicalMaterial":
      material = getPhysicalMaterial();
      break;
    case "meshNormalMaterial":
      material = <meshNormalMaterial />;
      break;
    default:
      if (matData.texture) {
        switch (matData.texture) {
          case "floor-texture":
            texture = floorTexture;
            break;
          case "bark-texture":
            texture = barkTexture;
            break;
          case "hearts-texture":
            texture = heartsTexture;
            break;
          case "bear-texture":
            texture = bearTexture;
            break;
          case "space-texture":
            texture = spaceTexture;
            break;
          case "smiley-texture":
            texture = smileyTexture;
            break;
          case "palm-texture":
            texture = palmTexture;
            break;
          case "wood-table-texture":
            texture = woodTableTexture;
            break;
          case "plants-texture":
            texture = plantsTexture;
            break;
          case "lines-texture":
            texture = linesTexture;
            break;
          default:
        }
      }
      material = (
        <meshStandardMaterial
          color={matData.color ? matData.color : "blue"}
          roughness={matData.roughness ? matData.roughness : 1}
          emissive={matData.emissive ? matData.emissive : "black"}
          emissiveIntensity={
            matData.emissiveIntensity ? matData.emissiveIntensity : 1
          }
          map={texture}
        />
      );
  }

  return material;
};

export default GetMaterial;
