import './App.scss';
import { Navigate, Route, Routes,  } from 'react-router-dom';
import Layout from './layouts/Layout';
import Guide from './layouts/guide/Guide';
import { MissingRoute } from './MissingRoute';


function App() {
  return (
    <div className="App">
			<Routes>
				<Route path="/:lang" element={<Layout/>}>
					<Route path="*" element={<Guide/>}/>
				</Route>
				<Route path="*" element={<MissingRoute/>} />
			</Routes>
    </div>
  );
}

export default App;
