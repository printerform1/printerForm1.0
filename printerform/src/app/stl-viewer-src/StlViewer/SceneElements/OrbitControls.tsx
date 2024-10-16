import { EventManager, PrimitiveProps, useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as React from 'react';
import { OrbitControls as StdOrbitControls } from 'three-stdlib/controls/OrbitControls';

export type OrbitControlsProps = Omit<PrimitiveProps, 'object'> | { onOrbitChange?: () => void; };

const OrbitControls: React.FC<OrbitControlsProps> = (props) => {
  const camera = useThree((state) => state.camera);
  const controls = React.useMemo(() => new StdOrbitControls(camera), [camera]);

  const gl = useThree((state) => state.gl);
  const events = useThree((state) => state.events) as EventManager<HTMLElement>;
  const domElement = events.connected ?? gl.domElement;

  useEffect(() => {
    controls.connect(domElement);
    controls.addEventListener("change", props.onOrbitChange);

    return () => {
      controls.removeEventListener("change", props.onOrbitChange);
      controls.dispose();
    };
  });

  useFrame(() => {
    controls.update();
  }, -1);

  return <primitive object={controls} {...props} />;
};

export default OrbitControls;
