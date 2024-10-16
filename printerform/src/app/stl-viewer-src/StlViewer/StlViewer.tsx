import React, { HTMLProps } from 'react';
import { Canvas } from '@react-three/fiber';
import SceneSetup, { SceneSetupProps } from './SceneSetup';
import ErrorBoundary from './ErrorBoundary';
import { PCFSoftShadowMap } from 'three';

type DivProps = Omit<HTMLProps<HTMLDivElement>, 'color' | 'onError'>;

export interface StlViewerProps extends DivProps, SceneSetupProps {
    onError?: (err: Error) => void;
    canvasId?: string;
}

const StlViewer: React.FC<StlViewerProps> = (
    {
        url,
        cameraProps,
        modelProps,
        floorProps,
        children,
        onError,
        extraHeaders,
        onFinishLoading,
        onOrbitChange,
        onRotationControlChange,
        canvasId,
        shadows,
        objectRespectsFloor,
        showAxes,
        showAxisGizmo,
        showGrid,
        orbitControls,
        showRotationGizmo,
        cameraInitialPosition,
        ...otherProps
    }
) => {
    const sceneProps: SceneSetupProps = {
        url,
        cameraProps,
        modelProps,
        floorProps,
        extraHeaders,
        onFinishLoading,
        onOrbitChange,
        onRotationControlChange,
        shadows,
        objectRespectsFloor,
        showAxes,
        showAxisGizmo,
        showGrid,
        orbitControls,
        showRotationGizmo,
        cameraInitialPosition
    };

    return (
        <div {...otherProps}>
            <ErrorBoundary onError={onError}>
                <React.Suspense fallback={null}>
                    <Canvas
                        shadows
                        gl={{
                            preserveDrawingBuffer: true,
                            shadowMapType: PCFSoftShadowMap,
                            antialias: true
                        }}
                        id={canvasId}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <SceneSetup {...sceneProps} />
                        {children}
                    </Canvas>
                </React.Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default StlViewer;
