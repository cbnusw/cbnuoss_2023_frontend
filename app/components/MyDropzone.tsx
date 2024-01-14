import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import dynamic from 'next/dynamic';

interface MyDropzoneProps {
  type: string;
  guideMsg: string;
  setIsFileUploaded: (isUploaded: boolean) => void;
  isFileUploaded: boolean;
  initPdfUrl: string;
  initInAndOutFileUrls: string[];
  setUploadedCodeFileUrl?: (url: string) => void; // 소스 코드 파일 URL 업데이트 함수
  setUploadedPdfFileUrl?: (url: string) => void; // PDF 파일 URL 업데이트 함수
  setUploadedProblemInAndOutFileUrls?: (urls: string[]) => void; // in/out 파일 URL 업데이트 함수
}

type FileObject = {
  name: string;
  url: string;
};

type Pair = {
  in: FileObject;
  out: FileObject;
};

const PDFViewer = dynamic(() => import('@/app/components/PDFViewer'), {
  ssr: false,
});

function MyDropzone(props: MyDropzoneProps) {
  const {
    type,
    guideMsg,
    setIsFileUploaded,
    isFileUploaded,
    initPdfUrl,
    initInAndOutFileUrls,
    setUploadedCodeFileUrl,
    setUploadedPdfFileUrl,
    setUploadedProblemInAndOutFileUrls,
  } = props;

  const [isDragEntered, setIsDragEntered] = useState(false);
  const [isDragAndDropped, setIsDragAndDropped] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [fileList, setFileList] = useState<FileObject[]>([]);
  const [fileNameList, setFileNameList] = useState<string[]>([]);
  const [fileURLList, setFileURLList] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const firstFile = acceptedFiles[0];
      switch (type) {
        case 'pdf':
          if (firstFile) {
            const fileUrl = URL.createObjectURL(firstFile);
            setFileList([{ name: firstFile.name, url: fileUrl }]);
            setFileNameList([firstFile.name]);
            setFileURLList([fileUrl]);
            setIsFileUploaded(true);
            setUploadedPdfFileUrl?.(fileUrl); // 업로드된 PDF 파일 URL을 부모 컴포넌트에 전달
          }
          break;
        case 'inOut':
          let newFilePairs: FileObject[] = [];
          let remainingFiles = [...acceptedFiles]; // Create a copy to manipulate while looping

          newFilePairs = [...fileList];

          // Use a while loop since we'll be modifying the array during iteration
          while (remainingFiles.length > 0) {
            const file = remainingFiles[0]; // Always check the first file in the array
            const splitName = file.name.split('.');
            const baseName = splitName.slice(0, -1).join('.'); // Remove extension
            const extension = splitName.pop()?.toLowerCase();

            if (extension && ['in', 'out'].includes(extension)) {
              const counterpartExtension = extension === 'in' ? 'out' : 'in';
              const counterpartFileName = `${baseName}.${counterpartExtension}`;

              const counterpartFileIndex = remainingFiles.findIndex(
                (f: File) => f.name === counterpartFileName,
              );

              // If we find a matching .in / .out file
              if (counterpartFileIndex !== -1) {
                const counterpartFile = remainingFiles[counterpartFileIndex];
                const fileObj1 = {
                  name: file.name,
                  url: URL.createObjectURL(file),
                };
                const fileObj2 = {
                  name: counterpartFile.name,
                  url: URL.createObjectURL(counterpartFile),
                };

                // Add both files to the pairs list
                newFilePairs.push(fileObj1, fileObj2);

                // Remove the matched files from our remaining files list
                remainingFiles.splice(counterpartFileIndex, 1); // remove counterpart file first
                remainingFiles.splice(0, 1); // then remove the current file
              } else {
                // If no counterpart file is found, simply remove the current file from the list
                remainingFiles.splice(0, 1);
              }
            } else {
              // If extension is not 'in' or 'out', simply remove the current file from the list
              remainingFiles.splice(0, 1);
              // if ()
            }
          }

          // Update state with both existing and new files
          setFileList(newFilePairs);
          setFileNameList(newFilePairs.map((f) => f.name));
          setFileURLList(newFilePairs.map((f) => f.url));

          // Update in/out file URLs
          const inOutUrls = newFilePairs.map((f) => f.url);
          setUploadedProblemInAndOutFileUrls?.(inOutUrls);

          // Check for valid pairs
          const hasValidPair = checkForValidPairs(newFilePairs);
          setIsFileUploaded(hasValidPair);
          break;
        case 'code':
          if (firstFile) {
            const fileUrl = URL.createObjectURL(firstFile);
            setFileList([{ name: firstFile.name, url: fileUrl }]);
            setFileNameList([firstFile.name]);
            setFileURLList([fileUrl]);
            setIsFileUploaded(true);
            setUploadedCodeFileUrl?.(fileUrl);
          }
          break;
      }
    },
    [
      type,
      fileList,
      setIsFileUploaded,
      setUploadedCodeFileUrl,
      setUploadedPdfFileUrl,
      setUploadedProblemInAndOutFileUrls,
    ],
  );

  const checkForValidPairs = (fileObjects: FileObject[]) => {
    const inFiles = fileObjects.filter((file) => file.name.endsWith('.in'));
    const outFiles = fileObjects.filter((file) => file.name.endsWith('.out'));

    return inFiles.some((inFile) => {
      const outFileName = inFile.name.replace('.in', '.out');
      return outFiles.some((outFile) => outFile.name === outFileName);
    });
  };

  const getInAndOutFilePairs = (): Pair[] => {
    const inFiles = fileList.filter((file) => file.name.endsWith('.in'));
    const outFiles = fileList.filter((file) => file.name.endsWith('.out'));

    return inFiles
      .map((inFile) => {
        const outFileName = inFile.name.replace('.in', '.out');
        const outFile = outFiles.find((file) => file.name === outFileName);
        return outFile ? { in: inFile, out: outFile } : null;
      })
      .filter((pair): pair is Pair => pair !== null); // 필터링하여 null이 아닌 쌍만 반환
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragEntered(true),
    onDragLeave: () => setIsDragEntered(false),
    onDropRejected: () => setIsDragEntered(false),
    onDropAccepted: () => setIsDragAndDropped(true),
    accept: type === 'pdf' ? { 'application/pdf': [] } : undefined,
    multiple: type === 'pdf' ? false : true,
  });

  const handleDeletePair = (
    e: React.MouseEvent<HTMLButtonElement>,
    pair: Pair,
  ) => {
    e.preventDefault();
    deletePair(pair);
    setIsFileUploaded(fileList.length > 2);
  };

  const deletePair = (pair: Pair) => {
    const updatedFileList = fileList.filter(
      (file) => file.url !== pair.in.url && file.url !== pair.out.url,
    );

    setFileList(updatedFileList);

    // fileNameList와 fileURLList도 업데이트
    const updatedFileNameList = updatedFileList.map((file) => file.name);
    const updatedFileURLList = updatedFileList.map((file) => file.url);

    setFileNameList(updatedFileNameList);
    setFileURLList(updatedFileURLList);

    // 부모 컴포넌트의 상태 업데이트
    setUploadedProblemInAndOutFileUrls?.(updatedFileURLList);
  };

  // Dropzone 테두리 활성화/비활성화 로직
  useEffect(() => {
    if (isDragAndDropped) setIsDragEntered(false);
  }, [isDragAndDropped, fileList.length, setIsFileUploaded]);

  useEffect(() => {
    if (!isFileUploaded) setIsDragAndDropped(false);
  }, [isDragEntered, isFileUploaded, setIsDragAndDropped]);

  useEffect(() => {
    if (!isInitialized) {
      if (type === 'pdf' && initPdfUrl) {
        // PDF 파일 이름 추출 및 초기화
        const fileName = initPdfUrl.split('/').pop() || 'Unknown PDF';
        const fileObject = {
          name: fileName,
          url: initPdfUrl,
        };
        setFileList([fileObject]);
        setFileNameList([fileObject.name]);
        setFileURLList([fileObject.url]);
        setIsFileUploaded(true);
      } else if (type === 'inOut' && initInAndOutFileUrls?.length > 0) {
        // in/out 파일 이름 추출 및 초기화
        const fileObjects = initInAndOutFileUrls.map((url) => {
          const fileName = url.split('/').pop() || 'Unknown File';
          return {
            name: fileName,
            url: url,
          };
        });
        setFileList(fileObjects);
        setFileNameList(fileObjects.map((file) => file.name));
        setFileURLList(fileObjects.map((file) => file.url));
        setIsFileUploaded(true);
      }
      setIsInitialized(true);
    }
  }, [
    type,
    initPdfUrl,
    initInAndOutFileUrls,
    isInitialized,
    setIsFileUploaded,
  ]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      <label
        {...getRootProps()}
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center w-full h-40 duration-150 border-2 border-gray-${
          isDragEntered ? '500' : isFileUploaded ? '500' : '300'
        } border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {type === 'pdf' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
              fill="#6b7280"
            >
              <path d="M340.666-440.666h38v-82H424q16.149 0 27.074-10.925t10.925-27.075V-606q0-16.15-10.925-27.075T424-644h-83.334v203.334Zm38-120V-606H424v45.334h-45.334Zm126 120h82.667q15.667 0 26.833-10.925 11.167-10.925 11.167-27.075V-606q0-16.15-11.167-27.075Q603-644 587.333-644h-82.667v203.334Zm38-38V-606h44.667v127.334h-44.667Zm128.667 38h38v-82H756v-38h-46.667V-606H756v-38h-84.667v203.334ZM279.999-213.333q-27 0-46.833-19.833t-19.833-46.833v-533.335q0-27 19.833-46.833T279.999-880h533.335q27 0 46.833 19.833T880-813.334v533.335q0 27-19.833 46.833t-46.833 19.833H279.999Zm0-66.666h533.335v-533.335H279.999v533.335ZM146.666-80q-27 0-46.833-19.833T80-146.666v-600.001h66.666v600.001h600.001V-80H146.666Zm133.333-733.334v533.335-533.335Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="45"
              viewBox="0 -960 960 960"
              width="45"
              fill="#6b7280"
              className="relative top-1"
            >
              <path d="M450.001-402.003v147.387q0 12.768 8.615 21.384 8.615 8.615 21.384 8.615t21.384-8.615q8.615-8.616 8.615-21.384v-147.387l52.925 52.925q4.461 4.461 10.038 6.692t11.153 1.923q5.577-.308 11.039-2.538 5.461-2.231 9.922-6.693 8.693-9.307 9-21.076.308-11.769-9-21.076l-99.769-99.769q-5.615-5.616-11.846-7.923-6.23-2.308-13.461-2.308t-13.461 2.308q-6.231 2.307-11.846 7.923l-99.769 99.769q-8.923 8.922-8.808 20.884.115 11.961 9.423 21.268 9.307 8.693 21.076 9 11.769.308 21.077-9l52.309-52.309ZM252.309-100.001q-30.308 0-51.308-21t-21-51.308v-615.382q0-30.308 21-51.308t51.308-21h287.769q14.461 0 27.807 5.616 13.346 5.615 23.193 15.461l167.844 167.844q9.846 9.847 15.461 23.193 5.616 13.346 5.616 27.807v447.769q0 30.308-21 51.308t-51.308 21H252.309Zm287.692-556.154V-800H252.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v615.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h455.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-447.692H576.155q-15.461 0-25.807-10.347-10.347-10.346-10.347-25.807ZM240-800v179.999V-800v640V-800Z" />
            </svg>
          )}

          <p className="mt-5 mb-1 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-500">{guideMsg}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {fileNameList[0] && (type === 'pdf' || type === 'code') ? (
              <p className="text-gray-500 flex">
                선택된 파일:
                <pre className="text-blue-500 font-bold">
                  {' '}
                  {fileNameList[0]}
                </pre>
              </p>
            ) : null}
          </p>
        </div>
        <input
          {...getInputProps()}
          id="dropzone-file"
          type="file"
          accept={type}
          className="hidden"
        />
      </label>

      {isFileUploaded ? (
        type === 'pdf' ? (
          <PDFViewer pdfFileURL={fileURLList[0]} />
        ) : (
          getInAndOutFilePairs().map((pair, index) => (
            <div
              key={index}
              className="flex justify-between border border-gray-400 rounded-[0.25rem] w-full px-2 py-2"
            >
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="25"
                  viewBox="0 -960 960 960"
                  width="25"
                  fill="#6b7280"
                >
                  <path d="M226.666-80q-27 0-46.833-19.833T160-146.666v-666.668q0-27 19.833-46.833T226.666-880H574l226 226v507.334q0 27-19.833 46.833T733.334-80H226.666Zm314.001-542.667v-190.667H226.666v666.668h506.668v-476.001H540.667ZM226.666-813.334v190.667-190.667 666.668-666.668Z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-gray-600">{pair.in.name}</span>
                  <span className="text-gray-600">{pair.out.name}</span>
                </div>
              </div>
              <button
                className="mr-1"
                onClick={(e) => handleDeletePair(e, pair)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                  fill="#6b7280"
                >
                  <path d="M480-444.616 270.307-234.924q-7.23 7.231-17.499 7.423-10.269.193-17.884-7.423-7.616-7.615-7.616-17.691 0-10.077 7.616-17.692L444.616-480 234.924-689.693q-7.231-7.23-7.423-17.499-.193-10.269 7.423-17.884 7.615-7.616 17.691-7.616 10.077 0 17.692 7.616L480-515.384l209.693-209.692q7.23-7.231 17.499-7.423 10.269-.193 17.884 7.423 7.616 7.615 7.616 17.691 0 10.077-7.616 17.692L515.384-480l209.692 209.693q7.231 7.23 7.423 17.499.193 10.269-7.423 17.884-7.615 7.616-17.691 7.616-10.077 0-17.692-7.616L480-444.616Z" />
                </svg>
              </button>
            </div>
          ))
        )
      ) : null}
    </div>
  );
}

export default MyDropzone;
