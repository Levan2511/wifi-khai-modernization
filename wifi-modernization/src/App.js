import './App.scss';
import Header from './layouts/header/Header';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { LanguageService } from './services/LanguageService';


function App() {
	const { lang } = useParams();
	const langService = new LanguageService(lang);

  return (
    <div className="App">
      <Header lang={lang}></Header>
			<div className='container'>
				<Card text='muted' className='info-block'>{
					langService.getLocalizedText({
						'en': 'Wireless communication services of the department "Computer systems and networks"',
						'ua': 'Послуги бездротового зв`язку кафедри "Комп`ютерні системи та мережі"',
						'ru': 'Услуги беспроводной связи кафедры "Компьютерные системы и сети"'
					})
				}</Card>
			</div>
    </div>
  );
}

export default App;
