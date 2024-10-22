import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { STLLoader } from 'three-stdlib';
import { Box3, BufferGeometry, Color, Euler, Group, Mesh, Object3D, Object3DEventMap } from 'three';
import { STLExporter } from './exporters/STLExporter';
import Model3D, { ModelDimensions } from './SceneElements/Model3D';
import Floor from './SceneElements/Floor';
import Lights from './SceneElements/Lights';
import Camera, { CameraPosition, polarToCartesian } from './SceneElements/Camera';
import OrbitControls from './SceneElements/OrbitControls';
import type { RootState } from '@react-three/fiber';
import { Environment, GizmoHelper, GizmoViewport, Grid, TransformControls, TransformControlsProps } from '@react-three/drei';
import { OrbitControls as DreiOrbitControls } from "@react-three/drei";

const INITIAL_LATITUDE = Math.PI / 8;
const INITIAL_LONGITUDE = -Math.PI / 8;
const CAMERA_POSITION_DISTANCE_FACTOR = 1;
const LIGHT_DISTANCE = 350;
const FLOOR_DISTANCE = 0.4;
const BACKGROUND = new Color('white');

export interface FloorProps {
    gridWidth?: number;
    gridLength?: number;
}

export type CameraRef = {
    camera: RootState["camera"];
    setCameraPosition: (position: CameraPosition) => any;
};

export interface CameraProps {
    ref?: { current?: null | CameraRef; };
    initialPosition?: CameraPosition;
}

export interface ModelRef {
    model: Mesh;
    save: () => Blob;
}

export interface ModelProps {
    ref?: { current?: null | ModelRef; };
    scale?: number;
    positionX?: number;
    positionY?: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
    color?: CSSProperties['color'];
    geometryProcessor?: (geometry: BufferGeometry) => BufferGeometry;
}

export interface SceneSetupProps {
    url: string;
    /** @deprecated use cameraProps.initialPosition instead */
    cameraInitialPosition?: Partial<CameraPosition>;
    extraHeaders?: Record<string, string>;
    shadows?: boolean;
    objectRespectsFloor?: boolean;
    showAxes?: boolean;
    showAxisGizmo?: boolean;
    showGrid?: boolean;
    orbitControls?: boolean;
    showRotationGizmo?: boolean;
    onFinishLoading?: (ev: ModelDimensions) => any;
    onOrbitChange?: () => void;
    onRotationControlChange?: (rotation: Euler) => void;
    cameraProps?: CameraProps;
    modelProps?: ModelProps;
    floorProps?: FloorProps;
}

