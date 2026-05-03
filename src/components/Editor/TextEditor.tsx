"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "",
  });

  
  const editorState = useEditorState({
    editor,
    selector: (ctx) => ({
      bold: ctx.editor.isActive("bold"),
      italic: ctx.editor.isActive("italic"),
      underline: ctx.editor.isActive("underline"),
    }),
  });

  if (!editor) return null;

  // button style
  const btn = (active: boolean) =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition
     ${
       active
         ? "bg-blue-500 text-white shadow"
         : "bg-none-100 text-white hover:bg-gray-200 text-gray-700"
     }`;

  return (
    <div className="border rounded-lg p-3 space-y-2" onClick={() => editor?.chain().focus().run()}>
      {/* Toolbar */}
      <div className="flex gap-2 border-b pb-2">
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={btn(editorState.bold)}
        >
          <b>B</b>
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={btn(editorState.italic)}
        >
          <i>I</i>
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={btn(editorState.underline)}
        >
          <span className="underline">U</span>
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="min-h-[200px] outline-none text-white prose max-w-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:border-none"
      />
    </div>
  );
}
