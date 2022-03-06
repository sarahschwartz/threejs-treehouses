const GetGeometry = ({ geoData }) => {
  let geometry;

  switch (geoData ? geoData.type : "none") {
    case "BoxGeometry":
      geometry = <boxGeometry args={geoData.args} />;
      break;
    case "SphereGeometry":
      geometry = <sphereGeometry args={geoData.args} />;
      break;
    case "CylinderGeometry":
      geometry = <cylinderGeometry args={geoData.args} />;
      break;
    case "TorusGeometry":
      geometry = <torusGeometry args={geoData.args} />;
      break;
    case "TorusKnotGeometry":
      geometry = <torusKnotGeometry args={geoData.args} />;
      break;
    case "DodecahedronGeometry":
      geometry = <dodecahedronGeometry args={geoData.args} />;
      break;
    default:
      geometry = <boxGeometry args={geoData.args ? geoData.args : [1, 1, 1]} />;
  }

  return geometry;
};

export default GetGeometry;
