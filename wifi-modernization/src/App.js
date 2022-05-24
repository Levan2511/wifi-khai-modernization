import './App.scss';
import Header from './layouts/header/Header';
import { Route, Routes, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { LanguageService } from './services/LanguageService';
import Sidebar from './layouts/sidebar/Sidebar';
import Layout from './layouts/Layout';


function App() {
	const { lang } = useParams();
	const langService = new LanguageService(lang);

  return (
    <div className="App">
			<Routes>
				<Route path="/:lang" element={<Layout/>}></Route>
			</Routes>
      {/* <Header lang={lang}></Header>
			<div className='container'>
				<div className='row'>
					<Card text='muted' className='info-block'>{
						langService.getLocalizedText({
							'en': 'Wireless communication services of the department "Computer systems and networks"',
							'ua': 'Послуги бездротового зв`язку кафедри "Комп`ютерні системи та мережі"',
							'ru': 'Услуги беспроводной связи кафедры "Компьютерные системы и сети"'
						})
					}</Card>
					
					<div className="col-2"><Sidebar lang={lang}/></div>
					
				</div>
			</div> */}
    </div>
  );
}

export default App;
