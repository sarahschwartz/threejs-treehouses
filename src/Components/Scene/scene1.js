// design by Jear

const couchColor = "#ff8080";
const wallColor = "#bbb";
const cactusColor = "#05A325";
const tableTopColor = "#ff8080";
const tableColor = "#56f5d5";
const donutColor = "#cb72ae";
const torusKnotColor = "#fff";
const recordPlayerColor = "#7c4d1b";
const streamerColor = "#c3d822";
const treeColor = "#0f6120";
const cactusPotColor = "#fff";
const roofCactusPotColor = "#80d1f9";
const rugColor = "#e2f019";

const treehouseScene = [
  {
    type: "group",
    name: "Treehouse",
    position: [0, 0.5, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Floor",
        scale: [1, 1, 1],
        position: [0, -0.25, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [6, 0.5, 4]
        },
        material: {
          type: "meshStandardMaterial",
          color: "rgb(100,80,80)",
          texture: "floor-texture"
        }
      },
      {
        type: "mesh",
        name: "Roof",
        scale: [1, 1, 1],
        position: [0, 4.01, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [6, 0.3, 4]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Back Wall",
        scale: [1, 1, 1],
        position: [-2.85, 1, 0.1],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.3, 2, 3.7]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Back Window",
        scale: [1, 1, 1],
        position: [-2.85, 3, 0.15],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.1, 2, 3.7]
        },
        material: {
          type: "meshPhysicalMaterial",
          color: "white",
          reflectivity: 0.5,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          transmission: 1,
          thickness: 2.5,
          opacity: 1
        }
      },
      {
        type: "mesh",
        name: "Beam 1",
        scale: [1, 1, 1],
        position: [2.73, 2, -1.85],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.5, 4, 0.3]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Beam 2",
        scale: [1, 1, 1],
        position: [0.85, 2, -1.85],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.5, 4, 0.3]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Beam 3",
        scale: [1, 1, 1],
        position: [-1, 2, -1.85],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.5, 4, 0.3]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Beam 4",
        scale: [1, 1, 1],
        position: [-2.75, 2, -1.85],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.5, 4, 0.3]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Front Wall",
        scale: [1, 1, 1],
        position: [2.85, 1, 0.1],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.3, 2, 3.7]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Front Window",
        scale: [1, 1, 1],
        position: [2.85, 3, 0.15],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.1, 2, 3.7]
        },
        material: {
          type: "meshPhysicalMaterial",
          color: "white",
          reflectivity: 0.5,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
          transmission: 1,
          thickness: 2.5,
          opacity: 1
        }
      }
    ]
  },
  {
    type: "group",
    name: "Tree",
    position: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Tree Trunk",
        scale: [1, 1, 1],
        position: [1.5, 0.94, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "CylinderGeometry",
          args: [0.54, 0.74, 15, 16, 4]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#a3625c",
          texture: "bark-texture",
          emissiveIntensity: 0.3
        }
      },
      {
        type: "mesh",
        name: "leaves 1",
        scale: [1, 1, 1],
        position: [1.7, 9.9, -2.4],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 2",
        scale: [1, 1, 1],
        position: [4.8, 7, -0.6],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 3",
        scale: [1, 1, 1],
        position: [1.8, 9.9, 1.7],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 4",
        scale: [1, 1, 1],
        position: [-1.1, 8.3, 1.74],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 5",
        scale: [1, 1, 1],
        position: [4.3, 9.9, -0.6],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 6",
        scale: [1, 1, 1],
        position: [-0.9, 9.9, -0.62],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      },
      {
        type: "mesh",
        name: "leaves 7",
        scale: [1, 1, 1],
        position: [1.53, 8.15, -0.62],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [2.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: treeColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Couch",
    position: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Couch Arm 1",
        scale: [1, 1, 1],
        position: [-1.725, 1.08, -1],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.76, 0.4, 0.32]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Couch Arm 2",
        scale: [1, 1, 1],
        position: [-1.725, 1.08, 1.55],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.76, 0.4, 0.32]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Couch Back 1",
        scale: [1, 1, 1],
        position: [-2.1, 1.33, -0.5],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.3, 1, 1.4]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Couch Back 2",
        scale: [1, 1, 1],
        position: [-2.1, 1.37, 1],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.3, 1, 1.4]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Couch Bottom",
        scale: [1, 1, 1],
        position: [-1.75, 0.69, 0.29],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [1, 0.4, 2.8]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Potted Cactus",
    position: [2.1, 0.27, 1.3],
    scale: [0.5, 0.5, 0.5],
    rotation: [0, -1.2, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Pot",
        scale: [1, 1, 1],
        position: [0, 0.7, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "CylinderGeometry",
          args: [0.5, 0.5, 0.5, 12, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusPotColor
        }
      },
      {
        type: "mesh",
        name: "Cactus Stem",
        scale: [0.64, 1.62, 0.6],
        position: [0, 1.77, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      },
      {
        type: "mesh",
        name: "Cactus Branch 1",
        scale: [0.32, 0.98, 0.38],
        position: [-0.48, 1.81, 0],
        rotation: [0, 0, 0.54],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      },
      {
        type: "mesh",
        name: "Cactus Branch 2",
        scale: [0.22, 0.68, 0.38],
        position: [0.49, 2.24, 0],
        rotation: [0, 0, -0.54],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      },
      {
        type: "mesh",
        name: "Cactus Flower",
        scale: [1, 1, 1],
        position: [0.67, 2.6, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.08]
        },
        material: {
          type: "meshStandardMaterial",
          color: "red"
        }
      }
    ]
  },
  {
    type: "group",
    name: "Roof Potted Cactus",
    position: [-2.11, 4.45, 1.3],
    scale: [0.5, 0.5, 0.5],
    rotation: [0, 0.54, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Roof Pot",
        scale: [1, 1, 1],
        position: [0, 0.7, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "CylinderGeometry",
          args: [0.5, 0.5, 0.5, 12, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: roofCactusPotColor
        }
      },
      {
        type: "mesh",
        name: "Roof Cactus Stem",
        scale: [0.64, 1.62, 0.6],
        position: [0, 1.77, 0],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      },
      {
        type: "mesh",
        name: "Roof Cactus Branch 1",
        scale: [0.32, 0.98, 0.38],
        position: [-0.48, 1.81, 0],
        rotation: [0, 0, 0.54],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      },
      {
        type: "mesh",
        name: "Roof Cactus Branch 2",
        scale: [0.22, 0.68, 0.38],
        position: [0.49, 2.24, 0],
        rotation: [0, 0, -0.54],
        yRotationSpeed: 0,
        geometry: {
          type: "SphereGeometry",
          args: [0.56, 32, 16]
        },
        material: {
          type: "meshStandardMaterial",
          color: cactusColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "TV",
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "TV Back",
        scale: [1, 1, 1],
        position: [0.888, 2.912, 0.022],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.03, 1, 1.36]
        },
        material: {
          type: "meshStandardMaterial",
          color: "grey"
        }
      },
      {
        type: "mesh",
        name: "TV Screen",
        scale: [1, 1, 1],
        position: [0.873, 2.92, 0.022],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.01, 0.94, 1.32]
        },
        material: {
          type: "meshStandardMaterial",
          color: "black"
        }
      }
    ]
  },
  {
    type: "mesh",
    name: "Rug",
    scale: [1, 1, 1],
    position: [-0.352, 0.5, 0.187],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    geometry: {
      type: "BoxGeometry",
      args: [1.7, 0.03, 3]
    },
    material: {
      type: "meshStandardMaterial",
      color: rugColor,
      texture: "smiley-texture"
    }
  },
  {
    type: "group",
    name: "Roof Walls",
    position: [0, -0.1, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Roof Wall 1",
        scale: [1, 1, 1],
        position: [-2.933, 5.247, -0.007],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.14, 1, 4]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Roof Wall 2",
        scale: [1, 1, 1],
        position: [2.932, 5.248, -0.007],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.14, 1, 4]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      },
      {
        type: "mesh",
        name: "Roof Wall 3",
        scale: [1, 1, 1],
        position: [0, 5.231, -1.921],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [5.75, 0.96, 0.16]
        },
        material: {
          type: "meshStandardMaterial",
          color: wallColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Table",
    position: [-0.536, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Table Leg 1",
        scale: [1, 1, 1],
        position: [1.2, 0.8, -0.78],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.18, 0.6, 0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: tableColor
        }
      },
      {
        type: "mesh",
        name: "Table Leg 2",
        scale: [1, 1, 1],
        position: [1.2, 0.8, -1.464],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.18, 0.6, 0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: tableColor
        }
      },
      {
        type: "mesh",
        name: "Table Leg 3",
        scale: [1, 1, 1],
        position: [1.84, 0.8, -1.464],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.18, 0.6, 0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: tableColor
        }
      },
      {
        type: "mesh",
        name: "Table Leg 4",
        scale: [1, 1, 1],
        position: [1.84, 0.8, -0.78],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.18, 0.6, 0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: tableColor
        }
      },
      {
        type: "mesh",
        name: "Table Top",
        scale: [1, 1, 1],
        position: [1.522, 1.15, -1.13],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.82, 0.1, 0.84]
        },
        material: {
          type: "meshStandardMaterial",
          color: tableTopColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Donut",
    position: [-0.18, 0.164, 0.671],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Donut Top",
        scale: [1, 1, 1],
        position: [-1.602, 1.186, 0.906],
        rotation: [-1.57, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "TorusGeometry",
          args: [0.07, 0.06, 20, 24]
        },
        material: {
          type: "meshStandardMaterial",
          color: donutColor
        }
      },
      {
        type: "mesh",
        name: "Donut Bottom",
        scale: [1, 1, 1],
        position: [-1.6, 1.171, 0.904],
        rotation: [-1.57, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "TorusGeometry",
          args: [0.08, 0.06, 20, 24]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#ffd780"
        }
      }
    ]
  },
  {
    type: "mesh",
    name: "Bubble 1",
    scale: [1, 1, 1],
    position: [-1.145, 2.724, -0.412],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    geometry: {
      type: "SphereGeometry",
      args: [0.24, 32, 16]
    },
    material: {
      type: "meshPhysicalMaterial",
      color: "white",
      roughess: 0.2,
      clearcoat: 0.4,
      clearcoatRoughness: 0.24,
      transmission: 1,
      thickness: -0.06
    }
  },
  {
    type: "mesh",
    name: "Bubble 2",
    scale: [1, 1, 1],
    position: [-1.145, 3.567, 1.276],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    geometry: {
      type: "SphereGeometry",
      args: [0.14, 32, 16]
    },
    material: {
      type: "meshPhysicalMaterial",
      color: "white",
      roughess: 0.2,
      clearcoat: 0.4,
      clearcoatRoughness: 0.24,
      transmission: 1,
      thickness: -0.06
    }
  },
  {
    type: "mesh",
    name: "Bubble 3",
    scale: [1, 1, 1],
    position: [-0.452, 3.839, 0.426],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    geometry: {
      type: "SphereGeometry",
      args: [0.18, 32, 16]
    },
    material: {
      type: "meshPhysicalMaterial",
      color: "white",
      roughness: 0.2,
      clearcoat: 0.4,
      clearcoatRoughness: 0.24,
      transmission: 1,
      thickness: -0.06
    }
  },
  {
    type: "mesh",
    name: "Torus Knot",
    scale: [1, 1, 1],
    position: [-1.868, 0.905, -1.549],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    geometry: {
      type: "TorusKnotGeometry",
      args: [0.24, 0.08, 64, 16]
    },
    material: {
      type: "meshStandardMaterial",
      color: torusKnotColor
    }
  },
  {
    type: "group",
    name: "Record Player",
    position: [-0.56, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Record Player Base",
        scale: [1, 1, 1],
        position: [1.536, 1.286, -1.11],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.64, 0.16, 0.68]
        },
        material: {
          type: "meshStandardMaterial",
          color: recordPlayerColor
        }
      },
      {
        type: "mesh",
        name: "Record Player Speaker 1",
        scale: [1, 1, 1],
        position: [1.216, 1.286, -1.253],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.02, 0.12, 0.22]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#343434"
        }
      },
      {
        type: "mesh",
        name: "Record Player Speaker 2",
        scale: [1, 1, 1],
        position: [1.216, 1.286, -0.943],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.02, 0.12, 0.22]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#343434"
        }
      },
      {
        type: "mesh",
        name: "Record Player Needle",
        scale: [1, 1, 1],
        position: [1.725, 1.386, -0.903],
        rotation: [0, -0.8, -0.13],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.26, 0.02, 0.02]
        },
        material: {
          type: "meshStandardMaterial",
          color: "white"
        }
      },
      {
        type: "mesh",
        name: "Record",
        scale: [1.5, 1.5, 0.16],
        position: [1.538, 1.372, -1.11],
        rotation: [1.57, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "TorusGeometry",
          args: [0.08, 0.08, 8, 24]
        },
        material: {
          type: "meshStandardMaterial",
          color: "black"
        }
      },
      {
        type: "mesh",
        name: "Record Label",
        scale: [0.7, 0.7, 0.16],
        position: [1.528, 1.378, -1.11],
        rotation: [1.57, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "TorusGeometry",
          args: [0.08, 0.08, 8, 24]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#ababab"
        }
      }
    ]
  },
  {
    type: "group",
    name: "Streamer 1",
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Streamer 1 Bead 1",
        scale: [1, 1, 1],
        position: [-2.634, 4.333, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 2",
        scale: [1, 1, 1],
        position: [-2.466, 4.179, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 3",
        scale: [1, 1, 1],
        position: [-2.317, 4.03, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 4",
        scale: [1, 1, 1],
        position: [-2.148, 3.91, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 5",
        scale: [1, 1, 1],
        position: [-1.961, 3.798, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 6",
        scale: [1, 1, 1],
        position: [-1.769, 3.798, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 7",
        scale: [1, 1, 1],
        position: [-1.578, 3.91, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 8",
        scale: [1, 1, 1],
        position: [-1.423, 4.03, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 9",
        scale: [1, 1, 1],
        position: [-1.259, 4.179, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 1 Bead 10",
        scale: [1, 1, 1],
        position: [-1.09, 4.333, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Streamer 2",
    position: [1.666, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Streamer 2 Bead 1",
        scale: [1, 1, 1],
        position: [-2.634, 4.333, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 2",
        scale: [1, 1, 1],
        position: [-2.466, 4.179, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 3",
        scale: [1, 1, 1],
        position: [-2.317, 4.03, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 4",
        scale: [1, 1, 1],
        position: [-2.148, 3.91, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 5",
        scale: [1, 1, 1],
        position: [-1.961, 3.798, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 6",
        scale: [1, 1, 1],
        position: [-1.769, 3.798, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 7",
        scale: [1, 1, 1],
        position: [-1.578, 3.91, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 8",
        scale: [1, 1, 1],
        position: [-1.423, 4.03, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 9",
        scale: [1, 1, 1],
        position: [-1.259, 4.179, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      },
      {
        type: "mesh",
        name: "Streamer 2 Bead 10",
        scale: [1, 1, 1],
        position: [-1.09, 4.333, -1.58],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.14]
        },
        material: {
          type: "meshStandardMaterial",
          color: streamerColor
        }
      }
    ]
  },
  {
    type: "group",
    name: "Roof Table 1",
    position: [0, 0, 0],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Roof Table 1 Leg 1",
        scale: [1, 1, 1],
        position: [-1.36, 4.9, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.2, 0.5, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Leg 2",
        scale: [1, 1, 1],
        position: [-0.065, 4.9, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.2, 0.5, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Top",
        scale: [1, 1, 1],
        position: [-0.7, 5.25, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [1.5, 0.2, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: rugColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Pot",
        scale: [1, 1, 1],
        position: [-0.7, 5.4, 0.875],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "CylinderGeometry",
          args: [0.15, 0.15, 0.15, 8, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#fbba82"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Flower 1",
        scale: [1, 1, 1],
        position: [-0.778, 5.57, 0.847],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Flower 2",
        scale: [1, 1, 1],
        position: [-0.628, 5.57, 0.845],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 1 Flower 3",
        scale: [1, 1, 1],
        position: [-0.699, 5.71, 0.882],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      }
    ]
  },
  {
    type: "group",
    name: "Roof Table 2",
    position: [0, 0, -1],
    yRotationSpeed: 0,
    meshes: [
      {
        type: "mesh",
        name: "Roof Table 2 Leg 1",
        scale: [1, 1, 1],
        position: [-1.36, 4.9, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.2, 0.5, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Leg 2",
        scale: [1, 1, 1],
        position: [-0.065, 4.9, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [0.2, 0.5, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: couchColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Top",
        scale: [1, 1, 1],
        position: [-0.7, 5.25, 0.889],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "BoxGeometry",
          args: [1.5, 0.2, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: rugColor
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Pot",
        scale: [1, 1, 1],
        position: [-0.7, 5.4, 0.875],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "CylinderGeometry",
          args: [0.15, 0.15, 0.15, 8, 1]
        },
        material: {
          type: "meshStandardMaterial",
          color: "#fbba82"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Flower 1",
        scale: [1, 1, 1],
        position: [-0.778, 5.57, 0.847],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Flower 2",
        scale: [1, 1, 1],
        position: [-0.628, 5.57, 0.845],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      },
      {
        type: "mesh",
        name: "Roof Table 2 Flower 3",
        scale: [1, 1, 1],
        position: [-0.699, 5.71, 0.882],
        rotation: [0, 0, 0],
        yRotationSpeed: 0,
        geometry: {
          type: "DodecahedronGeometry",
          args: [0.1]
        },
        material: {
          type: "meshNormalMaterial"
        }
      }
    ]
  }
];

export default treehouseScene;
