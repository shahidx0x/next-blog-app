"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import "suneditor/dist/css/suneditor.min.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});
import SunEditorCore from "suneditor/src/lib/core";

const Editor = (props: any) => {
  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  return <SunEditor getSunEditorInstance={getSunEditorInstance} {...props} />;
};

export default Editor;
