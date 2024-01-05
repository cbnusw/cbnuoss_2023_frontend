import Editor from '@/app/utils/ckeditor5/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const EditorTest = ({ isEditorReady, initEditorContent, onEditorChange }) => {
  return (
    <>
      {isEditorReady && (
        <CKEditor
          editor={Editor}
          config={{
            placeholder: '내용을 입력해 주세요',
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            if (initEditorContent) editor.setData(initEditorContent);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onEditorChange(data);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      )}
    </>
  );
};

export default EditorTest;
