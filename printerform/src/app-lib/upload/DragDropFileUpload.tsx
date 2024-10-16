import { ChangeEvent, DragEvent, PropsWithChildren, useRef, useState } from "react";

type DragDropFileUploadProps = {
    onFileSelect: (file: File) => void;
    onlyAcceptDraggedFiles?: boolean;
    className?: string;
    dragActiveClassName?: string;
    dragInactiveClassName?: string;
};

const DragDropFileUpload = ({
    onFileSelect,
    className,
    onlyAcceptDraggedFiles,
    dragActiveClassName,
    dragInactiveClassName,
    children
}: PropsWithChildren<DragDropFileUploadProps>) => {
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };

    const handleFileDrag = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files && e.currentTarget.files[0]) {
            onFileSelect(e.currentTarget.files[0]);
        }
    };

    return (
        <>
            <div
                className={`w-full h-full ${dragActive ? dragActiveClassName : dragInactiveClassName} ${className}`}
                onDragOver={handleFileDrag}
                onDragEnter={handleFileDrag}
                onDragLeave={handleFileDrag}
                onDrop={handleFileDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                {children}
            </div>
            <input
                className="hidden"
                ref={fileInputRef}
                type="file"
                id="input-file-upload"
                onChange={handleFileInputChange}
                tabIndex={-1}
                accept=".stl"
                onClick={(e) => {
                    if (onlyAcceptDraggedFiles) {
                        e.preventDefault();
                    }
                }}
            />
        </ >
    );
};

export default DragDropFileUpload;