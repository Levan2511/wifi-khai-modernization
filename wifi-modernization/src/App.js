import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';


function App() {
  return (
    <div className="App">
			<Routes>
				<Route path="/:lang" element={<Layout/>}></Route>
			</Routes>
    </div>
  );
}

export default App;
