import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface MyDropzoneProps {
  guideMsg: string;
}

function MyDropzone({ guideMsg }: MyDropzoneProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const firstFile = acceptedFiles[0];
    if (firstFile) {
      setFileName(firstFile.name);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <div className="flex items-center justify-center w-full">
      <label
        {...getRootProps()}
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="40"
            fill="#6b7280"
          >
            <path d="M340.666-440.666h38v-82H424q16.149 0 27.074-10.925t10.925-27.075V-606q0-16.15-10.925-27.075T424-644h-83.334v203.334Zm38-120V-606H424v45.334h-45.334Zm126 120h82.667q15.667 0 26.833-10.925 11.167-10.925 11.167-27.075V-606q0-16.15-11.167-27.075Q603-644 587.333-644h-82.667v203.334Zm38-38V-606h44.667v127.334h-44.667Zm128.667 38h38v-82H756v-38h-46.667V-606H756v-38h-84.667v203.334ZM279.999-213.333q-27 0-46.833-19.833t-19.833-46.833v-533.335q0-27 19.833-46.833T279.999-880h533.335q27 0 46.833 19.833T880-813.334v533.335q0 27-19.833 46.833t-46.833 19.833H279.999Zm0-66.666h533.335v-533.335H279.999v533.335ZM146.666-80q-27 0-46.833-19.833T80-146.666v-600.001h66.666v600.001h600.001V-80H146.666Zm133.333-733.334v533.335-533.335Z" />
          </svg>
          <p className="mt-5 mb-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-500">{guideMsg}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {fileName ? (
              <p className="text-gray-500 flex">
                선택된 파일:
                <pre className="text-blue-500 font-bold"> {fileName}</pre>
              </p>
            ) : null}
          </p>
        </div>
        <input
          {...getInputProps()}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
}

export default MyDropzone;
