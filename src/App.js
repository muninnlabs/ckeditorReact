import React, { useState } from "react";
import MyEditor from "./myEditor";

export default function App(props) {
  const [editor, setEditor] = useState(null);
  return (
    <>
      <MyEditor
        handleChange={(data) => {
          setEditor(data);
        }}
        data={editor}
        {...props}
      />
    </>
  );
}
