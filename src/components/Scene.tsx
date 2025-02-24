import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useModelStore } from '../store/modelStore';

export const Scene = () => {
  const objects = useModelStore((state) => state.objects);

  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 75 }}
      className="w-full h-full bg-gray-900"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Grid
        infiniteGrid
        cellSize={1}
        sectionSize={3}
        fadeDistance={30}
        fadeStrength={1}
      />
      <OrbitControls />
      {objects.map((object, index) => (
        <primitive key={index} object={object} />
      ))}
    </Canvas>
  );
};