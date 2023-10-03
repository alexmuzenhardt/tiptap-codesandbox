import {useState} from 'react';
import {StarterKit} from "@tiptap/starter-kit";
import {BubbleMenu, EditorContent, useEditor} from "@tiptap/react";

// eslint-disable-next-line react/prop-types
const RichtextEditor = ({value, setValue}) => {
	const [showSecondEditor, setShowSecondEditor] = useState(false);

	const extensions = [
		StarterKit,
	]

	const content = value;

	const editor1 = useEditor({
		extensions,
		content,

		onUpdate({editor}) {
			setValue(editor.getHTML());
			editor2.commands.setContent(editor.getHTML());
		}
	})

	const editor2 = useEditor({
		extensions,
		content,

		onUpdate({editor}) {
			setValue(editor.getHTML());
			editor1.commands.setContent(editor.getHTML());
		}
	})

	console.log('VALUE: ', value);

	return (
		<>
			<section>
				<p>First Editor</p>

				<EditorContent editor={editor1}/>

				<BubbleMenu editor={editor1}>
					<button onClick={() => editor1.chain().toggleBold().focus().run()}>bold</button>
				</BubbleMenu>
			</section>

			<section>
				<button onClick={() => setShowSecondEditor(!showSecondEditor)}>Toggle second Editor</button>
			</section>

			{showSecondEditor ? (
				<section>
					<p>Second Editor</p>

					<EditorContent editor={editor2}/>
				</section>
			) : null}
		</>
	);
};

export default RichtextEditor;
