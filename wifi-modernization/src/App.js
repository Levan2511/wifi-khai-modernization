import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Guide from './layouts/guide/Guide';


function App() {
  return (
    <div className="App">
			<Routes>
				<Route path="/:lang" element={<Layout/>}>
					<Route path="*" element={<Guide/>}/>
				</Route>
			</Routes>
    </div>
  );
}

export default App;
