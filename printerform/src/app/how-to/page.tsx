import React from "react";
import folding from "../assets/IMG_7545.jpg";
import stlEditor from "../assets/stlEditor.png";
import pdf from "../assets/pdf.png";
import upload from "../assets/upload.png";
import howto1 from "../assets/IMG_7606.jpg";
import howto2 from "../assets/IMG_7630.jpg";
import howto3 from "../assets/IMG_7655.jpg";

const HowTo = () => {
  return (
    <div className="min-h-screen w-full bg-white p-10 mx-auto max-w-7xl">
      {" "}
      <h1
        className="font-fatfrank text-8xl font-bold mt-24 mb-10 text-center"
        style={{ color: "#40001C" }}
      >
        Instructions
      </h1>
      {/* Step 1: Upload */}
      <div className="mb-10 flex items-center space-x-6">
        <img
          src={upload.src}
          alt="Upload"
          className="w-80 h-80 bg-gray-300 object-cover flex-shrink-0"
          style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
        ></img>
        <div>
          <h2 className="text-5xl mb-5" style={{ color: "#40001C" }}>
            1. Upload
          </h2>
          <p className="text-xl" style={{ color: "#40001C" }}>
            Using any 3D modeling software or 3D print gallery site, create or
            select your desired model. Export your chosen part as an {" "}
            <a
            href="https://en.wikipedia.org/wiki/STL_(file_format)"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            STL file
          </a>{" "}
            type. Then upload your STL to PrinterForm. You can find more about STL files in{" "}
            <a
              href="/resources"
              className="underline text-blue-600 hover:text-blue-800"
            >
              resources
            </a>.
          </p>
        </div>
      </div>
      {/* Step 2: Modify */}
      <div className="mb-10 flex items-center space-x-6">
        <div>
          <h2 className="text-5xl mb-5" style={{ color: "#40001C" }}>
            2. Modify
          </h2>
          <p className="text-xl " style={{ color: "#40001C" }}>
            Once you&apos;ve uploaded your file, select the layout that best fits
            your object. After selecting the layout, you can modify your
            selection using the drop-down tools and sliders located on the right
            of your file preview.
          </p>
        </div>
        <img
          src={stlEditor.src}
          alt="STL Editor"
          className="w-80 h-80 bg-gray-300 object-cover flex-shrink-0"
          style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
        ></img>
      </div>
      {/* Step 3: Download */}
      <div className="mb-10 flex items-center space-x-6">
        <img
          src={pdf.src}
          alt="PDF"
          className="w-80 h-80 bg-gray-300 object-cover flex-shrink-0"
          style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
        ></img>
        <div>
          <h2 className="text-5xl mb-5 " style={{ color: "#40001C" }}>
            3. Download
          </h2>
          <p className="text-xl " style={{ color: "#40001C" }}>
            After finalizing your selections and file layout, confirm after
            viewing your print preview and select download as a PDF file type.
            Save your file in an accessible place to use for printing.
          </p>
        </div>
      </div>
      {/* Step 4: Print and Fold */}
      <div className="mb-10 flex items-center space-x-6">
        <div>
          <h2 className="text-5xl mb-5" style={{ color: "#40001C" }}>
            4. Print and Fold
          </h2>
          <p className="text-xl " style={{ color: "#40001C" }}>
            Using a standard inkjet or laser printer and 8.5” x 11” paper, print
            your saved PDF. Once you&apos;ve printed out your PDF, use the dots and
            lines shown as instructions for how to fold the sheet into your 3D
            object. (Note that the locations of the lines and dots will change
            based on the size and shape of your file as well as the layout type
            you selected.)
          </p>
        </div>
        <img
          className="w-80 h-80 bg-gray-300 object-cover flex-shrink-0"
          src={folding.src}
          alt=""
          style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)" }}
        ></img>
      </div>
      <div className="flex flex-col items-center mt-[100px]">
        <div className="gap-[40px] flex">
          <img
            src={howto1.src}
            alt="How To Example 1"
            className="bg-white-400 w-[300px] h-[200px] rounded drop-shadow"
          ></img>
          <img
            src={howto2.src}
            alt="How To Example 2"
            className="bg-white-400 w-[300px] h-[200px] rounded drop-shadow"
          ></img>
          <img
            src={howto3.src}
            alt="How To Example 3"
            className="bg-white-400 w-[300px] h-[200px] rounded drop-shadow"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