const SceneSetup: React.FC<SceneSetupProps> = (
    {
        url,
        extraHeaders,
        shadows = false,
        objectRespectsFloor = true,
        showAxes = false,
        showAxisGizmo = false,
        showGrid = false,
        orbitControls = false,
        showRotationGizmo = false,
        onFinishLoading = () => { },
        onOrbitChange,
        onRotationControlChange,
        cameraInitialPosition: {
            latitude: deprecatedLatitude,
            longitude: deprecatedLongitude,
            distance: deprecatedDistanceFactor
        } = {},
        cameraProps: {
            ref: cameraRef,
            initialPosition: {
                latitude = INITIAL_LATITUDE,
                longitude = INITIAL_LONGITUDE,
                distance: distanceFactor = undefined
            } = {}
        } = {},
        modelProps: {
            ref: modelRef,
            scale = 1,
            positionX,
            positionY,
            rotationX = 0,
            rotationY = 0,
            rotationZ = 0,
            color = 'grey',
            geometryProcessor
        } = {},
        floorProps: {
            gridWidth,
            gridLength
        } = {}
    }
) => {
    const { camera } = useThree();
    const [mesh, setMesh] = useState<Mesh>();

    const [meshDims, setMeshDims] = useState<ModelDimensions>({
        width: 0,
        height: 0,
        length: 0,
        boundingRadius: 0
    });

    const [cameraInitialPosition, setCameraInitialPosition] = useState<CameraPosition>();

    const [modelCenter, setModelCenter] = useState<[number, number, number]>([0, 0, 0]);
    const [sceneReady, setSceneReady] = useState(false);
    useEffect(() => {
        setSceneReady(false);
    }, [url]);

    const geometry = useLoader(
        STLLoader,
        url,
        (loader) => loader.setRequestHeader(extraHeaders ?? {})
    );

    const processedGeometry = useMemo(
        () => geometryProcessor?.(geometry) ?? geometry,
        [geometry, geometryProcessor]
    );

    function calculateCameraDistance(boundingRadius: number, factor?: number): number {
        const maxGridDimension = Math.max(gridWidth ?? 0, gridLength ?? 0);
        if (maxGridDimension > 0) {
            return maxGridDimension * (factor ?? 1);
        } else {
            return boundingRadius * (factor ?? CAMERA_POSITION_DISTANCE_FACTOR);
        }
    }

    function onLoaded(dims: ModelDimensions, mesh: Mesh): void {
        setMesh(mesh);
        const { width, length, height, boundingRadius } = dims;
        setMeshDims(dims);
        setModelCenter([positionX ?? width / 2, positionY ?? length / 2, objectRespectsFloor ? height / 2 : 0]);
        setCameraInitialPosition({
            latitude: deprecatedLatitude ?? latitude,
            longitude: deprecatedLongitude ?? longitude,
            distance: calculateCameraDistance(boundingRadius, deprecatedDistanceFactor ?? distanceFactor)
        });
        onFinishLoading(dims);
        setTimeout(() => setSceneReady(true), 100); // let the three.js render loop place things
    }

    useEffect(() => {
        if (cameraRef == null) return;

        const setCameraPosition: CameraRef["setCameraPosition"] = ({ latitude, longitude, distance: factor }) => {
            const distance = calculateCameraDistance(meshDims.boundingRadius, factor);
            const [x, y, z] = polarToCartesian({ latitude, longitude, distance });
            const [cx, cy, cz] = modelCenter;
            camera.position.set(x + cx, y + cy, z + cz);
            camera.lookAt(cx, cy, cz);
        };

        cameraRef.current = {
            camera,
            setCameraPosition
        };
    }, [camera, cameraRef, modelCenter, meshDims]);

    useEffect(() => {
        if ((modelRef == null) || (mesh == null)) return;
        modelRef.current = {
            save: () => new Blob(
                [new STLExporter().parse(mesh, { binary: true })],
                { type: 'application/octet-stream' }
            ),
            model: mesh
        };
    }, [mesh, modelRef]);

    useFrame(({ scene }) => {
        if (!objectRespectsFloor) return;

        const mesh = scene.getObjectByName('mesh') as Mesh;
        const group = scene.getObjectByName('group') as Group;
        const bbox = new Box3().setFromObject(mesh);
        const height = bbox.max.z - bbox.min.z;
        group.position.z = height / 2;
    });

    const modelPosition: [number, number, number] = [
        positionX ?? (meshDims.width * scale) / 2,
        positionY ?? (meshDims.length * scale) / 2,
        0
    ];

    const GRID_SECTION_SIZE = 30;
    const CELLS_IN_GRID_SECTION = 5;

    const scene = useThree((state) => state.scene);

    const transformControlRef = useRef(null);

    return (
        <>
            <scene background={BACKGROUND} />
            {sceneReady && showAxes && <axesHelper scale={[50, 50, 50]} />}
            {(cameraInitialPosition != null) && <Camera
                initialPosition={cameraInitialPosition}
                center={modelCenter}
            />}

            <Model3D
                name={'group'}
                meshProps={{ name: 'mesh' }}
                scale={scale}
                geometry={processedGeometry}
                position={modelPosition}
                rotation={[rotationX, rotationY, rotationZ]}
                visible={sceneReady}
                materialProps={{ color }}
                onLoaded={onLoaded}
            />

            {showGrid && (
                <Grid
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                    cellSize={GRID_SECTION_SIZE / CELLS_IN_GRID_SECTION}
                    cellThickness={1}
                    cellColor="#6f6f6f"
                    sectionSize={GRID_SECTION_SIZE}
                    sectionThickness={1.25}
                    sectionColor={'#e0dede'}
                    fadeDistance={1000}
                    fadeStrength={10}
                    // cellColor={'#f2f2f2'}
                    followCamera={false}
                    infiniteGrid={true}
                    args={[10, 10]}
                />
            )}
            {/* <Floor
                width={gridWidth ?? gridLength}
                length={gridLength ?? gridWidth}
                visible={sceneReady}
                noShadow={!shadows}
                offset={FLOOR_DISTANCE}
            /> */}
            <Lights
                distance={LIGHT_DISTANCE}
                offsetX={modelPosition[0]}
                offsetY={modelPosition[1]}
            />

            {sceneReady && showAxisGizmo && (
                <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                    <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
                </GizmoHelper>
            )}

            {sceneReady && orbitControls && <DreiOrbitControls makeDefault onChange={onOrbitChange} target={modelCenter} dampingFactor={0.2} />}
            {sceneReady && showRotationGizmo &&
                <TransformControls
                    ref={transformControlRef}
                    mode="rotate"
                    onObjectChange={(e) => {
                        if (transformControlRef.current) {
                            onRotationControlChange?.((transformControlRef.current as { object: Object3D; }).object.rotation as Euler);
                        }
                    }}
                    object={scene.getObjectByName("mesh")}
                />
            }
        </>
    );
};

export default SceneSetup;