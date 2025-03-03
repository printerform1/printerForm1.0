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
        const fileUrl = URL.createObjectURL(file);
        setModelUrl(fileUrl);
        setPreviewModelUrl(fileUrl);

        // Store the model URL and filename in localStorage
        localStorage.setItem("stlFileUrl", fileUrl);
        localStorage.setItem("stlFileName", file.name);
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

    const setViewDirection = (direction: string) => {
        toolbarRef.current?.setViewDirection(direction);
    };

    useEffect(() => {
        const globalKeyDown = (e: KeyboardEvent) => {
            if (e.key.toUpperCase() === "R") {
                setRotationGizmoShown(old => !old);
            }
        };

        document.addEventListener("keydown", globalKeyDown);

        return () => document.removeEventListener("keydown", globalKeyDown);
    }, []);

    // Check if returning to the page and an STL file is already stored
    const [isReturningWithStoredFile, setIsReturningWithStoredFile] = useState(false);
    useEffect(() => {
        const returningToUpload = localStorage.getItem("returningToUpload");
        const savedModelUrl = localStorage.getItem("stlFileUrl");
        const savedFileName = localStorage.getItem("stlFileName");

        if (returningToUpload === "true" && savedModelUrl && savedFileName) {
            setModelUrl(savedModelUrl);
            setPreviewModelUrl(savedModelUrl);
            setProjectFilename(`printerForm-${savedFileName}.pdf`);
            document.title = `printerForm-${savedFileName}.pdf`;

            // Clear the flag after use
            localStorage.removeItem("returningToUpload");

            setIsReturningWithStoredFile(true); // Set flag to indicate we have a stored file
        }
    }, []);
    
    // Function to show the information modal immediately
    useEffect(() => {
        showModal(
            <PromptModal
                title="File Types Information"
                bodyText={
                    `STL file: An STL file is a type of 3D model made of triangles. It is often used for 3D printing.\n\n` +
                    `CAD: CAD stands for Computer-Aided Design. It is software used to create detailed 2D and 3D drawings and models.\n\n` +
                    `You can learn more in [Resources](https://printerform1.github.io/printerForm1.0/resources).\n\n`
                }
                onConfirm={() => {}}  // Do nothing, just close the modal
                onCancel={undefined}  // Hide cancel button by not providing an action
                confirmText="Got it"
            />
        );
    }, []);  // Run only once when the component mounts



    // useEffect(() => {
    //     showModal(
    //         <PromptModal
    //             title="File Types Information"
    //             bodyText={`STL file: An STL file is a type of 3D model made of triangles. It is often used for 3D printing.\n\nCAD: CAD stands for Computer-Aided Design. It is software used to create detailed 2D and 3D drawings and models.\n\nYou can learn more about these file types in the <a href="/printerForm1.0/resources" style="color: #00aaff; text-decoration: underline;">Resources</a> section.`}
    //             onConfirm={() => {}} 
    //             onCancel={undefined} 
    //             confirmText="Got it"
    //             // isHtml={true} 
    //         />
    //     );
    // }, []);

    return (
        <>
            <ModalContainer />

            <div
                className="flex flex-col h-screen w-full"
                onClick={() => toolbarRef.current?.setColorPickerOpen(false)}
            >
            {/* {(!isReturningWithStoredFile && !modelUrl) && (
                <button 
                className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={() => window.location.href = "resources"}
            >
                Resources
            </button>
            )} */}
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
                    {/* Render based on the isReturningWithStoredFile flag */}
                    {(!isReturningWithStoredFile && !modelUrl) && (
                        <div className="m-12 h-full">
                            <DragDropFileUpload
                                className="flex w-full h-full items-center justify-center cursor-pointer rounded-lg border-dashed border-2 transition duration-200"
                                dragActiveClassName="bg-[#262626] border-blue-500"
                                dragInactiveClassName="bg-[#2c2c2c] border-gray-500"
                                onFileSelect={onFileSelect}
                            >
                                <p style={{ color: '#D3D3D3' }}>Drag/select STL model file here</p>
                            </DragDropFileUpload>
                        </div>
                    )}

                    {(isReturningWithStoredFile || modelUrl) && (
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
                                    url={modelUrl || ""}
                                />
                            </DragDropFileUpload>

                            <PropertiesControlPanel
                                ref={toolbarRef}
                                modelColor={{
                                    value: modelColor,
                                    set: setModelColor
                                }}
                                modelRefs={[previewModelRef, modelRef]}
                                setViewDirection={setViewDirection}
                                cameraRef={cameraRef}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default () => <ModalProvider><Upload /></ModalProvider>;
