import {useState} from "react";
import RichtextEditor from "./components/RichtextEditor.jsx";

function App() {
	const [appleEditorValue, setAppleEditorValue] = useState('apple')
	const [bananaEditorValue, setBananaEditorValue] = useState('banana')
	const [selectedEditor, setSelectedEditor] = useState('appleEditor');

	return (
		<main>
			<button onClick={() => setSelectedEditor('appleEditor')}>Show Apple Editor</button>
			<button onClick={() => setSelectedEditor('bananaEditor')}>Show Banana Editor</button>

			{selectedEditor === 'appleEditor' ? (
				<RichtextEditor value={appleEditorValue} setValue={setAppleEditorValue}/>) : (
				<RichtextEditor value={bananaEditorValue} setValue={setBananaEditorValue}/>
			)}
		</main>
	)
}

export default App
