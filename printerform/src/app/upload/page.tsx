"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ModelRef, StlViewer } from "../stl-viewer-src";
import type { CameraRef } from "../stl-viewer-src";
import { ModalContainer, ModalProvider, PromptModal, useModals } from "../Modals";
import DragDropFileUpload from "@/app-lib/upload/DragDropFileUpload";
import { AxisType } from "@/app-lib/upload/AxisRotationSelector";
import PropertiesControlPanel, { PropertiesControlPanelRef } from "@/app-lib/upload/PropertiesControlPanel";
import { Euler } from "three";
import Toolbar from "@/app-lib/upload/Toolbar";

const Upload = () => {
    const [projectFilename, setProjectFilename] = useState<string>();
    const [modelUrl, setModelUrl] = useState<string>();
    const [previewModelUrl, setPreviewModelUrl] = useState<string>();
    const [modelColor, setModelColor] = useState("#8E2929");
    const [rotationGizmoShown, setRotationGizmoShown] = useState(false);

    const modelRef = useRef<ModelRef>(null);
    const previewModelRef = useRef<ModelRef>(null);

    const cameraRef = useRef<CameraRef>(null);
    const previewCameraRef = useRef<CameraRef>(null);

    const toolbarRef = useRef<PropertiesControlPanelRef>(null);


    const { showModal } = useModals();

    const stlLoadCurve = (file: File) => {
        setModelUrl(URL.createObjectURL(file));
        setPreviewModelUrl(URL.createObjectURL(file));
    };

    const onFileSelect = (file: File) => {
        const defaultExportFileName = `printerForm-${file.name}.pdf`;

        setProjectFilename(defaultExportFileName);
        document.title = defaultExportFileName;

        stlLoadCurve(file);

        if (modelRef.current && previewModelRef.current) {
            for (const axis of ['x', 'y', 'z']) {
                previewModelRef.current.model.rotation[axis as AxisType] = 0;
                modelRef.current.model.rotation[axis as AxisType] = 0;
            }
        }

        toolbarRef.current?.updateRotations(new Euler());

        setRotationGizmoShown(false);
    };

    const exportQuery = useMemo(() => {
        return {
            modelUrl: modelUrl,
            modelColor: modelColor,
        };
    }, [modelUrl, modelColor]);

    useEffect(() => {
        const globalKeyDown = (e: KeyboardEvent) => {
            if (e.key.toUpperCase() === "R") {
                setRotationGizmoShown(old => !old);
            }
        };

        document.addEventListener("keydown", globalKeyDown);

        return () => document.removeEventListener("keydown", globalKeyDown);
    }, []);

    return (
        <>
            <ModalContainer />

            <div
                className="flex flex-col h-screen w-full"
                onClick={() => toolbarRef.current?.setColorPickerOpen(false)}
            >
                <Toolbar
                    modelLoaded={modelUrl !== undefined}
                    projectFilename={{
                        value: projectFilename,
                        set: setProjectFilename
                    }}
                    onFileSelect={onFileSelect}
                    exportQuery={exportQuery}
                />

                <div className="bg-[#1E1E1E] flex w-full h-full flex-col justify-center">
                    {!modelUrl && (
                        <div className="m-12 h-full">
                            <DragDropFileUpload
                                className="flex w-full h-full items-center justify-center cursor-pointer rounded-lg border-dashed border-2 transition duration-200"
                                dragActiveClassName="bg-[#262626] border-blue-500"
                                dragInactiveClassName="bg-[#2c2c2c] border-gray-500"
                                onFileSelect={onFileSelect}
                            >
                                <p className="text-white">Drag/select STL model file here</p>
                            </DragDropFileUpload>
                        </div>
                    )}

                    {modelUrl && (
                        <div className="relative flex grow flex-row w-full bg-[#2c2c2c]">
                            <div className="absolute bottom-4 left-4 z-30">
                                <div className="relative overflow-hidden border-gray-500 hover:border-blue-500 transition duration-100 rounded-xl border-2 w-80 h-48 shadow-xl">
                                    <StlViewer
                                        className="absolute inset-0 bg-[#444444]"
                                        modelProps={{
                                            ref: previewModelRef,
                                            color: modelColor,
                                        }}
                                        cameraProps={{
                                            ref: previewCameraRef
                                        }}
                                        shadows
                                        objectRespectsFloor={false}
                                        url={previewModelUrl as string}
                                    />
                                    <p className="absolute top-2 left-2">PRINCIPAL VIEW <span className="text-blue-500 font-bold">WIP</span></p>
                                </div>
                            </div>

                            <DragDropFileUpload
                                onFileSelect={(file) => {
                                    showModal(
                                        <PromptModal
                                            title="Model Reupload"
                                            bodyText={`Are you sure you would like to replace the current model with "${file.name}"?`}
                                            onConfirm={() => onFileSelect(file)}
                                        />
                                    );
                                }}
                                className="relative grow after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:transition after:duration-200 "
                                dragInactiveClassName="after:shadow-[inset_0_0_20px_transparent]"
                                dragActiveClassName="after:shadow-[inset_0_0_20px_#006bff]"
                                onlyAcceptDraggedFiles
                            >
                                <StlViewer
                                    className="absolute inset-0 bg-[#1E1E1E] cursor-grab active:cursor-grabbing"
                                    modelProps={{
                                        ref: modelRef,
                                        color: modelColor,
                                    }}
                                    cameraProps={{
                                        ref: cameraRef,
                                    }}
                                    onOrbitChange={() => {
                                        if (!cameraRef.current || !previewCameraRef.current) return;

                                        previewCameraRef.current.camera.copy(cameraRef.current.camera);
                                    }}
                                    onRotationControlChange={toolbarRef.current?.updateRotations}
                                    shadows
                                    showAxisGizmo
                                    showGrid
                                    showRotationGizmo={rotationGizmoShown}
                                    objectRespectsFloor={false}
                                    orbitControls
                                    url={modelUrl}
                                />
                            </DragDropFileUpload>

                            <PropertiesControlPanel
                                ref={toolbarRef}
                                modelColor={{
                                    value: modelColor,
                                    set: setModelColor
                                }}
                                modelRefs={[previewModelRef, modelRef]}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default () => <ModalProvider><Upload /></ModalProvider>;