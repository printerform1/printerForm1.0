import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { UrlObject } from "url";

type ToolbarProps = {
  projectFilename: {
    value: string | undefined;
    set: Dispatch<SetStateAction<string | undefined>>;
  };
  modelLoaded: boolean;
  onFileSelect: (file: File) => void;
  exportQuery: UrlObject["query"];
};

const Toolbar = ({
  projectFilename,
  modelLoaded,
  onFileSelect,
  exportQuery,
}: ToolbarProps) => {
  const reuploadInputRef = useRef<HTMLInputElement>(null);

  const handleReupload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;

    onFileSelect(e.currentTarget.files[0]);
  };

  return (
    <div className="relative flex flex-row items-center justify-between bg-[#2c2c2c] h-12">
      <Link className="flex h-full items-center justify-center p-5" href="/">
        <img src="logo.png" className="w-[100px] shadow-none" alt="" />
      </Link>

      {!modelLoaded && (
        <div className="flex flex-row h-full">
          <Link
            href="/resources"
            className="flex h-full items-center justify-center p-5 bg-blue-700 text-white cursor-pointer"
          >
            Resources
          </Link>
        </div>
      )}

      {modelLoaded && (
        <>
          <input
            className="text-white text-center grow bg-transparent px-3 outline-none overflow-ellipsis"
            type="text"
            spellCheck={false}
            value={projectFilename.value}
            onFocus={(e) => e.currentTarget.select()}
            onChange={(e) => projectFilename.set(e.currentTarget.value)}
            onBlur={(e) => (document.title = e.currentTarget.value)}
          />

          <div className="flex flex-row h-full">
            <button
              className="flex h-full items-center justify-center p-5 bg-blue-900 text-white cursor-pointer"
              onClick={() => reuploadInputRef.current?.click()}
            >
              {/* Reupload */}
              Upload
            </button>

            <input
              className="hidden"
              ref={reuploadInputRef}
              type="file"
              id="file-reupload-input"
              accept=".stl"
              onChange={handleReupload}
            />

            <Link
              href={{
                pathname: "/export",
                query: exportQuery,
              }}
              className="flex h-full items-center justify-center p-5 bg-blue-700 text-white cursor-pointer"
            >
              Export
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Toolbar;
