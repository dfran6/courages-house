import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useHouseAnimation } from "./useHouseAnnimation";

export function House({ progress }) {

  const houseRef = useRef();

  const { scene, nodes } = useGLTF(
    "https://pub-cff9d7fca7c74df2998591750ffbdbcb.r2.dev/models/couragesHouse3.gltf"
  );

  // console.log(nodes);

  useHouseAnimation(houseRef, nodes, progress);


  return (
    <group ref={houseRef} castShadow>
      <axesHelper args={[10]} />
      <gridHelper args={[10, 10]} />
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(
  "https://pub-cff9d7fca7c74df2998591750ffbdbcb.r2.dev/models/couragesHouse3.gltf"
);