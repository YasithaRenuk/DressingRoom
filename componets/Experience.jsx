import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  Environment,
} from "@react-three/drei";
import MaleID from "./Male";
import { useCustomization } from "../src/context/Customization";

const Experience = () => {
  const {back} = useCustomization();
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment={back} intensity={0.6} contactshdow={false}>
      <Environment preset={back} background blur={0.1} />
        {/* 3d objeect */}
        <MaleID />
        {console.log(back)}
      </Stage>
      {/* platfrom */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[1000, 600]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
