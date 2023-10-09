import {StarterKit} from "@tiptap/starter-kit";
import {BubbleMenu, EditorContent, useEditor} from "@tiptap/react";

// eslint-disable-next-line react/prop-types
const RichtextEditor = ({value, setValue, key}) => {
    const extensions = [
        StarterKit,
    ]

    const content = value;

    const editor = useEditor({
        extensions,
        content,

        onUpdate({editor}) {
            setValue(editor.getHTML());
        }
    })

    console.log(value);

    return (
        <section>
            <h2>Editor</h2>

            <EditorContent editor={editor}/>

            <BubbleMenu editor={editor}>
                <button onClick={() => editor.chain().toggleBold().focus().run()}>bold</button>
            </BubbleMenu>
        </section>
    );
};

export default RichtextEditor;
