import Link from "next/link"
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

type ToolbarProps = {
    projectFilename: {
        value: string | undefined,
        set: Dispatch<SetStateAction<string | undefined>>
    };
    modelLoaded: boolean;
    onFileSelect: (file: File) => void
}

const Toolbar = ({ projectFilename, modelLoaded, onFileSelect }: ToolbarProps) => {
    const reuploadInputRef = useRef<HTMLInputElement>(null);

    const handleReupload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.files) return;

        onFileSelect(e.currentTarget.files[0]);
    };

    return (
        <div className="relative flex flex-row items-center justify-between bg-[#2c2c2c] h-12">
            <Link className="flex h-full items-center justify-center bg-red-500 p-5" href="/">
                Home
            </Link>

            {modelLoaded && (
                <>
                    <input
                        className="text-white text-center grow bg-transparent px-3 outline-none overflow-ellipsis"
                        type="text"
                        spellCheck={false}
                        value={projectFilename.value}
                        onFocus={(e) => e.currentTarget.select()}
                        onChange={(e) => projectFilename.set(e.currentTarget.value)}
                        onBlur={(e) => document.title = e.currentTarget.value}
                    />

                    <div className="flex flex-row h-full">
                        <button
                            className="flex h-full items-center justify-center p-5 bg-blue-900 cursor-pointer"
                            onClick={() => reuploadInputRef.current?.click()}
                        >
                            Reupload
                        </button>

                        <input
                            className="hidden"
                            ref={reuploadInputRef}
                            type="file"
                            id="file-reupload-input"
                            accept=".stl"
                            onChange={handleReupload}
                        />

                        <button className="flex h-full items-center justify-center p-5 bg-blue-700 cursor-pointer">
                            Export
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Toolbar;